function register(){
    user={
phoneNumber:a3.value,
userName:a4.value,
passWord:a5.value
    }


if(a3.value in localStorage){
   alert("user already exists") 
}
else{
    localStorage.setItem(a3.value,JSON.stringify(user))
    alert("new user added")
    window.location="index.html"
}
}
function logIn(){
    phnumber=a3.value
    paword=a4.value
    if(phnumber in localStorage){
        user1=JSON.parse(localStorage.getItem(phnumber))
        if(paword==user1.passWord){
            alert("logIn successfull")
            window.location="homepage.html"
        }
        else{
            alert("incorrect password")
        }
    }
    else{
        alert("invalid user")
    }
}
function logOut(){
    window.location="index.html"
}