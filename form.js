let fields = [
    { id: "email", errId: "email-err" },
    { id: "newpass", errId: "pass-err" },
    { id: "conpass", errId: "cpass-err" },
    { id: "fname", errId: "fname-err" },
    { id: "lname", errId: "lname-err" },
    { id: "tele", errId: "tele-err" },
    { id: "street", errId: "street-err" },
    { id: "postcode", errId: "pc-err" },
    { id: "city", errId: "city-err" },
    { id: "vat", errId: "taxid-err" },
    { id: "dsize", errId: "dsize-err" },
    { id: "emailin", errId: "emailin-err" }
];
document.getElementById("register").addEventListener("click", function (event) {
    event.preventDefault();
    let isValid = true;
    fields.forEach(field => {
        let input = document.getElementById(field.id);
        let errMsg = document.getElementById(field.errId);
        if (input.value.trim() === "") {
            errMsg.classList.remove("d-none");
            input.classList.add("border-danger");
            isValid = false;
        } else {
            errMsg.classList.add("d-none");
        }
    });
    let checkemail=verifyemail();

    if (isValid) {
        alert("Form submitted successfully!");

    }
});
function verifyemail(){
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let email=document.getElementById("email").value;
  if(emailPattern.test(email)){
    return;
  }else{
    alert("enter a valid email id");
  }

}
let acceptterms = document.getElementById("terms");
  let registerButton = document.getElementById("register");

  acceptterms.addEventListener("click", function() {
    if (acceptterms.checked) {
      registerButton.removeAttribute("disabled"); 
    
    } else {
      registerButton.setAttribute("disabled", "true");  
      
    }
  });
 
  function dropdownshow() {
    document.getElementById("dropdown").style.display = "block";
}




function filterOptions() {
  let input = document.getElementById("selected").value.toLowerCase();
  let items = document.querySelectorAll(".dropdown-list li");

  items.forEach(item => {
      let text = item.textContent.toLowerCase();
      item.style.display = text.includes(input) ? "block" : "none";
  });
}

function selectOption(element) {
  document.getElementById("selected").value = element.textContent;
  document.getElementById("dropdown").style.display = "none";
}


document.addEventListener("click", function (event) {
  if (!document.querySelector(".col-md-3").contains(event.target)) {
      document.getElementById("dropdown").style.display = "none";
  }
});

