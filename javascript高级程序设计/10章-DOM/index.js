//Node类型
/**
 * Node.ELEMENT_NODE(1)
 * Node.ATTRIBUTE_NODE(2)
 * Node.TEXT_NODE(3)
 * Node.CDATA_SECTION_NODE(4)
 * Node.ENTITY_REFERENCE_NODE(5)
 * Node.ENTITY_NODE(6)
 * Node.PROCESSING_INSTRUCTION_NODE(7)
 * Node.COMMENT_NODE(8)
 * Node.DOCUMENT_NODE(9)
 * Node.DOCUMENT_TYPE_NODE(10)
 * Node.DOCUMENT_FRAGMENT_NODE(11)
 * Node.NOTATION_NODE(12)
 *
 * */


// nodelist 转换成Array

function convertToArray(nodelist){
    let array =  null;
    try {
        Array.prototype.slice(nodelist, 0)
    } catch (e) {
        // IE8- doesn't support
        array = [];
        for (let i = 0,len=nodelist.length; i < len; i++) {
            array.push(nodelist[i])
        }
    }
    return array;
}

//load script

function loadScript(url){
    let script = document.createElement('script')
    script.src = url;
    document.body.appendChild(script);
}

function loadSrciptString(code){
    let script = document.createElement('script')
    try {
        script.appendChild(document.createTextNode(code))
    } catch (e) {
        // IE doesn't support
        script.text = code
    }
    document.body.appendChild(script);
}

//load css
function loadCss(url){
    let link = document.createElement('link')
    link.href = url;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(link);
}

function loadCssString(css){
    let style = document.createElement('style')
    style.type = 'text/css';
    try {
        style.appendChild(document.createTextNode(css))
    } catch (e) {
        // IE doesn't support
        style.styleSheet.cssText = css
    }
    document.body.appendChild(style);
}