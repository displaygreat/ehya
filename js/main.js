$(document).ready(function () {
  var modalButton = $("[data-toggle=modal]");
  var modalCloseButton = $(".modal-dialog__close");

  modalButton.on('click', openModal);
  modalCloseButton.on('click', closeModal);

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      var modalOverlay = $(".modal-overlay");
      var modalDialog = $(".modal-dialog");
      modalOverlay.removeClass('modal-overlay__visible');
      modalDialog.removeClass('modal-dialog__visible')
    }
  });

  function openModal() {
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.addClass('modal-overlay__visible');
    modalDialog.addClass('modal-dialog__visible')
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.removeClass('modal-overlay__visible');
    modalDialog.removeClass('modal-dialog__visible')
  }

  var tab = $('.tab');
  var tabContent = $('.tab-content');

  tab.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    tab.removeClass('tab--active');
    tabContent.removeClass('tab-content--active');
    $(activeContent).addClass('tab-content--active');
    $(this).addClass('tab--active');
  });

  var mySwiper = new Swiper('.testimonial-slider', {
    loop: true,
    autoplay: {
      delay: 7000,
    },

    pagination: {
      el: '.testimonial-pagination',
      clickable: true,
    },

  })

  $(".testimonial-slider").mouseenter(function () {
    mySwiper.autoplay.stop();
  });

  $(".testimonial-slider").mouseleave(function () {
    mySwiper.autoplay.start();
  });

  var mySwiper = new Swiper('.stories-slider', {
    loop: true,
    autoplay: false,

    navigation: {
      nextEl: '.stories-btn__left',
      prevEl: '.stories-btn__right',
    },

  })

});