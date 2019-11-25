window.buttonBg = (function () {
  let controller = new ScrollMagic.Controller();

  function InitScene() {
    new ScrollMagic.Scene({ triggerElement: document.body * 1.5 })
      .offset(document.documentElement.clientHeight)
      .setClassToggle(".site-header", "site-header--active") // add class toggle
      // .addIndicators({ name: "Button bg" }) // add indicators (requires plugin)
      .addTo(controller);
  }

  window.onresize = function (event) {
    controller.destroy(true);
    controller = new ScrollMagic.Controller();
    InitScene();
  };

  InitScene();
})();
