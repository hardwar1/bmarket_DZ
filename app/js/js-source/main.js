$(function () {
  //весь код писать внутри что бы дом загрузился первым


  $('.burger').on('click', function () {
    $('.menu').slideToggle();
    $(this).toggleClass('burger__opened');
  });
  
  //ibg
  function ibg() {
    document.querySelectorAll(".ibg").forEach(el => {
      if (el.querySelector('img')) {
        el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
      }
    });
  }
  
  ibg();
  // ibg

});