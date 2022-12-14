let ele = document.getElementsByClassName("toggle-image")
for (let i = 0; i < 5; i++) {
    ele[i].addEventListener("click", () => {
        let content = ele[i].parentElement.parentElement.childNodes[3]
        let container = ele[i].parentElement.parentElement
        container.classList.toggle("open")
        console.log(ele[i].childNodes[1])
        ele[i].childNodes[1].classList.toggle("up")
        ele[i].classList.toggle('bg-main')
        if (content.style.opacity == 1) {
            content.style.opacity = 0
        }
        else {
            content.style.opacity = 1
        }

        for (let j = 0; j < 5; j++) {
            let othercontent = ele[j].parentElement.parentElement.childNodes[3]
            let othercontainer = ele[j].parentElement.parentElement
            if (j != i) {
                othercontent.style.opacity = 0
                othercontainer.classList.remove("open")
                ele[j].childNodes[1].classList.remove("up")
                ele[j].classList.remove('bg-main')
            }
        }
    })
}