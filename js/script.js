
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.nav-bar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
          document.querySelector('.nav-bar').style.background = '#fff';
          document.querySelector('.nav-bar').style.boxShadow = '5px 10px 15px #dedede';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
          document.querySelector('.nav-bar').style.background = 'none';
          document.querySelector('.nav-bar').style.boxShadow = 'none';
        } 
    });
  });