document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('mainform');
    form.onsubmit = onsubmitHandler;
});

const onsubmitHandler = (e) => {
    e.preventDefault();
    const email = document.querySelector("input[name='email']");
    const password = document.querySelector("input[name='password']");

    fetch('/', {
        method: 'POST',
        header: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
};