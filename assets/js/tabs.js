const tabsItem = document.querySelectorAll(".services-page__item");

tabsItem.forEach(el => {
    el.addEventListener("click", (e) => {
        tabsItem.forEach(item => {
            item.classList.remove("active")
        })

        el.classList.add("active")
    })
})
