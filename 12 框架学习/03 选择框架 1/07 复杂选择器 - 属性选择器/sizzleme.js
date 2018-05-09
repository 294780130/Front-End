var sizzle =function(){
    //正则表达式片段
    // 为正则准备的字符串。匹配选择器中的布尔值，例如 $( "input:checked" );
    var booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped"
    // 为正则准备的字符串。匹配所有空白符，包括空格、下一制表符、回车、换行
    var whitespace = "[\\x20\\t\\r\\n\\f]"
    // 为正则准备的字符串。匹配unicode编码形式的字符串？？？
    var characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+"
    var  identifier = characterEncoding.replace( "w", "w#" )
    var attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
        "*(?:([*^$|!~]?=)" + whitespace + "*(?:([‘\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]"
    var pseudos = ":(" + characterEncoding + ")(?:\\((([‘\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)"
    var  hitespace = "[\\x20\\t\\r\\n\\f]",
    //字符编码正则字符串
        characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        identifier = characterEncoding.replace( "w", "w#" ),
    //可用的属性操作符
        operators = "([*^$|!~]?=)",
    //属性选择器正则
        attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
            "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",
    //伪类正则字符串
        pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",
    // 去掉两端空白和字符串中的反斜杠（如果连续两个去掉一个）正则
        rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
    //并联选择器的正则
        rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
    //关系选择器正则
        rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
    //伪类正则字符串
        rpseudo = new RegExp( pseudos ),
        ridentifier = new RegExp( "^" + identifier + "$" )



    //各种选择器的正则表达式
    var matchExpr = {
            //用于适配id选择器
            "ID": new RegExp( "^#(" + characterEncoding + ")" ),
            //用于匹配CLASS选择器
            "CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
            //用于匹配NAME选择器
            "NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
            //用于匹配TAG选择器
            "TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
            //用于匹配属性选择器
            "ATTR": new RegExp( "^" + attributes ),
            //用于匹配包含伪类的选择器
            "PSEUDO": new RegExp( "^" + pseudos ),
            "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
            //开始为>+~或位置伪类，如果选择器中有位置伪类解析从左往右
            "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
        },
    //弟兄正则
        rsibling = /[\x20\t\r\n\f]*[+~]/,
    //原生函数正则
        rnative = /^[^{]+\{\s*\[native code/,

    //仅仅单个id或tag、class选择器正则（用来快速解析并获取元素）
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    //jQuery自定义的伪类，它们不是的CSS规范的一部分，使用它们查询不能充分利用原生DOM提供的querySelectorAll() 方法来提高性能。为了在现代浏览器上获得更佳的性能，请使用 .filter(":input")代替。
        rinputs = /^(?:input|select|textarea|button)$/i,
    //同上
        rheader = /^h\d$/i,

        rescape = /'|\\/g,
    //属性没带引号正则
        rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

    //css转义，配合funescape使用 如：string.replace(runescape, funescape);
        runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g;

    //判断传递过来的参数是什么
    isID=function (str){
        return matchExpr.ID.test(str);
    },
        isTAG=function (str){
            return matchExpr.TAG.test(str);
        },
        isClass=function (str){
            return matchExpr.CLASS.test(str);
        },
        isAttr=function (str){
            return matchExpr.ATTR.test(str);
        },
        isWeilei=function (str){
            return matchExpr.CHILD.test(str);
        },
        //    测试
        //    console.log(isID("#id"))
        //    console.log(isTAG("div"))
        //    console.log(isClass(".div"))
        //    console.log(isAttr("[title='game']"))
        //    console.log(isWeilei("div:lang"))
        //    获取匹配的字符串
        //    a）match是返回所有匹配的字符串合成的数组，
        // 但是正则表达式必须指定全局g属性才能返回所有匹配，不指定g属性则会返回一个只有一个元素的数组。

        //    b）exec永远返回与第一个匹配相关的信息，其返回数组包括第一个匹配的字串，所有分组的反向引用。
        getIDMatch=function (str) {
            return str.match(matchExpr.ID);
        },
        getClassMatch=function (str) {
            return str.match(matchExpr.CLASS);
        },
        getTagMatch=function (str) {
            return str.match(matchExpr.TAG);
        },
        getAttrMatch=function (str) {
            return str.match(matchExpr.ATTR);
        },
        getWeileiMatch=function (str) {
            return str.match(matchExpr.CHILD);
        },
        //    console.log(getIDMatch("#id"))
        //    console.log(getClassMatch(".div"))
        //    console.log(getTagMatch("div"))
        //    console.log(getAttrMatch("[title='game']"))
        //    console.log(getWeileiMatch(":first-child"))

        //    实现原理，其实很简单，其实就是正则表达式的匹配
        //tag[attr] tag[attr=value]  tag[attr*=value] tag[attr~=value]
        this.$get=function (str){
            var doms=[];
            if(isID(str)){
                var id= RegExp.$1;
                doms=  [$$.$id(id)]
            }else if(isTAG(str)){
                var tag= RegExp.$1;
                doms=  $$.$tag(tag)
            }else if(isClass(str)){
                var className = RegExp.$1
                doms=  $$.$class(className)
            }else if(isAttr(str)){
                var attrName = RegExp.$1;
                var operator = RegExp.$2;
                var attrValue=RegExp.$4;
                console.log(attrName)
                console.log(operator)
                console.log(attrValue)
                var checkfunction;
                if(operator ==='='){
                    checkfunction=function(e){return(e.getAttribute(attrName) == attrValue);}
                }else if(operator ==='*='){
                    checkfunction = function(e){return(e.getAttribute(attrName).indexOf(attrValue)>-1)}
                }else if(operator ==='^='){
                    checkfunction = function(e){return(e.getAttribute(attrName).indexOf(attrValue) == 0)}
                }else if(operator ==='$='){
                    checkfunction = function(e){return(e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length-attrValue.length)}
                }else{
                    checkfunction=function(e){return(e.getAttribute(attrName));}
                }

                var all = document.getElementsByTagName('*')
                for(var i = 0,len=all.length;i<len;i++){
                    if(checkfunction(all[i])){
                        doms.push(all[i])
                    }
                }


            }else if(this.isWeilei(str)){

            }
            return doms;
        }

}
sizzle = new sizzle()