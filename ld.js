function ldButton() {
  let check = document.getElementById("checkbox-click");

  if (check.checked == true) {
    document.getElementById("body-id").style.backgroundColor = "black";
    document.getElementById("header-mode").style.color = "white";
    document.getElementById("checkbox-id").style.borderColor = "white";
    document.getElementById("paragraph").style.color = "white";
  } else {
    document.getElementById("body-id").style.backgroundColor = "white";
    document.getElementById("header-mode").style.color = "black";
    document.getElementById("checkbox-id").style.borderColor = "black";
    document.getElementById("paragraph").style.color = "black";
  }
}
