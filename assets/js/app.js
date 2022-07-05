$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    transitionStyle: "fade",
    animateIn: "fadeIn",
    animateOut: "fadeOut",
  });
  // });

  // // Hamberger Menu
  // const hambergur = document.querySelector(".hambarger_nav");
  // const hambergurClose = document.querySelector(".hambarger_nav > i");

  // const nave_menu = document.querySelector(".nav_menu");
  // hambergur.addEventListener("click", () => {
  //   nave_menu.classList.toggle("side_nav");
  //   hambergur.classList.toggle("nav_open");
  //   hambergurClose.classList.toggle("fa-times");
});

// function resemb(target, cName) {
//     var frames = typeof target === 'string' ? document.querySelectorAll(target) : target;
//     var c = cName || 'js-resemb';
//     if (!('length' in frames)) frames = [frames];
//         for (var i = 0; i < frames.length; i += 1) {
//             var frame = frames[i];
//             var hasClass = frame.className.split(' ').indexOf(c) !== -1;
//             if (hasClass || frame.style.width.indexOf('%') > -1) continue;
//             var h = frame.getAttribute('height') || frame.offsetHeight;
//             var w = frame.getAttribute('width') || frame.offsetWidth;
//             var padding = h / w * 100;
//             var div = document.createElement('div');
//             div.className = c;
//             var divStyles = div.style;
//             divStyles.position = 'relative';
//             divStyles.width = '100%';
//             divStyles.paddingTop = padding + "%";
//             var frameStyle = frame.style;
//             frameStyle.position = 'absolute';
//             frameStyle.width = '100%';
//             frameStyle.height = '100%';
//             frameStyle.left = '0';
//             frameStyle.top = '0';
//             frame.parentNode.insertBefore(div, frame);
//             frame.parentNode.removeChild(frame);
//             div.appendChild(frame);
//         }
//     }

//     return resemb;

// }

// // Responsive Embed Call

// resemb(document.querySelectorAll('.kg-embed-card iframe'));
