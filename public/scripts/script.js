// Animation control of arrow
addEventListener("scroll", () => {
    if(window.scrollY >= 30){
        document.querySelector("#arrow").classList.add("dissappear")
    }else{
        document.querySelector("#arrow").classList.remove("dissappear")
    }
})


//Form validation
function validateForm(form){
    const formPostTitle = form.postTitle.value;
    const formPostBody = form.postBody.value;

    console.log(formPostBody, formPostTitle);
    
    if(formPostBody === "" || formPostTitle === ""){
        document.querySelector(".error").textContent = "All fields must be filled!";
        return false;
    }
    
    return true;
}