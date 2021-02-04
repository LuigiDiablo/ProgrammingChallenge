

// Send Request
const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };
        xhr.onerror = () => {
            reject('some Error');
        }
        xhr.send(JSON.stringify(data));
    });
    return promise;
};


// API requests & filling data & response handling
function getData() {
    sendHttpRequest('GET', 'https://reqres.in/api/users').then((resData) => {
        console.log(resData);
    });
}

function login(email, pw) {
    sendHttpRequest('POST', 'https://reqres.in/api/login', {
        email: email,
        password: pw
    }).then((resData) => {
        console.log(resData);
        document.getElementById("token").style.display = 'block';
        document.getElementById("token").innerHTML = `Token: ${resData.token}`;
    }).catch(err => {
        console.log(err);
    });
}



// Triggering fuctions. Better approach is that this functions are not in a Service.

function validateLogin() {
    // We do not validate data! This is critical.
    // In this case it's ok, because we have every time the same dummy data.
    let email = document.getElementById("email").value;
    let pw = document.getElementById("pw").value;
    login(email, pw);
}