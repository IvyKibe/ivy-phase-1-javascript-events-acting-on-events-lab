function moveDodgerLeft() {
    var dodger = document.getElementById('dodger')
  
    var newPosition = dodger.style.left.replace('rem', '')
    var left = parseInt(newPosition, 10)
  
    if (left > 0) {
      dodger.style.left = `${left - 2}px`
    }
  }
  
  moveDodgerLeft()

  function moveDodgerRight() {
    var dodger = document.getElementById('dodger')
  
    var newPosition = dodger.style.left.replace('rem', '')
    var left = parseInt(newPosition, 10)
  
    var gameWidth = document.getElementById('game').offsetWidth
    var dodgerWidth = dodger.offsetWidth
  
    if (left + dodgerWidth > gameWidth) {
      dodger.style.left = `${left + 2}px`
    }
  }  
  moveDodgerRight() 
  