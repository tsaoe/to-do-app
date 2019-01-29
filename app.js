function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    const deleteItem = document.createElement('button');
    deleteItem.innerHTML = 'Delete';
    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();

        // get the text
        let title = newToDoText.value;
        // create a new li
        let newLi = document.createElement('li');

        // create a new input
        let checkbox = document.createElement('input');

        // set the input's type to checkbox
        checkbox.type = "checkbox";

        // set the title
        newLi.textContent = title;

        // attach the checkbox to the li
        newLi.appendChild(checkbox);

        // attach the li to the ul
        toDoList.appendChild(newLi);

        //empty the input
        newToDoText.value = '';



        deleteItem.addEventListener('click', function(event){
          var parent = document.getElementById('toDoList');
          var todoListItems = document.querySelectorAll('#toDoList li');
          todoListItems.forEach(function(item) {
            var checkbox = item.querySelector('input');
              if (checkbox.checked) {
                parent.removeChild(item);
              }
          })
                if(this.checked) {
                  deleteTask(newLi);
                };
        });
      });
        document.body.appendChild(deleteItem);
};
function deleteTask(newLi){
      var list = newLi.parentElement;
      list.removeChild(newLi);
};

window.onload = function() {
  onReady();
};
