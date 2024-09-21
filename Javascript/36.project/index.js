// local storage

// var obj= {
//     name:"hira",
//     no:"65a"
// }


// localStorage.setItem("user",JSON.stringify(obj))
// console.log(localStorage.getItem("user"));
// console.log(localStorage.getItem("users"));

function getUsers(){
    var users = localStorage.getItem("users")
    console.log(users);

    if(users){
        users= JSON.parse(users)

    }else{
        users= []
    }
    return users
}


function register(){
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var users = getUsers()
    
    console.log(users);

    var user = {
        name:name.value,
        email:email.value,
        password:password.value
    }

    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
    
    
    
}

function login(){
   
    var email = document.getElementById("l-email")
    var password = document.getElementById("l-password")
    var users= getUsers()
    var isAuthenticate = false
    // console.log(users);
    for(var i =0;i < users.length; i++){
        // console.log(users[i].email);
        if(email.value === users[i].email && password.value === users[i].password){
            isAuthenticate= true
            console.log('succesfully login');
            location.href = './home.html'
            
            break;

        }else{
            console.log("invalid email/password");
            
        }
        
    }
    



}




