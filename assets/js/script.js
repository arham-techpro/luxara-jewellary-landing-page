$('.collection-items-slider').slick({
    centerMode: true,
    infinite: true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '0px',
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
          