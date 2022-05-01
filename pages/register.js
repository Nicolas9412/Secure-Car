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
    if((! userNameList.includes(username) || alert(answers[0])) && (password == confirmPassword || alert(answers[1])) && ((username != '' && password != '' && confirmPassword != '')||alert(answers[2]))){
        let user = new User(username,password);
        usersList.push(JSON.stringify(user));
        localStorage.setItem('userList',JSON.stringify(usersList));
        document.getElementById('register-form').reset();
        window.location.href = './sign-in.html';
    }
})