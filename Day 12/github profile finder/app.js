const github = new Github();
const ui = new UI();
const searchUserInput = document.getElementById('searchUser');

searchUserInput.addEventListener('keyup', (e) => {
    const inputText = e.target.value;

    if (inputText !== ""){
        // github.getUser(inputText).then(data => console.log('data', data));
        github.getUser(inputText).then(data => {
            console.log('data message : ', data);
            if (data.profile.message === 'Not Found') {
                ui.showAlert('User not found', 'alert alert-danger');
            }else{
                ui.showProfile(data.profile);
                ui.showRepo(data.repos);
            }
        });
    }else{
        ui.clearProfile();
    }
});