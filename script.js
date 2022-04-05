/* ..................................  Event listeners  ................................................ */
document.addEventListener("DOMContentLoaded",e => {
    e.preventDefault();

    /* ........................... Event listeners(sign in)  ......................... */
    const login=document.getElementById("log-in");
    const createAccount=document.getElementById("create-account"); 
    
    /***** links (jump to another page) ******/
    links(login,createAccount);
    /***** login submit ****/
    loginSubmit(login); 
   
    /* ........................... Event listeners(sign up)  ......................... */ 
    // inputBoxCheck();

    /**** sign up submit *****/
    createAccountSubmit(createAccount);

});

/* ......................................    Event listeners(sign up) inputs check     ............................................ */

/* ..................................   functions (links)  ................................................ */

function links(login,createAccount){
    document.getElementById("create-account-link").addEventListener("click", event =>{
        event.preventDefault();
        login.classList.add("hidden");
        createAccount.classList.remove("hidden");
    });
    document.getElementById("log-in-link").addEventListener("click", event =>{
        event.preventDefault();
        login.classList.remove("hidden");
        createAccount.classList.add("hidden");
    });
}
/* ..................................   functions (submit)  ................................................ */
function loginSubmit(login){
    const loginUsername=document.getElementById("login-username");
    const loginPassword=document.getElementById("login-password");
    let time=3000;
    login.addEventListener("submit",event => {
        event.preventDefault();
        if(loginUsername.value==="" && loginPassword.value===""){
            setAlertMessage(login,"error","Enter UserName and Password");
        }
        else if(loginUsername.value===""){
            setAlertMessage(login,"error","Enter the UserName ");          // ##### add setup user alert error msg also input color change
        }
        else if(loginPassword.value===""){
            setAlertMessage(login,"error","Enter the password");          // ##### add setup user alert error msg also input color change
        }
        // else if(loginUsername.value!=="" && loginPassword.value===""){
        //     setAlertMessage(login,"error","Enter the Password");        // ##### add setup  password alert msg 
        // }
        else{
            setAlertMessage(login,"error","Invalid UserName/Password Combination");
        }
        setTimeout(() =>{ clearAlertMessage(login); } ,time);        
    });
}
/* ..................................   functions (sign in page)  ................................................ */

function setAlertMessage(Element, type, message){
    const alertMessage=Element.getElementsByClassName("alert-error")[0];

    const userInput=Element.getElementsByClassName("user-input")[0];
    const userPassword=Element.getElementsByClassName("user-input")[1];

    // userInput.className=`user-input input-${type}`;
    // userPassword.className=`user-input input-${type}`;

    alertMessage.textContent=message;
    // alertMessage.classList.remove("alert-error" , "alert-success");
    alertMessage.classList.add(`alert-${type}`);

}
function clearAlertMessage(Element){
    Element.getElementsByClassName("alert-error")[0].textContent="";
    // Element.querySelector("#login-username").value="";
    // Element.querySelector("#login-password").value="";

    return;
}
/* ..................................   functions (sign up page)   ................................................ */

/* ........................   function check input   ............................ */
function createAccountSubmit(createAccount){
    createAccount.addEventListener("submit", e2 => {
        e2.preventDefault();
                   
        const userNameValue=document.getElementById("create-account-userName").value.trim();
        const emailValue=document.getElementById("create-account-email").value.trim();
        const passwordValue=document.getElementById("create-account-password").value.trim();
        const passwordConfirmValue=document.getElementById("create-account-passwordConfirm").value.trim();

        // Username
            if(userNameValue===""){
                setErrorOrSuccess(0,createAccount,"error","UserName Cannot Be Blank");
            }
            else if(userNameValue.length < 6 ){
                setErrorOrSuccess(0,createAccount,"error","Must Be Above 7 Characters");
            }
            else{
                setErrorOrSuccess(0,createAccount,"success","");
            }
        // Email address
            if(emailValue===""){
                setErrorOrSuccess(1,createAccount,"error","Email Address Cannot Be Blank");
            }
            else if(!isEmail(emailValue)){
                setErrorOrSuccess(1,createAccount,"error","Not a Valid Email Adress");
            }
            else{
                setErrorOrSuccess(1,createAccount,"success","");
            }
        // Password
            if(passwordValue===""){
                setErrorOrSuccess(2,createAccount,"error","Password Cannot Be Blank");
            }
            else if(passwordValue.length < 7 ){
                setErrorOrSuccess(2,createAccount,"error","Weak Password");
            }
            else{
                setErrorOrSuccess(2,createAccount,"success","Strong Password");
            }
        // Password conformation
            if(passwordConfirmValue===""){
                setErrorOrSuccess(3,createAccount,"error","Password Cannot Be Blank");
            }
            else if(passwordConfirmValue !== passwordValue ){
                setErrorOrSuccess(3,createAccount,"error","Wrong Password");
            }
            else{
                setErrorOrSuccess(3,createAccount,"success","Password Matched");
            }
    });
}

function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}


function setErrorOrSuccess(select,Element,type,messege){
    let userInput=Element.getElementsByClassName("user-input")[select];
    let inputmsg=Element.getElementsByClassName("input-msg-box")[select];
    
    let errorIcon=Element.getElementsByClassName("error-icon")[select];
    let successIcon=Element.getElementsByClassName("success-icon")[select];

    userInput.className=`user-input input-${type}`;

    if(type=="error"){
        inputmsg.classList.add("error-msg");
        inputmsg.classList.remove("success-msg");

        errorIcon.classList.add("error-alert-icon");
        successIcon.classList.remove("success-alert-icon");
    }   
    else{
        inputmsg.classList.add("success-msg");
        inputmsg.classList.remove("error-msg");

        errorIcon.classList.remove("error-alert-icon");
        successIcon.classList.add("success-alert-icon");
    }
    inputmsg.innerText=messege;
    console.log("after input msg");
}

/*................. In future Add local storage to verify the existing user login successfully ....................... */
/*................. ******************  ( C o m i n g  S o o n )  **************************** ............... */











