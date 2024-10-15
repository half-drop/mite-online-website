/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

    'use strict';

    function init() {
        [].slice.call(document.querySelectorAll('.mpnav')).forEach(function(nav) {
            var navItems = [].slice.call(nav.querySelectorAll('.nav__item'))
              , itemsTotal = navItems.length
              , setCurrent = function(item) {
                // return if already current
                if (item.classList.contains('nav__item--current')) {
                    return false;
                }
                // remove current
                var currentItem = nav.querySelector('.nav__item--current');
                currentItem.classList.remove('nav__item--current');

                // set current
                item.classList.add('nav__item--current');
            };

            navItems.forEach(function(item) {
                item.addEventListener('click', function() {
                    setCurrent(item);
                });
            });
        });

        [].slice.call(document.querySelectorAll('.link-copy')).forEach(function(link) {
            link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
            new Clipboard(link);
            link.addEventListener('click', function() {
                link.classList.add('link-copy--animate');
                setTimeout(function() {
                    link.classList.remove('link-copy--animate');
                }, 300);
            });
        });
    }

    init();

}
)(window);

/*    $("input[type=submit], a, button").button().click(function(event) {
        event.preventDefault();
    });
    ;(function(window) {
    $("#multipage1").onclick = function() {
        alert("hello world");
    }
}
)(window);*/
$(function() {
    $("#multibotton1").bind("click", function() {
        for (var i = 10; i >= 1; i--) {
            if (i != 1) {
                $("#multipage" + i).fadeOut;
                $("#multipage" + i).css("display", "none")
            }
        }
        $("#multipage1").fadeIn();
        $("#multipage1").css("display", "block");
    });
    $("#multibotton2").bind("click", function() {
        for (var i = 10; i >= 1; i--) {
            if (i != 2) {
                $("#multipage" + i).fadeOut;
                $("#multipage" + i).css("display", "none")
            }
        }
        $("#multipage2").fadeIn();
        $("#multipage2").css("display", "block");
    });
    $("#multibotton3").bind("click", function() {
        for (var i = 10; i >= 1; i--) {
            if (i != 3) {
                $("#multipage" + i).fadeOut;
                $("#multipage" + i).css("display", "none")
            }
        }
        $("#multipage3").fadeIn();
        $("#multipage3").css("display", "block");
    });
    $("#multibotton4").bind("click", function() {
        for (var i = 10; i >= 1; i--) {
            if (i != 4) {
                $("#multipage" + i).fadeOut;
                $("#multipage" + i).css("display", "none")
            }
        }
        $("#multipage4").fadeIn();
        $("#multipage4").css("display", "block");
    });
    $("#multibotton5").bind("click", function() {
        for (var i = 10; i >= 1; i--) {
            if (i != 5) {
                $("#multipage" + i).fadeOut;
                $("#multipage" + i).css("display", "none")
            }
        }
        $("#multipage5").fadeIn();
        $("#multipage5").css("display", "block");
    });
    $("#multibotton6").bind("click", function() {
        for (var i = 10; i >= 1; i--) {
            if (i != 6) {
                $("#multipage" + i).fadeOut;
                $("#multipage" + i).css("display", "none")
            }
        }
        $("#multipage6").fadeIn();
        $("#multipage6").css("display", "block");
    });
        $("#multibotton7").bind("click", function() {
        for (var i = 10; i >= 1; i--) {
            if (i != 7) {
                $("#multipage" + i).fadeOut;
                $("#multipage" + i).css("display", "none")
            }
        }
        $("#multipage7").fadeIn();
        $("#multipage7").css("display", "block");
    });
        $("#multibotton8").bind("click", function() {
        for (var i = 10; i >= 1; i--) {
            if (i != 8) {
                $("#multipage" + i).fadeOut;
                $("#multipage" + i).css("display", "none")
            }
        }
        $("#multipage8").fadeIn();
        $("#multipage8").css("display", "block");
    });
        $("#multibotton9").bind("click", function() {
        for (var i = 10; i >= 1; i--) {
            if (i != 9) {
                $("#multipage" + i).fadeOut;
                $("#multipage" + i).css("display", "none")
            }
        }
        $("#multipage9").fadeIn();
        $("#multipage9").css("display", "block");
    });
        $("#multibotton6").bind("click", function() {
        for (var i = 10; i >= 1; i--) {
            if (i != 10) {
                $("#multipage" + i).fadeOut;
                $("#multipage" + i).css("display", "none")
            }
        }
        $("#multipage10").fadeIn();
        $("#multipage10").css("display", "block");
    });
})
