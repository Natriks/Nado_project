function onDocumentClickHandler(evt) {
  const toggleNavDrawer = evt.target.closest(
    '[data-action="toggle-navigation-drawer"]'
  );

  if (!toggleNavDrawer) {
    return;
  }

  document.body.classList.toggle("is-navigation-drawer-opened");
}

document.addEventListener("click", onDocumentClickHandler);
