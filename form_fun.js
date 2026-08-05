let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let essay = document.getElementById("essay");
let schoolyear = document.getElementById("school-year");
let room = document.getElementById("room-number");

let hiddenDiv = document.querySelector(".hidden-div");
let timertext = document.getElementById("timer-text");
let userDataSummary = document.getElementById("user-data-summary");

let requsername = document.getElementById("req-username");
let reqemail = document.getElementById("req-email");
let reqphone = document.getElementById("req-phone");
let reqessay = document.getElementById("req-essay");
let reqroom = document.getElementById("req-room-number");
let reqschoolyear = document.getElementById("req-school-year");
let reqhidden = document.getElementById("req-hidden");

let formContainer = document.querySelector(".form-container");
let timeinterval = null;

formContainer.addEventListener("submit", function(event) {
    event.preventDefault();

    let applicationData = {
        username: username.value,
        email: email.value,
        phone: phone.value,
        roomNumber: room.value,
        schoolYear: schoolyear.value,
        essay: essay.value
    };
    localStorage.setItem("userApplication", JSON.stringify(applicationData));

    formContainer.reset();

    if (timeinterval) {
        clearInterval(timeinterval);
    }

    hiddenDiv.style.display = "block";
    userDataSummary.style.display = "block"; 
    reqhidden.style.display = "none";         

    requsername.textContent = "Username: " + applicationData.username;
    reqemail.textContent = "Email: " + applicationData.email;
    reqphone.textContent = "Phone: " + applicationData.phone;
    reqroom.textContent = "Room Number: " + applicationData.roomNumber;
    reqschoolyear.textContent = "School Year: " + applicationData.schoolYear;
    reqessay.textContent = "Essay: " + applicationData.essay;
    let s = 59;
    timertext.textContent = "You have 00:59 seconds to get the response of the application";

    timeinterval = setInterval(function() {
        if (s > 0) {
            timertext.textContent = "You have 00:" + (s < 10 ? "0" + s : s) + " seconds to get the response of the application";
            s--;
        } else {
            clearInterval(timeinterval);
            timertext.textContent = "Time's up!";

            userDataSummary.style.display = "none";

            reqhidden.textContent = `Dear ${applicationData.username}, sorry you are rejected because you have a skill issue and are not qualified to be part of the community or to talk with them.`;
            reqhidden.style.display = "block";
        }
    }, 1000);
});