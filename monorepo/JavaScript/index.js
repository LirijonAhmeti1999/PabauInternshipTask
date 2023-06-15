function reverseInputs() {
  var form = document.getElementById("theForm");
  var checkboxes = form.querySelectorAll("input[type='checkbox']");

  var checkboxArray = Array.from(checkboxes);
  checkboxArray.reverse();

  checkboxArray.forEach(function (checkbox) {
    form.appendChild(checkbox.parentNode);
  });
}

document.getElementById("changeValue").onclick = function () {
  var checkboxes = document.getElementsByName("option");

  var newValues = ["Doctors", "Taxi Driver", "Developer", "Police"];

  checkboxes.forEach(function (checkbox, index) {
    checkbox.value = newValues[index];
    checkbox.nextSibling.textContent = newValues[index];
  });
};

document.getElementById("selectValue").onclick = function () {
  var checkboxes = document.getElementsByName("option");
  var isSelected = [];

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      isSelected.push(checkbox.value);
    }
  });

  var result = document.getElementById("showSelected");

  result.textContent =
    isSelected.length > 0 ? "Is selected: " + isSelected : "Select a checkbox";
};
