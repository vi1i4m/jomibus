
// Toggle the .pa-fixed-header class when the user 
// scroll 100px 

window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    const navBar = document.getElementById("navBar");
    const links = document.querySelectorAll("#navBar a");
    const links2 = document.querySelectorAll("#navBar div .bar");

  if (document.documentElement.scrollTop > 100) {
    navBar.classList.add("pa-fixed-header");
    // hamb.classList.add("stroke-black");

    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.add('text-black');
    }

    for (let i = 0; i < links2.length; i++) {
      const element2 = links2[i];
      element2.classList.add('stroke-black');
  }

  } else {
    navBar.classList.remove("pa-fixed-header");
    // hamb.classList.remove("stroke-black");
    for (let i = 0; i < links2.length; i++) {
      const element2 = links2[i];
      element2.classList.remove('stroke-black');
  }

    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.remove('text-black');
    }
    
  }
}