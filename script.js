function URegister() {
    const user = {
        uname: uname.value,
        uemail: uemail.value,
        pswd: upass.value,
        balance:0,
        spend:0
       
    }
    if (user.uname== "" || user.uemail == "" || user.pswd == "") {
        alert("Please fill the details");
    }
 
    else if (user.uname in localStorage) {
        alert("This user name is already registered with us.");
    }
    else {
        localStorage.setItem(user.uname, JSON.stringify(user));
        alert("Registered Successfully")
        window.location = "./index.html";
    }
}


function login() {
    var uname = username.value;
    if (uname in localStorage) {
      console.log(uname);
        var user = JSON.parse(localStorage.getItem(uname));
        console.log(user);
        console.log(upass.value);
        if (upass.value == user.pswd) {
            localStorage.setItem("loguname",user.uname);
            window.location = "./services.html";
        }
        else {
            alert("Password is incorrect. Please try again!");
        }
    }
    else {
        alert("Invalid account number. Please try again!");
    }
}

//////////////////////////////////////////////////////

////