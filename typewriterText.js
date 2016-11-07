"use strict";
function Typewriter() {
var textLength = 0;
var messageCount = 0;
var textNode = document.querySelectorAll("[data-typewriter]");
var textArray = [''];
var ts = 100;
var es = 70;
var delay = 2000;
var repeat = false;
    this.type = function(obj){
      textArray = obj.messageArray ? obj.messageArray : [''];
      ts = obj.characterDelay ? obj.characterDelay : ts;
      es = obj.eraseDelay ? obj.eraseDelay : es;
      delay = obj.delayBeforeErase ? obj.delayBeforeErase : delay;
      repeat = obj.loop ? obj.loop : repeat;
      textNode = obj.className ? document.getElementsByClassName(obj.className) : textNode;
        startType(ts, es, delay, textNode, textArray, repeat);
    }
    function startType(a, d, g, f, c, b) {
        if (c[messageCount]) {
          var tl = textLength++;
          for(var i = 0; i < f.length; i++){
              f[i].innerHTML = c[messageCount].substr(0, tl);
            }
            var e;
            if (textLength <= c[messageCount].length) {
                e = setTimeout(function(){startType(a, d, g, f, c, b)}, a)
            } else {
                clearTimeout(e);
                setTimeout(function(){untype(f, es)}, g)
            }
        }
    }
    function untype(b, a) {
        if (textArray[messageCount].substr(0, textLength--)) {
          var tl = textLength--;
              for(var j = 0; j < b.length; j++){
            b[j].innerHTML = textArray[messageCount].substr(0, tl);
            }
            var c;
            if (textLength > 0) {
                c = setTimeout(function(){untype(b, a)}, a)
            } else {
                clearTimeout(c);
                messageCount++;
                if (repeat) {
                    if (messageCount == textArray.length) {
                        messageCount = 0
                    }
                }
                startType(ts, es, delay, b, textArray, repeat);
            }
        }
    }
}
function animateCursor() {
    var className = 'cursor';
    var delay = 750;
    this.animate = function(obj){
    if(obj.className){
      className = obj.className;
    }
    if(obj.delay){
      delay = obj.delay;
    }
      var cursorElement = document.getElementsByClassName(className);
      setInterval(function(){
        for(var i=0 ; i < cursorElement.length; i++){
          cursorElement[i].style.transition = 'all '+ delay/1000 +'s';
          cursorElement[i].style.opacity = 0;
        }
        setTimeout(function(){
          for(var i=0 ; i < cursorElement.length; i++){
            cursorElement[i].style.transition = 'all '+ delay/1000 +'s';
            cursorElement[i].style.opacity = 1;
          }
        }, 750);
      }, delay*2);
  }
}
