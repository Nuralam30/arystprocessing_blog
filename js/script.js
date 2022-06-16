
// sticky navbar in the top
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        scrollplay();  
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


  // function scrollplay event
  function scrollplay(){
      document.getElementById('navbar_top').classList.add('fixed-top');
     
      navbar_height = document.querySelector('.nav-bar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
  }


   
    //============== responsive design ============
    function responsive(){
      var navBar = document.getElementById('navbar_top');

      if (navBar.className === 'nav-bar') {
        navBar.className += ' responsive';

        window.addEventListener('scroll', function() {
          navBar.className = 'nav-bar';
          if (window.scrollY > 0) {
            scrollplay();
          }
        })
      }
      else{
        navBar.className = 'nav-bar';
      }
    }


    // see more and see less button event listener
    const textContent = document.querySelector('.body-content');

    textContent.addEventListener('click', function(e){
      const targetContent = e.target;

      if(targetContent.id == 'see-more-btn'){
        const sectionContainer = targetContent.parentElement;
        const details = sectionContainer.querySelector('.text-toggle');
        const seeMoreBtn = sectionContainer.querySelector('#see-more-btn');
        const seeLessBtn = sectionContainer.querySelector('#see-less-btn');

        details.style.display = 'block';
        seeLessBtn.style.display = 'block';
        seeMoreBtn.style.display = 'none';
      }

      if(targetContent.id == 'see-less-btn'){
        const sectionContainer = targetContent.parentElement;
        const details = sectionContainer.querySelector('.text-toggle');
        const seeMoreBtn = sectionContainer.querySelector('#see-more-btn');
        const seeLessBtn = sectionContainer.querySelector('#see-less-btn');

        details.style.display = 'none';
        seeLessBtn.style.display = 'none';
        seeMoreBtn.style.display = 'block';
      }
    });



