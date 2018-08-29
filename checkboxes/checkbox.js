const checkboxes = document.querySelectorAll('input');
let indexes = [];

function checker(e, index) {
  indexes.push(index);  
  if (indexes.length > 2) {
    indexes.shift();
  }
  if (e.shiftKey) {
    for (let i = indexes[0]; i < indexes[1]; i++) {
      checkboxes[i].checked = true;
    }
    if (indexes[0] > indexes[1]) {
      for (let i = indexes[0]; i >= indexes[1]; i--) {
        checkboxes[i].checked = true;
      }
    }
  }
}

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click', (e) => checker(e, i));
}
