(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


})(jQuery);

// ==========================
// CHATBOT AUTO OPEN
// ==========================

window.addEventListener("DOMContentLoaded", function () {

    const chatBox = document.getElementById("chatBox");
    const chatButton = document.getElementById("chatButton");

    if (!chatBox || !chatButton) return;

    // Mở chat khi click icon
    chatButton.addEventListener("click", function () {
        chatBox.style.display = "block";
    });

    // Hàm đóng chat
    window.closeChat = function () {
        chatBox.style.display = "none";

        // Lưu thời điểm đóng
        localStorage.setItem("chatClosedTime", Date.now());
    };

    // Kiểm tra trang hiện tại
    const currentPage = window.location.pathname.split("/").pop();

    // Chỉ tự mở ở trang chủ
    if (currentPage === "" || currentPage === "index.html") {

        const closedTime = localStorage.getItem("chatClosedTime");
        const now = Date.now();
        const hours24 = 24 * 60 * 60 * 1000;

        let shouldOpen = false;

        // Chưa từng đóng
        if (!closedTime) {
            shouldOpen = true;
        }
        // Đã quá 24 giờ kể từ lần đóng cuối
        else if ((now - parseInt(closedTime, 10)) > hours24) {
            shouldOpen = true;
        }

        if (shouldOpen) {
            setTimeout(function () {
                chatBox.style.display = "block";
            }, 3000);
        }
    }

});
