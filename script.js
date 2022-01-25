function newItem() {

    //Add new item
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert ("Oops! You forgot to write something.");
    } else {
        $('#list').append(li);
    };

    //Cross off item (w/undo)
    $('li').on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    //Delete Button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', function deleteListItem() {
        li.addClass('delete');
    })

    //Reorder List
    $('#list').sortable();
}