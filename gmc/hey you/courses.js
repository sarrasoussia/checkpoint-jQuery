
var textarea=document.getElementById("text");
var selectsize=document.getElementById("sizeoption");
var selectstyle=document.getElementById("styleoption");

function bold() {
    textarea.style.fontWeight="bold";
}
function italic() {
    textarea.style.fontStyle="italic";
}
function underline() {
    textarea.style.textDecoration="underline";
}
function textsize() {
    textarea.style.fontSize=selectsize.value;
}
function fontStyle() {
    textarea.style.fontFamily=selectstyle.value;
}



$(document).ready(function() {
    $(".firstimg").hover(function(){
       $(this).css('opacity','0.5');
       
       },function(){
      $(this).css('opacity','1');
    });
  

    $('.firstimg').hover(function(){
    ($(this).children('button')).css('visibility','visible');

    },function(){
      ($(this).children('button')).css('visibility','hidden');
    });

});







