// Navbar response responsive function
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function hambur(x) {
  x.classList.toggle("change");
}


function open_close(){
  var hamb_nav = document.getElementById('hamb-nav');

  if (hamb_nav.style.display === 'block'){
    hamb_nav.style.display = 'none';
  }

  else{
    hamb_nav.style.display = 'block';
  }
}

function zavri(){
  var hamb_nav = document.getElementById('hamb-nav');
  var x = document.getElementById('cont');
  hamb_nav.style.display = 'none';
  x.classList.remove('change')
}