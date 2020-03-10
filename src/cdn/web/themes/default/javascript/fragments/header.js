/* requestAnimationFrame.js
 * by zhangxinxu 2013-09-30
*/
/*
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
                                      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());
*/

// 合作院校
$('body').on('mouseover', '.page-header .hook01-1, .page-header .hook10', function() {
  $('.page-header .hook01-1').addClass('slideDown');
  $('.page-header .hook10').addClass('slideDown');
});
$('body').on('mouseout', '.page-header .hook01-1, .page-header .hook10', function() {
  $('.page-header .hook01-1').removeClass('slideDown');
  $('.page-header .hook10').removeClass('slideDown');
});

// 业务板块
$('body').on('mouseover', '.page-header .hook01-2, .page-header .hook20', function() {
  $('.page-header .hook01-2').addClass('slideDown');
  $('.page-header .hook20').addClass('slideDown');
});
$('body').on('mouseout', '.page-header .hook01-2, .page-header .hook20', function() {
  $('.page-header .hook01-2').removeClass('slideDown');
  $('.page-header .hook20').removeClass('slideDown');
});