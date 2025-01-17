// Step 1: Declare the variables for the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapter-list');

// Step 2: Set up the event listener for the "Add Chapter" button.
button.addEventListener('click', function() {
    // Step 3: Check if the input is empty.
    if (input.value.trim() === '') {
        alert('Please enter a chapter title!');
        input.focus(); // Focus back to the input field
        return; // Exit the function if the input is blank
    }

    // Step 4: Create a new li element for the chapter.
    const li = document.createElement('li');

    // Step 5: Create a delete button for the chapter.
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // Adds a delete class for styling

    // Step 6: Populate the li element with the input value (chapter title).
    li.textContent = input.value;

    // Step 7: Append the delete button to the li element.
    li.append(deleteButton);

    // Step 8: Append the li element to the unordered list.
    list.append(li);

    // Step 9: Clear the input field after adding the chapter.
    input.value = '';

    // Step 10: Set focus back to the input field after adding the chapter.
    input.focus();

    // Step 11: Add an event listener to the delete button to remove the chapter.
    deleteButton.addEventListener('click', function() {
        list.removeChild(li); // Remove the li element from the list
    });
});
