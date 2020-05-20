$(function () {
    $('.sidenav').sidenav();
    let newShop = new Shop();
    newShop.getProductsByType('teddies');
    newShop.getProductsByType('cameras');
    newShop.getProductsByType('furniture');



});