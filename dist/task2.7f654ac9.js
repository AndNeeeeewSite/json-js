//                   2.
saveButt = document.querySelector('#saveBtn');
nameInput = document.querySelector('#username');
passwordInput = document.querySelector('#password');
function render() {
    getJSON = JSON.parse(localStorage.getItem('form'));
    if (getJSON == null) {
        sendJSON = {
            "username": nameInput.value,
            "password": passwordInput.value
        };
        localStorage.setItem('form', sendJSON);
    }
    nameInput.value = getJSON['username'];
    passwordInput.value = getJSON['password'];
}
render();
saveButt.addEventListener('click', function() {
    sendJSON = {
        "username": nameInput.value,
        "password": passwordInput.value
    };
    localStorage.setItem('form', JSON.stringify(sendJSON));
});

//# sourceMappingURL=task2.7f654ac9.js.map
