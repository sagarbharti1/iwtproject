function validateEmail(inputText) {
    var mailFormat =  /\S+@\S+\.\S+/;
    if (inputText.value.match(mailFormat)) {
      alert("Valid address!");
      return true;
    } else {
      alert("Invalid address!");
      return false;
    }
  }
  
  /*=============== SHOW SCROLL UP ===============*/ 
  function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    //when the scroll is higher than 350 viewport height , add the show-scroll class to the a tag with the scroll
    if(this.scrollY>= 350) scrollup.classList.add('show-scroll'); else scrolling.classlist.remove('show-scroll')


  }
  window.addEventListener('scroll', scrollup)