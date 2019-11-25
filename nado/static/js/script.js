$(".img-parallax").each(function () {
  var img = $(this);
  var imgParent = $(this).parent();
  var filler = $(".welcome-scene__foreground-filler", imgParent);

  function parallaxImg() {
    var speed = img.data("speed");
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();

    // The next pixel to show on screen
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = (winBottom - imgY) * speed;
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Porcentage between start showing until disappearing
      var imgPercent = (imgBottom / imgTop) * 100 + (0 - speed * 50);
    }
    img.css({
      // top: imgPercent + '%',
      transform: "translate(0%, -" + imgPercent + "%)"
    });
    filler.css({
      // top: imgPercent + '%',
      transform: "translate(0%, -" + imgPercent + "%)"
    });
  }

  $(document).on({
    scroll: function () {
      parallaxImg();
    },
    ready: function () {
      parallaxImg();
    }
  });
});

var typed = new Typed(".typed-text", {
  strings: [
    "marketing",
    "digital & web",
    "strategy",
    "design & branding",
    "production",
    "event & pr"
  ],
  contentType: null,
  typeSpeed: 100,
  loop: true,
  backSpeed: 40,
  backDelay: 200
});



var myFullpage = new fullpage('#fullpage', {
  scrollBar: true
  // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
});
