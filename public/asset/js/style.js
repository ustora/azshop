$(function () {
  new WOW().init();
  $('#content .product-container .product-image .quickview a').click(function (e) {
    e.preventDefault();

  });



  // swiper slider
  var swiper = new Swiper('.swiper-slider', {
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: '.swiper-pag-slider',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // end swiper slider

  // swiper prodcut
  var swiper1 = new Swiper('.swiper-product', {

    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }
  });
  // end swiper prodcut

  // swiper brand
  var myPlugin = {
    name: 'debugger',
    params: {
      debugger: false,
    },
    on: {
      init: function () {
        if (!this.params.debugger) return;
        console.log('init');
      },
      click: function (e) {
        if (!this.params.debugger) return;
        console.log('click');
      },
      tap: function (e) {
        if (!this.params.debugger) return;
        console.log('tap');
      },
      doubleTap: function (e) {
        if (!this.params.debugger) return;
        console.log('doubleTap');
      },
      sliderMove: function (e) {
        if (!this.params.debugger) return;
        console.log('sliderMove');
      },
      slideChange: function () {
        if (!this.params.debugger) return;
        console.log('slideChange', this.previousIndex, '->', this.activeIndex);
      },
      slideChangeTransitionStart: function () {
        if (!this.params.debugger) return;
        console.log('slideChangeTransitionStart');
      },
      slideChangeTransitionEnd: function () {
        if (!this.params.debugger) return;
        console.log('slideChangeTransitionEnd');
      },
      transitionStart: function () {
        if (!this.params.debugger) return;
        console.log('transitionStart');
      },
      transitionEnd: function () {
        if (!this.params.debugger) return;
        console.log('transitionEnd');
      },
      fromEdge: function () {
        if (!this.params.debugger) return;
        console.log('fromEdge');
      },
      reachBeginning: function () {
        if (!this.params.debugger) return;
        console.log('reachBeginning');
      },
      reachEnd: function () {
        if (!this.params.debugger) return;
        console.log('reachEnd');
      },
    },
  };
  Swiper.use(myPlugin);
  // Init Swiper
  var swiper = new Swiper('.swiper-brand', {
    slidesPerView: 6,
    pagination: {
      el: '.swiper-pag-brand',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
    },
    // Enable debugger
    debugger: false,
  });
  // end swiper brand

  // var modal = setInterval(function(){
  //   alert(0);
  //   clearInterval(modal);
  // },2000)

   // swiper quickview
   var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,

    thumbs: {
      swiper: galleryThumbs
    }
  });
// end quc view

})