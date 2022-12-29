const firebaseConfig = {
  //   copy your firebase config informations
   apiKey: "AIzaSyCcQQMTgvGtrL4dIjic-FLvZigcsiBpTQw",
    authDomain: "contactform-94517.firebaseapp.com",
    databaseURL: "https://contactform-94517-default-rtdb.firebaseio.com",
    projectId: "contactform-94517",
    storageBucket: "contactform-94517.appspot.com",
    messagingSenderId: "149049641821",
    appId: "1:149049641821:web:c5f66fbef83e8f9bd936b4"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};