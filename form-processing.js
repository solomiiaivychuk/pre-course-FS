// displaying form data on the console

let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(e) {
    e.preventDefault();
    display();
});


function display() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;
    const yourInput = document.getElementById("your-input").value;
    console.log("First Name - " + firstName + "\n" + "Last Name - " + lastName + "\n" + "Email - " + email + "\n" + "Your comment: " + comment + "\n" + "Why you are interested in programming: " + yourInput);
    
}

// enable submit button

const fields = document.querySelectorAll("input:required");
const checkbox = document.querySelector('.checkbox')
const submitButton = document.querySelector('.submit-button');

form.addEventListener("keyup", function() {
    if (checkbox.checked) {
        let filled = true;
            for (let i = 0; i < fields.length; i++) {
                if (fields[i].value === ""){
                    filled = false;
                }
            }
            if (filled) {
                submitButton.disabled = !filled;
            }
        }
    });

// footer
const tools = ["HTML", "CSS", "JavaScript"];
const text = document.querySelector('.tools').innerText;
document.querySelector('.tools').innerText = text + " " + tools[0] + ", " + tools.slice(1, 4).join(' ');