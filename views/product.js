$(function () {
    $('.sidenav').sidenav();
    $(document).ready(function () {

    });

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const type = urlParams.get('type');

    let newShop = new Shop();
    newShop.getProductById(id, type);

});