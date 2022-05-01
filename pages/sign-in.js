let usersListRecovered = [];

document.getElementById('sign-in-btn').addEventListener('click',function(e){
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    usersListRecovered = JSON.parse(localStorage.getItem('userList')) || [];
    usersListRecovered = usersListRecovered.map(user => JSON.parse(user)) || [];
    console.log(usersListRecovered);
    for (const user of usersListRecovered) {
        if (user.userName == username && user.password == password) {
            window.location.href = "./quote.html";
            return;
        }
    }
    alert('Username and password incorrect');
    document.getElementById('sign-in-form').reset();
})