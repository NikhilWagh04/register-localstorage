document.getElementById("Registerform").addEventListener("submit",(event)=>{
    console.log("Registered Successfully!!!");
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone= document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if(!email.endsWith("@gmail.com")){
        alert("Provide Valid Gmail");
        return;
    }

    if(phone.length !== 10){
        alert("Provide Valid Phone Number");
        return;
    }

    const CurrentUser = JSON.parse(localStorage.getItem("users")) || [];
    if(CurrentUser.some(user=> email === user.email)){
        alert("User Already Exist");
        return;
    }

    const formdata = {
        name : name,
        email : email,
        phone: phone,
        gender : gender
    }
    console.log("Form Data : ",formdata);

    const RegisterUser = JSON.parse(localStorage.getItem("users")) || [];
    RegisterUser.push(formdata);

    localStorage.setItem("users",JSON.stringify(RegisterUser));
    
    window.location.href = "list.html";
})