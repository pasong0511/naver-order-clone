window.onload = function () {
    popupOpen();
}

function popupOpen() {
    const dimmedLayer = document.querySelector(".dimmed-layer");
    const orderPopup = document.querySelector(".order-type-popup");
    const backScroll = document.querySelector("body");

    dimmedLayer.classList.remove("hidden");
    orderPopup.classList.remove("hidden");
    backScroll.classList.add("scroll-off")

    //팝업창 클릭하면 꺼지는 이벤트 발생
    orderPopup.addEventListener("click", function () {
        dimmedLayer.classList.add("hidden");
        orderPopup.classList.add("hidden");
        backScroll.classList.remove("scroll-off");
    })
}


function createActiveEvent(parentSelector, childSelector) {
    const items = document.querySelectorAll(`${parentSelector} ${childSelector}`);
    const menuInfo = document.querySelector(".info-main-notice");

    items.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(`${parentSelector} .is-active`).classList.remove("is-active")
            item.classList.add("is-active");

            if (item.classList.contains("packing")) {
                menuInfo.innerText = `가지고 가실 수 있게 포장해 드립니다.`;        //지금은 클래스 명이나, 값으로 가져올수있는가?
            } else if (item.classList.contains("holl")) {
                menuInfo.innerText = `매장에서 먹고 가실 수 있습니다.`;
            } else {
                menuInfo.innerText = `배달해드립니다.`;

            }

        })
    })
}

function toggleActive() {
    const toggleBtn = document.querySelectorAll(".btn-toggle");

    if (!toggleBtn) {
        return;
    }

    //const 함수 물어보기
    const toggleMenuList = (event) => {
        event.currentTarget.closest('.menu-list-area').classList.toggle('is-closed');
    }

    toggleBtn.forEach((event) => {
        event.addEventListener("click", toggleMenuList);
    })
}

createActiveEvent(".tab-inner", "a");
createActiveEvent(".tab-switch-box", "a");
toggleActive()