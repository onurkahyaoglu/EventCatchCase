$(document).ready(function () {

});

let userActions = [];

// Track page load time
let pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
userActions.push({
    action: 'pageLoad',
    time: pageLoadTime
});

// Track form submissions
let forms = document.getElementsByTagName('form');
for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (event) {
        let formId = event.target.id || 'unknown';
        userActions.push({
            action: 'formSubmit',
            formId: formId,
            time: new Date().getTime()
        });
    });
}

// Track link clicks
let links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        let linkText = event.target.innerText;
        let linkUrl = event.target.href;
        userActions.push({
            action: 'linkClick',
            linkText: linkText,
            linkUrl: linkUrl,
            time: new Date().getTime()
        });
    });
}

// Track button clicks
let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        let buttonsText = event.target.innerText;
        let buttonsUrl = event.target.href;
        userActions.push({
            action: 'buttonClick',
            buttonsText: buttonsText,
            buttonsUrl: buttonsUrl,
            time: new Date().getTime()
        });
    });
}

//Track input change
let inputElements = document.querySelectorAll('input');
inputElements.forEach(function (inputElement) {
    inputElement.addEventListener('change', function (event) {
        let newValue = event.target.value;
        userActions.push({
            action: 'inputChange',
            text: newValue,
            time: new Date().getTime()
        });
    });
});

// Track mouse movements
document.addEventListener('mousemove', function (event) {
    userActions.push({
        action: 'mouseMove',
        x: event.clientX,
        y: event.clientY,
        time: new Date().getTime()
    });
});

// Send data to server-side script every 30 seconds
setInterval(function () {
    sendAJAX(JSON.stringify(userActions));
}, 10000);

function sendAJAX(userAct) {

    var data = {
        stUserAct: userAct,
    };
    $.ajax({
        type: "POST",
        url: "/Methods.aspx/writeCatchEvent",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: sendAJAXSuccess,
        error: function (xhr, e) {
            alert(response.d);
        }
    });
}
function sendAJAXSuccess() {

}