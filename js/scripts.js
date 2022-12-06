


const scriptHeader = () => {

    function changeColorHeader(element, nova, nova2) {

      element.classList.add(nova)
      element.classList.add(nova2)

    }

    setTimeout(function() {

      let effectTransparent = document.getElementById('img');
      changeColorHeader(effectTransparent, 'opacityNow', 'efTransition');

    }, 120)

  }
  scriptHeader()

  // 

const scriptHead = () => {

    function changeColorHeader(element, nova, nova2) {

      element.classList.add(nova)
      element.classList.add(nova2)

    }

    setTimeout(function() {

      let effectTransparent = document.getElementById('headInitEffect');
      changeColorHeader(effectTransparent, 'opacityNow', 'efTransition1');

    }, 30)

  }
  scriptHead()