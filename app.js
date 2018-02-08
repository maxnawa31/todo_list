document.addEventListener("DOMContentLoaded", function() {
  var ul = document.getElementById("list");
  var form = document.getElementById("form");
  form.addEventListener("submit", function() {
    var text = document.getElementById("input-text")
    var button = document.createElement("button");
    var li = document.createElement("li");
    event.preventDefault();
    button.classList.add("button");
    button.innerHTML = "<i class= 'fas fa-trash-alt'></i>"
    li.innerText = text.value;
    li.appendChild(button);
    ul.append(li);
    button.addEventListener("click", function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
    })
    form.reset()
  })

});
