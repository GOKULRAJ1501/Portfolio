var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Java Developer", "Web Developer","Software Enginner"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



function sendMail(){
    var params ={
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("Email_ID").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_d608tt7" , "template_d1byh51" , params).then(function(res){
        location.reload();
        alert("Success! " + res.status)
    })
}