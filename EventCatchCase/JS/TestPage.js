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
}, 60000);

function sendAJAX(data) {
    var req = data;
}