
// sticky navbar in the top
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
          document.getElementById('navbar_top').classList.add('fixed-top');
         
          navbar_height = document.querySelector('.nav-bar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
          document.querySelector('.nav-bar').style.background = '#fff';
          document.querySelector('.nav-bar').style.boxShadow = '5px 10px 15px #dedede';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           
          document.body.style.paddingTop = '0';
          document.querySelector('.nav-bar').style.background = 'none';
          document.querySelector('.nav-bar').style.boxShadow = 'none';
        } 
    });
  });


    // see more button event listener
    const textContent = document.querySelector('.body-content');

    textContent.addEventListener('click', function(event){
      const targetContent = event.target;

      if(targetContent.id == 'see-more-btn'){
        const sectionContainer = targetContent.parentElement;
        const details = sectionContainer.querySelector('.text-toggle');

        details.classList.toggle('show'); 
      }
    });


