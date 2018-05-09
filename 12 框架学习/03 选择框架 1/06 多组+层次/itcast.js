/**
 * 作者：传智播客教育集团
 * 开发日期：2015/12/25
 * 描述：通用框架
 * 版权所有 违者必究
 */

//定义一个对象 - 名字是$
var $$ = function() {};
//第二种写法
$$.prototype = {
	//去除左边空格
	ltrim:function(str){
		return str.replace(/(^\s*)/g,'');
	},
	//去除右边空格
	rtrim:function(str){
		return str.replace(/(\s*$)/g,'');
	},
	//去除空格
	trim:function(str){
		return str.replace(/(^\s*)|(\s*$)/g, '');
	},
	//ajax - 前面我们学习的
	myAjax:function(URL,fn){
		var xhr = createXHR();	//返回了一个对象，这个对象IE6兼容。
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
					fn(xhr.responseText);
				}else{
					alert("错误的文件！");
				}
			}
		};
		xhr.open("get",URL,true);
		xhr.send();

		//闭包形式，因为这个函数只服务于ajax函数，所以放在里面
		function createXHR() {
			//本函数来自于《JavaScript高级程序设计 第3版》第21章
			if (typeof XMLHttpRequest != "undefined") {
				return new XMLHttpRequest();
			} else if (typeof ActiveXObject != "undefined") {
				if (typeof arguments.callee.activeXString != "string") {
					var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
							"MSXML2.XMLHttp"
						],
						i, len;

					for (i = 0, len = versions.length; i < len; i++) {
						try {
							new ActiveXObject(versions[i]);
							arguments.callee.activeXString = versions[i];
							break;
						} catch (ex) {
							//skip
						}
					}
				}

				return new ActiveXObject(arguments.callee.activeXString);
			} else {
				throw new Error("No XHR object available.");
			}
		}
	},
	//tab
	tab:function(id) {
		//如何获取某个父元素下面的子元素
		var box = document.getElementById(id);
		var spans = box.getElementsByTagName('span');
		var lis = box.getElementsByTagName('li');


		//两步走
		//第一步: 先把上半部分实现
		//群体绑定事件  -- 对所有的span绑定事件
		//群体绑定事件
		for(var i=0;i<spans.length;i++) {
			//相亲法则  -- 给男一号一个代号  --  怎么给 -- 自定义属性
			spans[i].index=i;
			spans[i].onmouseover = function() {
				//排他思想 --  将所有的span置为默认状态  --- 然后再将当前鼠标移上的span置为class -- select
				for(var i=0;i<spans.length;i++) {
					spans[i].className='';
					lis[i].className='';
				}
				this.className='select';
				lis[this.index].className='select';
			}
		}

	},
	//简单的数据绑定formateString
	formateString:function(str, data){
		return str.replace(/@\((\w+)\)/g, function(match, key){
			return typeof data[key] === "undefined" ? '' : data[key]});
	},
	//给一个对象扩充功能
	extendMany:function() {
		var key,i = 0,len = arguments.length,target = null,copy;
		if(len === 0){
			return;
		}else if(len === 1){
			target = this;
		}else{
			i++;
			target = arguments[0];
		}
		for(; i < len; i++){
			for(key in arguments[i]){
				copy = arguments[i][key];
				target[key] = copy;
			}
		}
		return target;
	},
	extend:function(tar,source) {
		//遍历对象
		for(var i in source){
			tar[i] = source[i];
		}
		return tar;
	},
	//随机数
	random: function (begin, end) {
		return Math.floor(Math.random() * (end - begin)) + begin;
	},
	//数据类型检测
	isNumber:function (val){
		return typeof val === 'number' && isFinite(val)
	},
	isBoolean:function (val) {
		return typeof val ==="boolean";
	},
	isString:function (val) {
		return typeof val === "string";
	},
	isUndefined:function (val) {
		return typeof val === "undefined";
	},
	isObj:function (str){
		if(str === null || typeof str === 'undefined'){
			return false;
		}
		return typeof str === 'object';
	},
	isNull:function (val){
		return  val === null;
	},
	isArray:function (arr) {
		if(arr === null || typeof arr === 'undefined'){
			return false;
		}
		return arr.constructor === Array;
	}
}
//在框架中实例化，这样外面使用的使用就不用实例化了
$$ = new $$();

