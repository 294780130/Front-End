
/**
 * ���ߣ����ǲ��ͽ�������
 * �������ڣ�2015/12/25
 * ������ͨ�ÿ��
 * ��Ȩ���� Υ�߱ؾ�
 */

//����һ������ - ������$
var $$ = function() {};
//�ڶ���д��
$$.prototype = {
	//ȥ����߿ո�
	ltrim:function(str){
		return str.replace(/(^\s*)/g,'');
	},
	//ȥ���ұ߿ո�
	rtrim:function(str){
		return str.replace(/(\s*$)/g,'');
	},
	//ȥ���ո�
	trim:function(str){
		return str.replace(/(^\s*)|(\s*$)/g, '');
	},
	//ajax - ǰ������ѧϰ��
	myAjax:function(URL,fn){
		var xhr = createXHR();	//������һ�������������IE6���ݡ�
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
					fn(xhr.responseText);
				}else{
					alert("������ļ���");
				}
			}
		};
		xhr.open("get",URL,true);
		xhr.send();

		//�հ���ʽ����Ϊ�������ֻ������ajax���������Է�������
		function createXHR() {
			//�����������ڡ�JavaScript�߼�������� ��3�桷��21��
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
		//��λ�ȡĳ����Ԫ���������Ԫ��
		var box = document.getElementById(id);
		var spans = box.getElementsByTagName('span');
		var lis = box.getElementsByTagName('li');


		//������
		//��һ��: �Ȱ��ϰ벿��ʵ��
		//Ⱥ����¼�  -- �����е�span���¼�
		//Ⱥ����¼�
		for(var i=0;i<spans.length;i++) {
			//���׷���  -- ����һ��һ������  --  ��ô�� -- �Զ�������
			spans[i].index=i;
			spans[i].onmouseover = function() {
				//����˼�� --  �����е�span��ΪĬ��״̬  --- Ȼ���ٽ���ǰ������ϵ�span��Ϊclass -- select
				for(var i=0;i<spans.length;i++) {
					spans[i].className='';
					lis[i].className='';
				}
				this.className='select';
				lis[this.index].className='select';
			}
		}

	},
	//�򵥵����ݰ�formateString
	formateString:function(str, data){
		return str.replace(/@\((\w+)\)/g, function(match, key){
			return typeof data[key] === "undefined" ? '' : data[key]});
	},
	//��һ���������书��
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
		//��������
		for(var i in source){
			tar[i] = source[i];
		}
		return tar;
	},
	//�����
	random: function (begin, end) {
		return Math.floor(Math.random() * (end - begin)) + begin;
	},
	//��һ���������书��
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
		//��������
		for(var i in source){
			tar[i] = source[i];
		}
		return tar;
	},
	//�������ͼ��
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
//�ڿ����ʵ��������������ʹ�õ�ʹ�þͲ���ʵ������
$$ = new $$();


