var num = 200;
var addRow = () => {
  document.getElementById("addnew").innerHTML = ++num;
  document
    .getElementById("myTable")
    .insertRow(-1).innerHTML = document.getElementById("addrow").innerHTML;
};

var removeRow = () => {
  $("#myTable tr:last").remove();
};
