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

    function next(elem){//����ָ��Ԫ�ص���һ��Ԫ���ֵ�
        do{
            elem=elem&&elem.nextSibling;
        }while(elem&&elem.nodeType!=1);
        return elem;
    }
    function prev(elem){//����ָ��Ԫ�ص���һ���ֵ�Ԫ��
        do{
            elem=elem&&elem.previousSibling;
        }while(elem&&elem.codeType!=1)
        return elem;
    }

    function first(elem){//����ָ��Ԫ�صĵ�һ������Ԫ��
        elem=elem.firstChild;
        return elem&&elem.nodeType==1?elem:next(elem);
    }
    function last(elem){//����ָ��Ԫ�ص����һ������Ԫ��
        elem=elem.lastChild;
        return elem&&elem.codeType==1?elem:prev(elem);
    }

    function before(elem,newNode){//��ָ��Ԫ��ǰ����һ����Ԫ��
        elem.parentNode.insertbefore(newNode,elem);
    }
    function after(elem,newNode){//��ָ��Ԫ�غ��һ����Ԫ��
        if(elem.next(elem)){
            before(elem.next(elem),newNode);
        }else{
            elem.parentNode.appendChild(newNode);
        }
    }

    function remove(elem){//ɾ��ָ��Ԫ��
        elem.parentNode.removeChild(elem);
    }

    function siblings(elem){//��ȡ��Ԫ�س���ǰԪ�ص����к���Ԫ��
        var arr=[];
        var elements=elem.parentNode.children;
        for(var i=0;i<elements.length;i++){
            if(element[i]!=elem){
                arr.push(elements[i]);
            }
        }
        return arr;
    }

    function coloneObj(obj){//��¡����
        var newObj={};
        for(var p in obj){
            if(typeof obj[p]=="object"){
                newObj[p]=arguments.callee(obj[p]);//�������ú���
            }else{
                newObj[p]=obj[p];
            }
        }
        return newObj;
    }

    function extend(target,obj){//�ϲ��������õڶ����������Ը��ǵ�һ�����������
        for(var p in obj){
            if(typeof obj.p=="object"){
                target.p=coloneObj(obj);
            }else{
                target.p=obj[p];
            }
        }
        return target;
    }

    function trim(str){//ȥ���ַ�����β�ո�
        return str.replace(/\s+|\s+$/g,'');//�ÿ�ȥ�滻�ո�
    }

    function getStyle(elem,attr) {//��ȡԪ����ʽ
        //�������
        if (elem.currentStyle) {//IE
            return elem.currentStyle[attr];
        }else if(window.getComputedStyle){//��׼�����
            return getComputedStyle(elem,false)[attr];
        }else{
            return elem.getStyle[attr];
        }
    }


function addEvent(elem,type,fn){//��ָ��Ԫ�ذ��¼�
    if(elem.addEventListener){//��׼
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
function removeEvent(elem,type,fn){//��ָ��Ԫ�ؽ���¼�
    if(elem.removeEventListener){//��׼
        elem.removeEventListener(elem,type,false);
    }else if(elem.detachEvent){//IE
        elem.detachEvent('on'+type,elem[type+fn]);
    }else{
        elem['on'+type]=null;
    }
}










