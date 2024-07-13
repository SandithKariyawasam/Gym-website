
document.getElementById('hom').addEventListener('click', function() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('ser').addEventListener('click', function() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('con').addEventListener('click', function() {
    document.getElementById('5').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('abo').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('sign').addEventListener('click', function() {
    document.getElementById('4').scrollIntoView({ behavior: 'smooth' });
  });
  


    const form=document.querySelector("form");
    const fullName=document.getElementById("name");
    const email=document.getElementById("email");
    const phone=document.getElementById("Phone");
    const subject=document.getElementById("subject");
    const mess=document.getElementById("message"); 

    function sendEmail(){
        const bodymessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "sandithkariyawasam2001@gmail.com",
            Password : "F4559B51E9BC8AAC857C005AEFB6355815D7",
            To : 'sandithkariyawasam2001@gmail.com',
            From : "sandithkariyawasam2001@gmail.com",
            Subject : subject.value,
            Body : bodymessage
        }).then(
        message => {
            if (message == 'OK') {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
            });
        }
    }
        );    
}
    function checkInputs(){
        const items = document.querySelectorAll(".item");

        for(const item of items){
            if(item.value==""){
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
            if (items[1].value !=""){
                chechEmail();
            }
            items[1].addEventListener("keyup",()=>{
                chechEmail();
            });
            item.addEventListener("keyup",()=>{
                if(item.value!=""){
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
            }else{
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
            }});
        }
    }
    function chechEmail(){
        const emailRegex= /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        const errorTxtEmail = document.querySelector(".error-txt.email");
        if(!email.value.match(emailRegex)){
            email.classList.add("error");
            email.parentElement.classList.add("error");

            if(email.value !=""){
                errorTxtEmail.innerText="Enter valid email address";
            }else{
                errorTxtEmail.innerText="Email Address can't be blank";
            }

        }else{
            email.classList.remove("error");
            email.parentElement.classList.remove("error");
        }
    }
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        checkInputs()

        if(!fullName.classList.contains("error")&& 
            !email.classList.contains("error")&&
            !phone.classList.contains("error")&&
            !subject.classList.contains("error")&&
            !mess.classList.contains("error")){
                sendEmail();
                form.reset();
                return false;
            }
          
    });