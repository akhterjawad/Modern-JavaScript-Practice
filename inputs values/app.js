document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const textValue = document.getElementById('text').value;
    const passwordValue = document.getElementById('password').value;
    const radioValue = document.querySelector('input[name="radio"]:checked').value;
    const checkbox1Value = document.getElementById('checkbox1').checked;
    const checkbox2Value = document.getElementById('checkbox2').checked;
    const dateValue = document.getElementById('date').value;
    const fileValue = document.getElementById('file').files[0];
    const urlValue = document.getElementById('url').value;
    const textareaValue = document.getElementById('textarea').value;

    console.log('Text:', textValue);
    console.log('Password:', passwordValue);
    console.log('Radio:', radioValue);
    console.log('Checkbox1:', checkbox1Value);
    console.log('Checkbox2:', checkbox2Value);
    console.log('Date:', dateValue);
    console.log('File:', fileValue ? fileValue.name : 'No file selected');
    console.log('URL:', urlValue);
    console.log('Textarea:', textareaValue);
});

document.getElementById('button').addEventListener('click', function() {
    alert('Button clicked');
});
