
function hambur(x) {
  x.classList.toggle("change");
}


function open_close(){
  var hamb_nav = document.getElementById('hamb-nav');
  const links2 = document.querySelectorAll("#navBar div .bar");
  const links = document.querySelectorAll("header #navBar a");

  if (hamb_nav.style.display === 'block'){
    hamb_nav.style.display = 'none';
    if(document.documentElement.scrollTop > 100){
      document.body.classList.remove('stop-scrolling');
    
  
    navBar.classList.add("pa-fixed-header");

      for (let i = 0; i < links.length; i++) {
          const element = links[i];
          element.classList.add('text-black');
      }

      for (let i = 0; i < links2.length; i++) {
        const element2 = links2[i];
        element2.classList.add('stroke-black');
    }
    }
    else{
      navBar.classList.remove("pa-fixed-header");
      for (let i = 0; i < links2.length; i++) {
        const element2 = links2[i];
        element2.classList.remove('stroke-black');
        for (let i = 0; i < links.length; i++) {
          const element = links[i];
          element.classList.remove('text-black');
          document.body.classList.remove('stop-scrolling');
      }
    }
    
  }

    
  }
  
  else{
    hamb_nav.style.display = 'block';
    document.body.classList.add('stop-scrolling');
    var y = document.getElementById('hamb-nav');
    const navBar = document.getElementById("navBar");
    const links = document.querySelectorAll("#navBar a");
    const links2 = document.querySelectorAll("#navBar div .bar");
  
    navBar.classList.add("pa-fixed-header");

      for (let i = 0; i < links.length; i++) {
          const element = links[i];
          element.classList.add('text-black');
      }

      for (let i = 0; i < links2.length; i++) {
        const element2 = links2[i];
        element2.classList.add('stroke-black');
    }
  
  }
}

function zavri(){
  var hamb_nav = document.getElementById('hamb-nav');
  var x = document.getElementById('cont');
  hamb_nav.style.display = 'none';
  x.classList.remove('change')
  document.body.classList.remove("stop-scrolling");
}