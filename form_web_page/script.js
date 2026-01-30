function register(){
    let u=document.getElementById("regUser").value;
    let p=document.getElementById("regPass").value;

    if(u=="" || p==""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("user",u);
    localStorage.setItem("pass",p);

    alert("Account created successfully!");
    window.location.href="index.html";
}

function login(){
    let u=document.getElementById("loginUser").value;
    let p=document.getElementById("loginPass").value;

    let su=localStorage.getItem("user");
    let sp=localStorage.getItem("pass");

    if(u===su && p===sp){
        window.location.href="form.html";
    }else{
        alert("Invalid username or password");
    }
}

function submitForm(){
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let gender=document.getElementById("gender").value;
    let qual=document.getElementById("qualification").value;
    let field=document.getElementById("field").value;

    if(name==""||age==""||gender==""||qual==""||field==""){
        alert("Please fill all details");
        return;
    }

    document.getElementById("msg").innerHTML="Successfully submitted";

}

function cancelForm(){
    document.querySelectorAll("input").forEach(i=>i.value="");
    document.getElementById("gender").value="";
    document.getElementById("msg").innerHTML="";
}
