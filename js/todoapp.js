// create new list element
function newListItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert("Nothing to add to list! Please write something");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var del = document.createTextNode("\u00D7");
  span.className = "delete";
  span.appendChild(del);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// Click on the X to "delete" the current list item
var close = document.getElementsByClassName("delete");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
