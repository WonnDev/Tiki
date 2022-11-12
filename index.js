/***** Cart *****/
/*btn checkall*/
function myFunction() {
    var checkBox = document.getElementById("CheckAll");
    var checkBoxChild1 = document.getElementById("check-box-1");
    var checkBoxChild2 = document.getElementById("check-box-2");
    if (checkBox.checked == true){
      checkBoxChild1.checked = true;
      checkBoxChild2.checked = true;
    }
  }