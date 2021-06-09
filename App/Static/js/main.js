
      // Form validation
      (function validate() {
      
         if( document.myForm.title.value == "" || document.myForm.text.value.length != 20 ) {
            alert( "Please provide title of news!" );
            document.myForm.title.focus() ;
            return false;
         }
         if( document.myForm.author.value == "" || document.myForm.author.value.length != 2 ) {
            alert( "Please provide author name!" );
            document.myForm.author.focus() ;
            return false;
         }
         if( document.myForm.text.value == "" || document.myForm.text.value.length != 50 ) {
            
            alert( "Please provide a text part of news." );
            document.myForm.text.focus() ;
            return false;
         }
        
         return( true );
      }
    })()


(function() {
  "use strict";

  /* Easy selector helper function */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /* Easy event listener function  */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /* Easy on scroll event listener */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /* Back to top button  */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
})()