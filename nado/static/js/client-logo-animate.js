$(".clients__line").each(function (index, clientsLine) {
  'use strict';

  var clientsListWrapper = clientsLine.querySelector(".clients__list-wrapper");
  var clinetsList = clientsLine.querySelector(".clients__list");
  var clinetsListWidth = clinetsList.clientWidth;

  var clinetsListCloneLeft = clinetsList.cloneNode(true);
  clinetsListCloneLeft.classList.add(
    "clients__list--clone",
    "clients__list--left"
  );
  var clinetsListCloneRight = clinetsList.cloneNode(true);
  clinetsListCloneRight.classList.add(
    "clients__list--clone",
    "clients__list--right"
  );
  clientsListWrapper.insertBefore(clinetsListCloneLeft, clinetsList);
  clientsListWrapper.insertBefore(clinetsListCloneRight, null);

  var avgWidth = clientsLine.scrollWidth - clientsLine.clientWidth;
  clientsLine.addEventListener("scroll", function (event) {
    if (clientsLine.scrollLeft >= avgWidth) {
      clientsLine.scrollLeft =
        clientsLine.scrollWidth / 3 +
        (clinetsList.scrollWidth - clientsLine.clientWidth);
    }
    if (clientsLine.scrollLeft <= 0) {
      clientsLine.scrollLeft = clientsLine.scrollWidth / 3;
    }
  });

  function getCenterScrollPosition() {
    // return clientsLine.scrollWidth / 2 - clientsLine.clientWidth / 2;
    return clientsLine.scrollWidth / 3;
  }

  clientsLine.scrollLeft = getCenterScrollPosition();

  var timeout;
  var requestId;
  var request20;
  var requestArr = [];

  $(".js-panel-control-left").on("mouseover", function () {
    console.log("left start");

    requestId = requestAnimationFrame(function animate(time) {
      clientsLine.scrollLeft += 2 + index;
      request20 = requestAnimationFrame(animate);
      requestArr.push(request20);
    });
  });

  $(".js-panel-control-left").on("mouseout", function () {
    console.log("left stop");

    for (var req of requestArr) {
      cancelAnimationFrame(req);
    }
    cancelAnimationFrame(requestId);
    requestArr.length = 0;
  });

  $(".js-panel-control-right").on("mouseover", function () {
    console.log("right start");

    requestId = requestAnimationFrame(function animate(time) {
      clientsLine.scrollLeft -= 2 + index;
      request20 = requestAnimationFrame(animate);
      requestArr.push(request20);
    });
  });

  $(".js-panel-control-right").on("mouseout", function () {
    console.log("right stop");

    for (var req of requestArr) {
      cancelAnimationFrame(req);
    }
    cancelAnimationFrame(requestId);
    requestArr.length = 0;
  });
});
