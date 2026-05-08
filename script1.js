


function toggleMenu(){
  let menu = document.getElementById("sideMenu");

  if(menu.style.right === "0px"){
    menu.style.right = "-250px"; // close
  } else {
    menu.style.right = "0px"; // open
  }
}
