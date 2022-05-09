let usersListRecovered = [];

document.getElementById('sign-in-btn').addEventListener('click',function(e){
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    usersListRecovered = JSON.parse(localStorage.getItem('userList')) || [];
    usersListRecovered = usersListRecovered.map(user => JSON.parse(user)) || [];
    for (const user of usersListRecovered) {
        if(user.userName == username && user.password == password){
            localStorage.setItem('registeredUsername',`${username}`);
            window.location.href = "./quote.html";
            return
        }
    }
    swal({title: 'Error',
         text:'Username and password incorrect',
         icon:'error'});
    document.getElementById('sign-in-form').reset();
})