/*事件框架*/
$$.extend($$,{
	/*绑定事件*/
	on: function (id, type, fn) {
		//var dom = document.getElementById(id);
		var dom = $$.isString(id)?document.getElementById(id):id;
		//如果支持
		//W3C版本 --火狐 谷歌 等大多数浏览器
		//如果你想检测对象是否支持某个属性，方法，可以通过这种方式
		if(dom.addEventListener ) {
			dom.addEventListener(type, fn, false);
		}else if(dom.attachEvent){
			//如果支持 --IE
			dom.attachEvent('on' + type, fn);
		}
	},
	/*解除事件*/
	un:function(id, type, fn) {
		//var dom = document.getElementById(id);
		var dom = $$.isString(id)?document.getElementById(id):id;
		if(dom.removeEventListener){
			dom.removeEventListener(type, fn);
		}else if(dom.detachEvent){
			dom.detachEvent(type, fn);
		}

	},
	/*点击*/
	click : function(id,fn){
		this.on(id,'click',fn);
	},
	/*鼠标移上*/
	mouseover:function(id,fn){
		this.on(id,'mouseover',fn);
	},
	/*鼠标离开*/
	mouseout:function(id,fn){
		this.on(id,'mouseout',fn);
	},
	/*悬浮*/
	hover : function(id,fnOver,fnOut){
		if(fnOver){
			this.on(id,"mouseover",fnOver);
		}
		if(fnOut){
			this.on(id,"mouseout",fnOut);
		}
	},
	//事件委托
	delegate:function (pid, eventType, selector, fn) {
		//参数处理
		var parent = $$.$id(pid);
		function handle(e){
			var target = $$.GetTarget(e);
			if(target.nodeName.toLowerCase()=== selector || target.id === selector || target.className.indexOf(selector) != -1){
				// 在事件冒泡的时候，回以此遍历每个子孙后代，如果找到对应的元素，则执行如下函数
				// 为什么使用call，因为call可以改变this指向
				// 大家还记得，函数中的this默认指向window，而我们希望指向当前dom元素本身
				fn.call(target);
			}
		}
		//当我们给父亲元素绑定一个事件，他的执行顺序：先捕获到目标元素，然后事件再冒泡
		//这里是是给元素对象绑定一个事件
		parent[eventType]=handle;
	},
	//事件基础
	getEvent:function(event){
		return event?event:window.event;
	},
	//获取目标
	GetTarget :function(event){
		var e = $$.getEvent(event);
		return e.target|| e.srcElement;
	},
	//组织默认行为
	preventDefault:function(event){
		var event = $$.getEvent(event);
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	//阻止冒泡
	stopPropagation:function(event){
		var event = $$.getEvent(event);
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	}
})


//封装一些常用的dom操作
$$.extend($$,{
	//给某个元素设置样式
	css:function(id, key, value){
		$$.$id(id).style[key] = value;
	},
	//给某个元素设置属性
	attr:function(id, key, value){
		$$.$id(id)[key] = value;
	},
	//给某个元素设置内容
	html:function(id, value){
		$$.$id(id).innerHTML = value;
	}

})


/*选择框架*/
$$.extend($$,{
	$id:function (str){
		return document.getElementById(str)
	},
	$tag:function(tag,context){
		if(typeof context == 'string'){
			context = $$.$id(context);
		}
		if(context){
			return context.getElementsByTagName(tag);
		}else{
			return document.getElementsByTagName(tag);
		}
	},
	//class选择器
	$class:function(className,context){
		var elements;
		var dom;
		//如果传递过来的是字符串 ，则转化成元素对象
		if($$.isString(context)){
			context = document.getElementById(context);
		}
		//如果兼容getElementsByClassName
		if(context.getElementsByClassName){
			return context.getElementsByClassName(className);
		}else{
			//如果浏览器不支持
			dom = context.getElementsByTagName('*');
			for(var i,len=dom.length;i<len;i++) {
				if(dom[i].className && dom[i].className ==className ) {
					elements.push(dom[i]);
				}
			}
		}
		return elements;
	},
	//分组选择器
	$group:function(content) {
		var result=[],doms=[];
		var arr = $$.trim(content).split(',');
		//alert(arr.length);
		for(var i=0,len=arr.length;i<len;i++) {
			var item = $$.trim(arr[i])
			var first= item.charAt(0)
			var index = item.indexOf(first)
			if(first === '.') {
				doms=$$.$class(item.slice(index+1))
				//每次循环将doms保存在reult中
				//result.push(doms);//错误来源

				//陷阱1解决 封装重复的代码成函数
				pushArray(doms,result)

			}else if(first ==='#'){
				doms=[$$.$id(item.slice(index+1))]//陷阱：之前我们定义的doms是数组，但是$id获取的不是数组，而是单个元素
				//封装重复的代码成函数
				pushArray(doms,result)
			}else{
				doms = $$.$tag(item)
				pushArray(doms,result)
			}
		}
		return result;

		//封装重复的代码
		function pushArray(doms,result){
			for(var j= 0, domlen = doms.length; j < domlen; j++){
				result.push(doms[j])
			}
		}
	},
	//层次选择器
	$cengci:function (select){
		//个个击破法则 -- 寻找击破点
		var sel = $$.trim(select).split(' ');
		var result=[];
		var context=[];
		for(var i = 0, len = sel.length; i < len; i++){
			result=[];
			var item = $$.trim(sel[i]);
			var first = sel[i].charAt(0)
			var index = item.indexOf(first)
			if(first ==='#'){
				//如果是#，找到该元素，
				pushArray([$$.$id(item.slice(index + 1))]);
				context = result;
			}else if(first ==='.'){
				//如果是.
				//如果是.
				//找到context中所有的class为【s-1】的元素 --context是个集合
				if(context.length){
					for(var j = 0, contextLen = context.length; j < contextLen; j++){
						pushArray($$.$class(item.slice(index + 1), context[j]));
					}
				}else{
					pushArray($$.$class(item.slice(index + 1)));
				}
				context = result;
			}else{
				//如果是标签
				//遍历父亲，找到父亲中的元素==父亲都存在context中
				if(context.length){
					for(var j = 0, contextLen = context.length; j < contextLen; j++){
						pushArray($$.$tag(item, context[j]));
					}
				}else{
					pushArray($$.$tag(item));
				}
				context = result;
			}
		}

		return context;

		//封装重复的代码
		function pushArray(doms){
			for(var j= 0, domlen = doms.length; j < domlen; j++){
				result.push(doms[j])
			}
		}
	},
	//多组+层次
	$select:function(str) {
		var result = [];
		var item = $$.trim(str).split(',');
		for(var i = 0, glen = item.length; i < glen; i++){
			var select = $$.trim(item[i]);
			var context = [];
			context = $$.$cengci(select);
			pushArray(context);

		};
		return result;

		//封装重复的代码
		function pushArray(doms){
			for(var j= 0, domlen = doms.length; j < domlen; j++){
				result.push(doms[j])
			}
		}
	},
})

