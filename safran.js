let worldTarget = document.querySelector("#worldwide")
// console.dir(world);
let dropDown = document.querySelector(".main_world_div")


worldTarget.addEventListener("mouseover", () => {
    // console.log(drop_workd);
    dropDown.style.visibility = "visible";
    dropDown.style.opacity = "1";
    console.log("object");
})
worldTarget.addEventListener("mouseleave", () => {
    dropDown.style.visibility = "hidden";
    dropDown.style.opacity = "0";
})

// companies dropdown target

let comanyTarget = document.querySelector(".companies_content");
let companyDropDown = document.querySelector(".companies_content_wrapper");

comanyTarget.addEventListener("mouseover", () => {
    companyDropDown.style.visibility = "visible";
    companyDropDown.style.opacity = "1";
    console.log("object");
})
comanyTarget.addEventListener("mouseleave", () => {
    companyDropDown.style.visibility = "hidden";
    companyDropDown.style.opacity = "1";
    companyDropDown.style.transition = "ease in o.5s";

})

// graphicguidlines dropdown target
let graphicContentTarget = document.querySelector(".graphic_content");
let graphicContentDroDown = document.querySelector(".graphic_content_wrapper");
graphicContentTarget.addEventListener("mouseover", () => {
    graphicContentDroDown.style.visibility = "visible";
    graphicContentDroDown.style.opacity = "1";

})
graphicContentTarget.addEventListener("mouseleave", () => {
    graphicContentDroDown.style.visibility = "hidden";
    graphicContentDroDown.style.opacity = "0";

})