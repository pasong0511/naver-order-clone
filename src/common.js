function moveBackTop() {
    const goTopBtn = document.querySelector(".go-to-top");
    if (!goTopBtn) {
        return;
    }
    function moveTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    goTopBtn.addEventListener("click", moveTop);
}

function amountActiveEvent() {
    const amount = document.querySelectorAll(".amount-select")

    if (!amount) {
        return
    }

    amount.forEach((item) => {
        item.addEventListener("click", ({ target }) => {
            const { parentElement: parent } = target
            const amount = parent.querySelector(".amount");
            const minus = parent.querySelector(".btn-minus");
            const isMinus = target.classList.contains("btn-minus");
            const isDisabled = target.classList.contains("disabled");

            if (isDisabled) {
                return;
            }

            const num = parseInt(amount.innerText);
            const nextNum = isMinus ? num - 1 : num + 1

            if (nextNum < 0) {
                return;
            }

            minus.classList.toggle("enabled", nextNum !== 0)
            amount.innerText = nextNum;
        })
    })
}




moveBackTop();
amountActiveEvent();