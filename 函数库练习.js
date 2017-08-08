function $(selector,context) {
    context=context||document;
    switch(selector.charAt(0)){
        case '#':
            return [context.getElementById(selector.substring(1))];
            break;
        case '.':
            return [context.getByClass(selector.substring(1), context)];
            break;
        default:
            return [context.getElementsByTagName(selector)];
            break;
    }
}
    function getByClass(className,context){
        context=context||document;
        var result=[];
        var arr=context.getElementsByClassNanme('*');
        var re=new RegExp("//b"+className+"//b");
        for(var i=0;i<arr.length;i++){
            if(re.text(arr[i].className)){
                result.push(arr[i]);
            }
        }
        return result;
    }

    function next(elem){//返回指定元素的下一个元素兄弟
        do{
            elem=elem&&elem.nextSibling;
        }while(elem&&elem.nodeType!=1);
        return elem;
    }
    function prev(elem){//返回指定元素的上一个兄弟元素
        do{
            elem=elem&&elem.previousSibling;
        }while(elem&&elem.codeType!=1)
        return elem;
    }

    function first(elem){//返回指定元素的第一个孩子元素
        elem=elem.firstChild;
        return elem&&elem.nodeType==1?elem:next(elem);
    }
    function last(elem){//返回指定元素的最后一个孩子元素
        elem=elem.lastChild;
        return elem&&elem.codeType==1?elem:prev(elem);
    }

    function before(elem,newNode){//在指定元素前加入一个新元素
        elem.parentNode.insertbefore(newNode,elem);
    }
    function after(elem,newNode){//在指定元素后加一个新元素
        if(elem.next(elem)){
            before(elem.next(elem),newNode);
        }else{
            elem.parentNode.appendChild(newNode);
        }
    }

    function remove(elem){//删除指定元素
        elem.parentNode.removeChild(elem);
    }

    function siblings(elem){//获取父元素除当前元素的所有孩子元素
        var arr=[];
        var elements=elem.parentNode.children;
        for(var i=0;i<elements.length;i++){
            if(element[i]!=elem){
                arr.push(elements[i]);
            }
        }
        return arr;
    }

    function coloneObj(obj){//克隆对象
        var newObj={};
        for(var p in obj){
            if(typeof obj[p]=="object"){
                newObj[p]=arguments.callee(obj[p]);//自身反调用函数
            }else{
                newObj[p]=obj[p];
            }
        }
        return newObj;
    }

    function extend(target,obj){//合并两对象，用第二个对象属性覆盖第一个对象的属性
        for(var p in obj){
            if(typeof obj.p=="object"){
                target.p=coloneObj(obj);
            }else{
                target.p=obj[p];
            }
        }
        return target;
    }

    function trim(str){//去掉字符串首尾空格
        return str.replace(/\s+|\s+$/g,'');//用空去替换空格
    }

    function getStyle(elem,attr) {//获取元素样式
        //能力检测
        if (elem.currentStyle) {//IE
            return elem.currentStyle[attr];
        }else if(window.getComputedStyle){//标准浏览器
            return getComputedStyle(elem,false)[attr];
        }else{
            return elem.getStyle[attr];
        }
    }


function addEvent(elem,type,fn){//给指定元素绑定事件
    if(elem.addEventListener){//标准
        elem.addEventListener(elem,type,false);
    }else if(elem.attachEvent){//IE
        elem[type+fn]=function(){
            fn.call(elem);
        };
        elem.attachEvent('on'+type,elem[type+fn]);
    }else{
        elem['on'+type]=fn;
    }
}
function removeEvent(elem,type,fn){//给指定元素解除事件
    if(elem.removeEventListener){//标准
        elem.removeEventListener(elem,type,false);
    }else if(elem.detachEvent){//IE
        elem.detachEvent('on'+type,elem[type+fn]);
    }else{
        elem['on'+type]=null;
    }
}










