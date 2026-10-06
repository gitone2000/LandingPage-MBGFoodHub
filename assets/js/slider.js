const swiper = new Swiper(".clientSwiper", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    }
});

