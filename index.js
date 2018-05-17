function setViewPort() {
  if($(window).width() < 400) {
        x=1;
        if(x==1)
      {
          $('meta[name=viewport]').remove();
          $('head').append('<meta name="viewport" content="width=300px, initial-scale=1">');
          x=0;
      };
  };
}

function openNav(x) {
  document.getElementById("nav-menu").style.width = "110px";
  document.getElementById("nav-menu").style.height = "100%";
}
function closeNav(x) {
  document.getElementById("nav-menu").style.width = "0";
  document.getElementById("nav-menu").style.height = "0%";
}
