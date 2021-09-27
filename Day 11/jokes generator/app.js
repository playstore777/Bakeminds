document.querySelector('.get-jokes').addEventListener('click', jokesGenerator);

function jokesGenerator(e) {

    const limit = document.querySelector('input[type="number"]').value;
    let output = '';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${limit}`, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.response);
            console.log(data);
            if (data.type === 'success') {
                data.value.forEach(function(ele) {
                    output += `<li>${ele.joke}</li>`;
                })
            }else{
                output += '<li>something went wrong</li>'
            }
            document.querySelector('.jokes').innerHTML = output;

        }
    }

    xhr.send();

    e.preventDefault();
}
