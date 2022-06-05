document.body.addEventListener("click", function (evt) {
    console.dir(this);
    //note evt.target can be a nested element, not the body element, resulting in misfires
    console.log(evt.target);
    window.location.replace("/webm1/index5.html");
});