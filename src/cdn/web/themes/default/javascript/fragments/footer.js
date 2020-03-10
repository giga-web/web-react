/* 显示隐藏联系我们 */
function showHook02(argument) {
  $('.hook02').addClass('show');
}
function hideHook02(argument) {
  $('.hook02').removeClass('show');
}

function loadImage(obj, url, callback) {
  if (!url) { return; }

  var img = new Image();
      img.src = url;

  // 判断图片是否在缓存中
  if(img.complete){
    callback.call(img,obj);
    return;
  }

  // 图片加载到浏览器的缓存中回调函数
  img.onload = function() {
    callback.call(img, obj);
  } 
}

function showImage(obj){
  obj.src = this.src;
}

var imgs = document.querySelectorAll('img');

for(var i = 0; i<imgs.length; i++) {
  var url = imgs[i].getAttribute('default');
  loadImage(imgs[i], url, showImage); 
}