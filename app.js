function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    const deleteItem = document.createElement("button");
    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();

        // get the text
        let title = newToDoText.value;
        // create a new li
        let newLi = document.createElement('li');
        newLi.id = title;
        // create a new input
        let checkbox = document.createElement('input');

        // set the input's type to checkbox
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";
        checkbox.id = title;
        // set the title
        newLi.textContent = title;

        // attach the checkbox to the li
        newLi.appendChild(checkbox);

        // attach the li to the ul
        toDoList.appendChild(newLi);

        //empty the input
        newToDoText.value = '';


        deleteItem.innerText ="Delete";
        deleteItem.className = "delete";
        deleteItem.onclick = deleteTask;
        toDoList.appendChild(deleteItem);
    });
  };

var deleteTask = function(){
  var checkboxes = document.getElementsByName("checkbox");
  var checkboxesChecked = [];
  for (var i=0; i<checkboxes.length; i++) {
     if (checkboxes[i].checked) {
       var listItem = document.getElementById(checkboxes[i].id);
       listItem.parentNode.removeChild(listItem);

     }
  }

  return checkboxesChecked.length > 0 ? checkboxesChecked : null;

  };

window.onload = function() {
  onReady();
};
