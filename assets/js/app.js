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

  // Load more
    var pagination_next_url = document.querySelector('link[rel=next]').getAttribute('href'),
        $load_posts_button  = document.querySelector('.it-load-posts');

    $load_posts_button.click(function(e) {
        e.preventDefault();

        var request_next_link = pagination_next_url.split(/page/)[0] + 'page/' + pagination_next_page_number + '/';

        $.ajax({
        url: request_next_link,
        beforeSend: function() {
            $load_posts_button.text('{{t "Loading"}}');
            $load_posts_button.addClass('loading');
        }
        }).done(function(data) {
            var posts = $('.post', data);

            $load_posts_button.text('{{t "Load More"}}');
            $load_posts_button.removeClass('loading');

                console.log(posts)
            $('.it-postfeed').append(posts);

           

            pagination_next_page_number++;

            // If you are on the last pagination page, add the disabled attribute
            if (pagination_next_page_number > pagination_available_pages_number) {
                $load_posts_button.attr('disabled', true);
            }
        });
        
    });