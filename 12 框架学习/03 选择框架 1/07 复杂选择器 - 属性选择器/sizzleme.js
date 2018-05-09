var sizzle =function(){
    //������ʽƬ��
    // Ϊ����׼�����ַ�����ƥ��ѡ�����еĲ���ֵ������ $( "input:checked" );
    var booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped"
    // Ϊ����׼�����ַ�����ƥ�����пհ׷��������ո���һ�Ʊ�����س�������
    var whitespace = "[\\x20\\t\\r\\n\\f]"
    // Ϊ����׼�����ַ�����ƥ��unicode������ʽ���ַ���������
    var characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+"
    var  identifier = characterEncoding.replace( "w", "w#" )
    var attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
        "*(?:([*^$|!~]?=)" + whitespace + "*(?:([��\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]"
    var pseudos = ":(" + characterEncoding + ")(?:\\((([��\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)"
    var  hitespace = "[\\x20\\t\\r\\n\\f]",
    //�ַ����������ַ���
        characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        identifier = characterEncoding.replace( "w", "w#" ),
    //���õ����Բ�����
        operators = "([*^$|!~]?=)",
    //����ѡ��������
        attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
            "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",
    //α�������ַ���
        pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",
    // ȥ�����˿հ׺��ַ����еķ�б�ܣ������������ȥ��һ��������
        rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
    //����ѡ����������
        rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
    //��ϵѡ��������
        rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
    //α�������ַ���
        rpseudo = new RegExp( pseudos ),
        ridentifier = new RegExp( "^" + identifier + "$" )



    //����ѡ������������ʽ
    var matchExpr = {
            //��������idѡ����
            "ID": new RegExp( "^#(" + characterEncoding + ")" ),
            //����ƥ��CLASSѡ����
            "CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
            //����ƥ��NAMEѡ����
            "NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
            //����ƥ��TAGѡ����
            "TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
            //����ƥ������ѡ����
            "ATTR": new RegExp( "^" + attributes ),
            //����ƥ�����α���ѡ����
            "PSEUDO": new RegExp( "^" + pseudos ),
            "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
            //��ʼΪ>+~��λ��α�࣬���ѡ��������λ��α�������������
            "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
        },
    //��������
        rsibling = /[\x20\t\r\n\f]*[+~]/,
    //ԭ����������
        rnative = /^[^{]+\{\s*\[native code/,

    //��������id��tag��classѡ���������������ٽ�������ȡԪ�أ�
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    //jQuery�Զ����α�࣬���ǲ��ǵ�CSS�淶��һ���֣�ʹ�����ǲ�ѯ���ܳ������ԭ��DOM�ṩ��querySelectorAll() ������������ܡ�Ϊ�����ִ�������ϻ�ø��ѵ����ܣ���ʹ�� .filter(":input")���档
        rinputs = /^(?:input|select|textarea|button)$/i,
    //ͬ��
        rheader = /^h\d$/i,

        rescape = /'|\\/g,
    //����û����������
        rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

    //cssת�壬���funescapeʹ�� �磺string.replace(runescape, funescape);
        runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g;

    //�жϴ��ݹ����Ĳ�����ʲô
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
        //    ����
        //    console.log(isID("#id"))
        //    console.log(isTAG("div"))
        //    console.log(isClass(".div"))
        //    console.log(isAttr("[title='game']"))
        //    console.log(isWeilei("div:lang"))
        //    ��ȡƥ����ַ���
        //    a��match�Ƿ�������ƥ����ַ����ϳɵ����飬
        // ����������ʽ����ָ��ȫ��g���Բ��ܷ�������ƥ�䣬��ָ��g������᷵��һ��ֻ��һ��Ԫ�ص����顣

        //    b��exec��Զ�������һ��ƥ����ص���Ϣ���䷵�����������һ��ƥ����ִ������з���ķ������á�
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

        //    ʵ��ԭ����ʵ�ܼ򵥣���ʵ����������ʽ��ƥ��
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