//========================================================================================================================================================

//Sorting catalog submenu

const categLabel = document.querySelectorAll(".sorting-catalog__categ")
if (categLabel) {
    categLabel.forEach(el => {
        el.addEventListener("click", () => {
            el.classList.toggle('active')
        })
    });
}
//========================================================================================================================================================

//thumbnail

let thumbnail = document.querySelectorAll(".card-page__thumbnail")
let imgFull = document.querySelector(".card-page__full-img")
if (thumbnail) {
    thumbnail.forEach(el => {
        el.addEventListener("click", () => {
            thumbnail.forEach(el => {
                el.classList.remove('active')
            })
            el.classList.add('active')
            imgFull.src = el.dataset.url
            imgFull.previousSibling.srcset = el.dataset.url.slice(0, -3) + "webp"

            console.log(imgFull)
        })
    })
}