let usersList;
let usersListRecovered = [];
let userNameList = [];
let answers = ['Already you have a user with this username',
                'Passwords do not match',
                'There are empty fields']
class User{
    constructor(userName,password){
        this.userName = userName;
        this.password = password;
    }
}


document.getElementById('register-btn').addEventListener('click',function(e){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    e.preventDefault();
    usersList = JSON.parse(localStorage.getItem('userList')) || [];
    usersListRecovered = JSON.parse(localStorage.getItem('userList')) || [];
    usersListRecovered = usersListRecovered.map(user => JSON.parse(user)) || [];
    userNameList = usersListRecovered.map(user => user.userName) || [];
    ! userNameList.includes(username) || swal({title: 'Error',
                                               text:answers[0],
                                                icon:'error'});
    password == confirmPassword || swal({title: 'Error',
                                        text:answers[1],
                                        icon:'error'});
    (username != '' && password != '' && confirmPassword != '')|| swal({title: 'Error',
                                                                        text:answers[1],
                                                                        icon:'error'});
    if(! userNameList.includes(username) && password == confirmPassword  && (username != '' && password != '' && confirmPassword != '')){
        let user = new User(username,password);
        usersList.push(JSON.stringify(user));
        localStorage.setItem('userList',JSON.stringify(usersList));
        document.getElementById('register-form').reset();
        window.location.href = './sign-in.html';
    }
})