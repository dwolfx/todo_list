var toDo = document.getElementsByClassName("content-text");
var i;
for (i = 0; i < toDo.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.id = "remove";
    span.appendChild(txt);
    toDo[i].appendChild(span);
}

var remover = document.getElementById("remove");
var i;
for (i = 0; i < remover.length; i++) {
    remover[i].onclick = function{
        var div = this.parentElement;
        div.style.display = "none";
    }
}
