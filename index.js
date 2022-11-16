/***** Cart *****/

  /*PathDown*/
  function showContentPathDown () {
    var x = document.getElementById("content-path-down");
    if(x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none" ;
    }
  }
  /*click to show*/

  /*btn checkall*/
  function btnCheckAll() {
    var checkBox = document.getElementById("Checked");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

  function checkItem() {
    var checkBoxItem = document.getElementsByClassName("itemchecked"),
        elementItem = document.getElementsByClassName("item-of-checked");
        if (checkBoxItem.checked == true) {
          for (var i = 0; i < elementItem.length; i++) {
              elementItem[i].style.display = "block";
              // y[i].style.display = "none";
          } 
        } else {
          for (var i = 0; i < elementItem.length; i++) {
            elementItem[i].style.display = "none";
          // y[i].style.display = "block";
          }
    } 
}


  