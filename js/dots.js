$('.products-list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1168,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
