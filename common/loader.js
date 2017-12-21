/**
 * loadScript("thie-rest.js",function(){
 *  Application.init();
 * });
 * @param {*} url js文件路径
 * @param {*} callbabck 回调函数
 * 
 * LazyLoad 是loadScript的增强版，支持下载多个Js文件
 * https://github.com/rgrove/lazyload
 * 用法如下：
 * var url = "thie-rest.js";//["first-file.js","the-rest.js"]
 * LazyLoad.js(url,function(){
 *  Application.init();
 * });
 */
function loadScript(url, callbabck) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) { //IE
        script.onreadystatechange = function () {
            if (script.readyState = "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callbabck();
            }
        };
    } else { //other brower
        script.onload = function () {
            callbabck();
        }
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}