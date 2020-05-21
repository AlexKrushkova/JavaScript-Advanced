function App (ul, box, dropdown, listItemClassMatcher){
return {
ul: ul,
box: box,
dropdown: dropdown,

  handleEvent: function (e) {
    if (this.dropdown.isSameNode(e.target)) {
      this.dropdownClickHandler();
    }

    if (listItemClassMatcher(e.target)) {
      this.setBoxColor(e.target.textContent);
    }
  },

  dropdownClickHandler: function () {
    if (this.ul.style.display === "block") {
      this.ul.style.display = "none";
      this.setBoxColor();
    } else {
      this.ul.style.display = "block";
    }
  },

  setBoxColor: function (color) {
      const box = document.getElementById("box");
      box.style.backgroundColor = color;
  },
}
}
function solve() {
  document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click",
     App(
         document.getElementById("dropdown-ul"),
         document.getElementById("box"),
         document.getElementById("dropdown"),
          domNode => domNode.classList.value.match("deep")))
  })
}
