function toggleActive() {
    const toggleBtn = document.querySelectorAll(".btn-toggle");

    if (!toggleBtn) {
        return;
    }

    const toggleMenuList = (event) => {
        event.currentTarget.closest('.agreement-item').classList.toggle('is-open');
    }

    toggleBtn.forEach((event) => {
        event.addEventListener("click", toggleMenuList);
    })
}

function createModalEvent() {
    const modal = document.querySelector(".modal-wrapper");
    const backScroll = document.querySelector("body");
    const minusBtn = document.querySelector(".btn-minus.disabled");
    const closeBtn = document.querySelector(".btn-close");

    minusBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
        backScroll.classList.add("scroll-off")
    });

    modal.addEventListener("click", () => {
        modal.classList.add("hidden");
        backScroll.classList.remove("scroll-off")
    });
}


toggleActive();
createModalEvent();