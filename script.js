const navTop = document.querySelector(".nav-top");
navTop.style.position = "sticky";
navTop.style.top = "0";

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

const response = document.querySelector("#response_msg");


document.querySelector('#contact-form').addEventListener('submit' ,function(event) 
{
    event.preventDefault();
    const namee = name.value.trim();
    const emaill = email.value.trim();
    const messageValue = message.value.trim();

if (namee=== '' || emaill === '' || messageValue === '') {
    response.innerHTML = 'All fields are required';
    response.style.color = 'red';
    }
else
{
    response.innerHTML = 'Thank you for message';
    response.style.color = "green";
}
});


