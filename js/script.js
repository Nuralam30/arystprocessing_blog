
// sticky navbar in the top
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        document.getElementById('navbar_top').classList.add('fixed-top');
     
        navbar_height = document.querySelector('.nav-bar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px'; 
        document.querySelector('.nav-bar').style.background = '#fff';
        document.querySelector('.nav-bar').style.boxShadow = '5px 10px 15px #dedede';
      }
      else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         
        document.body.style.paddingTop = '0';
        document.querySelector('.nav-bar').style.background = 'none';
        document.querySelector('.nav-bar').style.boxShadow = 'none';
      } 
    });
  });

   
    //============== responsive design ============
    function responsive(){
      var navBar = document.getElementById('navbar_top');

      if (navBar.className === 'nav-bar') {
        navBar.className += ' responsive';
      }
      else{
        navBar.className = 'nav-bar';
      }
    }


    // ===============scroll top button=========== 
    window.onscroll = function() {
      scrollBtnShow();
    }

    function scrollBtnShow(){
      var scrollTopBtn = document.querySelector('.scroll-btn');

        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
          scrollTopBtn.style.display = 'block';
        }
        else {
          scrollTopBtn.style.display = 'none';
        } 
    }

    function scrolltop(){
      window.scrollTo(0, 0);
    }


    // see more button event listener
    function seeDetails(e){
      const container = e.parentElement;

      const details = container.querySelector('.text-toggle');
      const seeMoreBtn = container.querySelector('#see-more-btn');
      const seeLessBtn = container.querySelector('#see-less-btn');

      details.style.display = 'block';
      seeLessBtn.style.display = 'block';
      seeMoreBtn.style.display = 'none';
    }


    // see less button event listener
    function hideDetails(e){
      const container = e.parentElement;

      const details = container.querySelector('.text-toggle');
      const seeMoreBtn = container.querySelector('#see-more-btn');
      const seeLessBtn = container.querySelector('#see-less-btn');
  
      details.style.display = 'none';
      seeLessBtn.style.display = 'none';
      seeMoreBtn.style.display = 'block';
    }



