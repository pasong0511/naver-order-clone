function createPopupEvent() {
    const body = document.querySelector("body");
    const popup = document.querySelector(".option-popup-area")
    const orderBtn = document.querySelector(".btn-order");
    const closeBtn = document.querySelector(".btn-close");

    const popupOpen = () => {
        body.classList.add("scroll-off");
        popup.classList.add("show");
        console.log("버튼 클릭")
    }

    const popupClose = () => {
        body.classList.remove("scroll-off");
        popup.classList.remove("show");
    }

    orderBtn.addEventListener("click", popupOpen);
    closeBtn.addEventListener("click", popupClose);
}

function createActiveEvent(parentSelector, childSelector) {
    const items = document.querySelectorAll(`${parentSelector} ${childSelector}`);

    items.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(`${parentSelector} .is-active`).classList.remove("is-active")
            item.classList.add("is-active");

        })
    })
}

createPopupEvent()
createActiveEvent(".tab-switch-box", "a");