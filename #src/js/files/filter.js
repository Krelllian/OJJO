function prodFilter() {
    const buttons = document.querySelectorAll('.filter__btn')
    const cards = document.querySelectorAll('.filter__item')
    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('hide')
            } else {
                item.classList.remove('hide')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
            buttons.forEach((button) => {
                button.classList.remove('_active')
            })
            button.classList.add("_active")
        })
    })
}

prodFilter()