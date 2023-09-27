// Sticky Nav and got to top button
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll_top').addClass("show");
        } else {
            $('.scroll_top').removeClass("show");
        }
    });
    
    $('.scroll_top').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });
    
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing Effect
    var typed = new Typed(".typing", {
        strings: ["Developer", "Freelancer", "Designer"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Freelancer", "Designer"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// Function to open the lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Function to load more images (you can customize this)
function loadMoreImages() {
    // You can fetch more images from a server here and append them to the .gallery container
}

// Add event listener to close the lightbox when clicking outside of the image
document.getElementById('lightbox').addEventListener('click', function (event) {
    if (event.target === this) {
        closeLightbox();
    }
});