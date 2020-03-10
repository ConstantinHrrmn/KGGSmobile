/*
File name : index.js
Description : Display the content of the home page
 */

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    const container = document.getElementById("container-characters");
    container.style.zoom = 1;

    $$("#zoom-in").on("click", () => {
        let zoom = Number(container.style.zoom) + 0.25;
        container.style.zoom = zoom;
        app.range.setValue("#range-zoom", zoom);
    });
    $$("#zoom-out").on("click", () => {
        let zoom = Number(container.style.zoom) - 0.25;
        container.style.zoom = zoom;
        app.range.setValue("#range-zoom", zoom);
    });
}

document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {
    if ($$('.panel').hasClass("panel-active")) {
        app.panel.close(".panel");
    } else if ($$('.modal-in').length > 0) {
        app.smartSelect.close("#select-compare"); // TODO: fix that
    } else if ($$('.back').length > 0) {
        mainView.router.back();
    } else {
        navigator.app.exitApp();
    }
}    