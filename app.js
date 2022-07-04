const listInput = document.querySelector('.list-input');
const list = document.querySelector('.list');
const listItems = document.getElementsByTagName('LI');
const addItemButton = document.querySelector('.add-item');
const clearListButton = document.querySelectorAll('.remove-item');

addItemButton.addEventListener('click', () => {
    // Create a new list 
    const newListItem = document.createElement('li');
    const newListItemText = document.createTextNode(listInput.value);
    //if the input is empty, don't add the list item
    if (listInput.value === '') {
        alert('Please enter a task');
        //abort the function
        return false;
    }
    else {
    //append it to the list
    newListItem.appendChild(newListItemText);
    
    };
    //add the new item to the list
    list.appendChild(newListItem,);
    //add the remove button to the new item
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-item');
    removeButton.innerHTML = 'Done';
    newListItem.appendChild(removeButton);
    //add the event listener to the remove button
    removeButton.addEventListener('click', () => {
        list.removeChild(newListItem);
    }
    );

    //clear the input
    listInput.value = '';
});

//remove selected item
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
        e.target.parentElement.remove();
    }
}
);