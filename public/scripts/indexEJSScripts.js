// Reducing the length of the post body text on the home page
function reduceLength(){
    document.querySelectorAll(".post-content").forEach((item) => {
        if(item.textContent.length >=510){
            const text = item.textContent;
            item.textContent = text.substring(0,509) + "...";
        }
    });
    console.log("Reduce func!");
}

window.onload = function(){
    reduceLength();
}
// Animation control of arrow
addEventListener("scroll", () => {
    if(window.scrollY >= 30){
        document.querySelector("#arrow").classList.add("dissappear")
    }else{
        document.querySelector("#arrow").classList.remove("dissappear")
    }
})