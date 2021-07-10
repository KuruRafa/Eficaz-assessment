//Menu mobile
$('.menu_bar-item').click(function(){
    $(this).find('div').first().toggleClass('open');
});

$('.toogle_menu').click(function(){
    $('.menu_bar').addClass('open');
});

$('.close_menu').click(function(){
    $('.menu_bar').removeClass('open');
});

//Showcase product infos
$('.showcase_product').each(function(){
    //Calculating amount of discount
    var regular = parseFloat($(this).find('.product_price .regular_price').attr('value'));
    var price = parseFloat($(this).find('.product_price .price').attr('value'));
    if (regular > price) {
        var discount = Math.round((regular - price) * 100 / regular);
        $(this).find('.discount').text(`-${discount}%`);
    } else {
        $(this).find('.discount').remove();
    }

    //Adding rating stars
    var rating = parseInt($(this).find('.product_rating').attr('value'));
    for (i=0; i<5; i++) {
        if(i < rating ) {
            $(this).find('.product_rating i').eq(i).removeClass('fa-star-o').addClass('fa-star')
        }
    }
});

//Top Bar carousel
if ($(window).width() < 992) {
    $('.top_bar-carousel').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        autoplay: true
    });
}

if ($(window).width() < 768) {
    $('.mosaic_banner').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        autoplay: true
    })

    $('.footer_title').click(function(){
        $(this).siblings('ul').slideToggle();
    })
}

$(window).resize(function() {

    if ($(window).width() < 992) {
        $('.top_bar-carousel:not(".slick-initialized")').slick({
            slidesToShow: 1,
            arrows: false,
            dots: false,
            autoplay: true
        })
    } else {
        $('.top_bar-carousel').slick('unslick');
    }

    if ($(window).width() < 768) {
        $('.mosaic_banner:not(".slick-initialized")').slick({
            slidesToShow: 1,
            arrows: false,
            dots: false,
            autoplay: true
        })

    } else {
        $('.mosaic_banner').slick('unslick');
    }
});

$(document).ready(function(){
    //Top Banner carousel
    $('.banner_carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
    });

    //Showcases
    $('.showcase_carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //Search mobile toggle
    $('.search_btn').click(function(){
        $('.search').slideToggle();
    });

    setTimeout(function(){
        //popup
        var popup = sessionStorage.getItem('popup2');

        if (popup !== 'true') {
            $('.overlay, #popup').fadeIn();
            $('#popup button').click(function(){
                sessionStorage.setItem('popup2', true);
                $('.overlay, #popup').fadeOut();
            });
        }
    }, 1000);

});






