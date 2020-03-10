// var timer = requestAnimationFrame(function() {

// });
/*
var zoomInTimer, zoomOutTimer;
var start = 0, during = 1000, height = 850;
var zoomIn = function() {
  start = start + 2;
  height = height + 2;
  $('.page-index .hook01').css({
    zoom: 1 + (start / 1000),
  });
  if (start < during) {
    zoomInTimer = requestAnimationFrame(zoomIn);
  }
};
var zoomOut = function() {
  start = start - 2;
  height = height - 2;
  $('.page-index .hook01').css({
    zoom: 1,
  });
  if (start > -2) {
    zoomOutTimer = requestAnimationFrame(zoomOut);
  }
};
$('body').on('mouseover', '.page-index', function (){
  cancelAnimationFrame(zoomOutTimer);
  zoomIn();
});
$('body').on('mouseout', '.page-index', function (){
  cancelAnimationFrame(zoomInTimer);
  zoomOut();
});
*/

$(".hook010102").animate({
  opacity: 0,
}, 4000);

setTimeout(function() {
  $('.page-index .hook0201, .page-index .hook0202, .page-index .hook0203').addClass('in');
}, 1000);


$('body').on('mouseover', '.page-index', function() {
  $('.page-index .hook0101').addClass('zoomIn');
});
$('body').on('mouseout', '.page-index', function() {
  $('.page-index .hook0101').removeClass('zoomIn');
});