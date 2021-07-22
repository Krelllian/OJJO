//========================================================================================================================================================

//Sorting catalog submenu js

const categLabel = document.querySelectorAll(".sorting-catalog__categ")
if (categLabel) {
    categLabel.forEach(el => {
        el.addEventListener("click", () => {
            el.classList.toggle('active')
        })
    });
}
//========================================================================================================================================================
