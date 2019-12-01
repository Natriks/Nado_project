var scene1, scene2, scene3, scene4, scene5, scene6, scene7;

var pad = 150;

var controller = new ScrollMagic.Controller();

function InitScene() { // wait for document ready
  // console.log("InitScene");
  // console.log(-(document.documentElement.clientHeight / 2 - pad));

  // Масштабирование лого
  scene1 = new ScrollMagic.Scene({ triggerElement: document.body })//, duration: 300
    .offset(document.documentElement.clientHeight / 2 + 10)
    .setTween(".index-company-name", 1, { scale: 0.3 })
    // .addIndicators({ name: "Scale" }) // add indicators (requires plugin)
    .addTo(controller);

  scene7 = new ScrollMagic.Scene({ triggerElement: document.body })//, duration: 300
    .offset(document.documentElement.clientHeight / 2 + 10)
    .setTween(".index-company-name svg", 1, { "fill-opacity": 1 })
    // .addIndicators({ name: "Scale" }) // add indicators (requires plugin)
    .addTo(controller);

  // Движение лого вверх/обратно
  scene2 = new ScrollMagic.Scene({ triggerElement: document.body })// 900
    .offset(document.documentElement.clientHeight / 2 + 20)
    .setTween(".index-company-name", 0.5, { y: -(document.documentElement.clientHeight / 2 - pad + 25) }) //-(document.documentElement.clientHeight / 2 - pad + 25)
    // .addIndicators({ name: "Up" }) // add indicators (requires plugin)
    .addTo(controller);

  // Закрепление лого на экране
  scene3 = new ScrollMagic.Scene({ triggerElement: document.body, duration: document.documentElement.clientHeight - 30 })// 900
    .offset(document.documentElement.clientHeight / 2 + 30)
    .setPin(".index-company-name", { pushFollowers: false })
    // .addIndicators({ name: "Pin" }) // add indicators (requires plugin)
    .addTo(controller);

  // Появление следующей секции "О нас"
  // scene4 = new ScrollMagic.Scene({ triggerElement: ".about-us-section" }) //, duration: 550
  //   .offset(100)
  //   .setTween(".about-us-section", 1, { opacity: 1 })
  // .addIndicators({ name: "Show" }) // add indicators (requires plugin)
  //   .addTo(controller);

  // Исчезновение элементов снизу главного экрана
  $('.welcome__footer').css("transition", "none");
  scene5 = new ScrollMagic.Scene({ triggerElement: ".welcome__company-caption" }) //, duration: 750
    .offset(100)
    .setTween(".welcome__footer", 0.5, { opacity: 0 })
    // .addIndicators({ name: "Footer oppasity" }) // add indicators (requires plugin)
    .addTo(controller);

  // Исчезновение описания под логотипом
  $('.welcome__company-caption').css("transition", "none");
  scene6 = new ScrollMagic.Scene({ triggerElement: ".welcome__company-caption" }) //, duration: 750
    .offset(100)
    .setTween(".welcome__company-caption", 0.5, { opacity: 0 })
    // .addIndicators({ name: "Footer oppasity" }) // add indicators (requires plugin)
    .addTo(controller);

  // Исчезновение/появление главного экрана
  // scene7 = new ScrollMagic.Scene({ triggerElement: ".about-us-section" }) //, duration: 550
  //   .offset(100)
  //   .setTween(".welcome", 1, { opacity: 0 })
  // .addIndicators({ name: "Show2" }) // add indicators (requires plugin)
  //   .addTo(controller);
}

window.onresize = function (event) {
  controller.destroy(true);
  controller = new ScrollMagic.Controller();
  InitScene();
};

$(function () {
  InitScene();
});