//��װ�����¼�
$$.extend($$,{
	on: function (id, type, fn){
		var dom = $$.isString(id)?document.getElementById(id):id;
		//���֧��
		//W3C�汾 --��� �ȸ� �ȴ���������
		//�������������Ƿ�֧��ĳ�����ԣ�����������ͨ�����ַ�ʽ
		if(dom.addEventListener ){
			dom.addEventListener(type, fn, false);
		}else if(dom.attachEvent){
			//���֧�� --IE
			//
			dom.attachEvent('on' + type, fn);
		}
	},
	un:function(id, type, fn){
		var dom = $$.isString(id)?document.getElementById(id):id;
		if(dom.removeEventListener){
			dom.removeEventListener(type, fn);
		}else if(dom.detachEvent){
			dom.detachEvent(type, fn);
		}
	},
	trigger: function(id,type){
		var dom = $$.isString(id)?document.getElementById(id):id;
		// �ִ������
		if(dom.dispatchEvent){
			// �����¼�
			var evt = document.createEvent('Event');
			// �����¼�������
			evt.initEvent(type, true, true);
			// �����¼�
			dom.dispatchEvent(evt);
			// IE
		} else if(dom.fireEvent){
			dom.fireEvent('on' + type);
		}
	},
	//�¼�����
	getEvent:function(event){
		return event?event:window.event;
	},
	//��ȡĿ��
	GetTarget :function(event){
		var e = $$.getEvent(event);
		return e.target|| e.srcElement;
	},
	//��֯Ĭ����Ϊ
	preventDefault:function(event){
		var event = $$.getEvent(event);
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	//��֯ð��
	stopPropagation:function(event){
		var event = $$.getEvent(event);
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	}
})



//��װһЩ���õ�dom����
$$.extend($$,{
	//idѡ����
    $id:function(id){
        return document.getElementById(id);
    },
	//tagѡ����
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
	//classѡ����
	$class:function(className,context){
		var i=0,len,dom=[],arr=[];
		//������ݹ��������ַ��� ����ת����Ԫ�ض���
		if(context && $$.isString(context)){
			context = document.getElementById(context);
		}else{
			context = document;
		}
//        �������getElementsByClassName
		if(context.getElementsByClassName){
			return context.getElementsByClassName(className);
		}else{
			//����������֧��
			dom = context.getElementsByTagName('*');

			for(i;len=dom.length,i<len;i++)
			{
				if(dom[i].className)
				{
					arr.push(dom[i]);
				}
			}
		}
		return arr;
	},
	//����ѡ����
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
				//ÿ��ѭ����doms������reult��
				//result.push(doms);//������Դ

				//����1��� ��װ�ظ��Ĵ���ɺ���
				pushArray(doms,result)

			}else if(first ==='#'){
				doms=[$$.$id(item.slice(index+1))]//���壺֮ǰ���Ƕ����doms�����飬����$id��ȡ�Ĳ������飬���ǵ���Ԫ��
				//��װ�ظ��Ĵ���ɺ���
				pushArray(doms,result)
			}else{
				doms = $$.$tag(item)
				pushArray(doms,result)
			}
		}
		return result;

		//��װ�ظ��Ĵ���
		function pushArray(doms,result){
			for(var j= 0, domlen = doms.length; j < domlen; j++){
				result.push(doms[j])
			}
		}
	},
	//���ѡ����
	$cengci:function (select){
	//�������Ʒ��� -- Ѱ�һ��Ƶ�
	var sel = $$.trim(select).split(' ');
	var result=[];
	var context=[];
	for(var i = 0, len = sel.length; i < len; i++){
		result=[];
		var item = $$.trim(sel[i]);
		var first = sel[i].charAt(0)
		var index = item.indexOf(first)
		if(first ==='#'){
			//�����#���ҵ���Ԫ�أ�
			pushArray([$$.$id(item.slice(index + 1))]);
			context = result;
		}else if(first ==='.'){
			//�����.
			//�����.
			//�ҵ�context�����е�classΪ��s-1����Ԫ�� --context�Ǹ�����
			if(context.length){
				for(var j = 0, contextLen = context.length; j < contextLen; j++){
					pushArray($$.$class(item.slice(index + 1), context[j]));
				}
			}else{
				pushArray($$.$class(item.slice(index + 1)));
			}
			context = result;
		}else{
			//����Ǳ�ǩ
			//�������ף��ҵ������е�Ԫ��==���׶�����context��
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

	//��װ�ظ��Ĵ���
	function pushArray(doms){
		for(var j= 0, domlen = doms.length; j < domlen; j++){
			result.push(doms[j])
		}
	}
},
	//����+���
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

	//��װ�ظ��Ĵ���
	function pushArray(doms){
		for(var j= 0, domlen = doms.length; j < domlen; j++){
			result.push(doms[j])
		}
	}
},
    //��ĳ��Ԫ��������ʽ
    css:function(id, key, value){
        $$.$id(id).style[key] = value;
    },
    //��ĳ��Ԫ����������
    attr:function(id, key, value){
        $$.$id(id)[key] = value;
    },
    //��ĳ��Ԫ����������
    html:function(id, value){
        $$.$id(id).innerHTML = value;
    }

})


