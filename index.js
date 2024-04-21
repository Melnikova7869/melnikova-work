const hik = JSON.stringify({
    key1: 1,
    key2: '1',
    key3: null,
    key4: () => { },
    key5: ([1, 2, 3, 4, 5]),
    key7: {
        key1: 1,
        key2: '1',
        key3: null,
        key4: () => { },
        key5: ([1, 2, 3, 4, 5]),
        key6: function test(params) {
            console.log();
        }
    }
});

console.log(hik);

const myJSON = '{"key1": 1, "key2": "1"}';

try {
    JSON.parse(myJSON)
    console.log("тут мы не были");
} catch (error) {
    console.log("ошибка");
}
fetch('https://randomuser.me/api/123')
    .then((response) => {
        /* return response.json() */
        if (response.ok) {
            return response.json();
        } console.log("not ok");
    })
    .then((data) => { console.log(data); })
    .catch((error) => { console.log(error); });

// async/await
function fun1() {
    return 1;
}

async function fun2() {
    return await 2;
}

function fun3() {
    return 3;
}

console.log(fun1());
console.log(fun2());
console.log(fun3());

async function getUser() {
    try {
        const userResponse = await fetch('https://randomuser.me/api/', { "method": "POST", "headers": {}, body });
        const userData = await userResponse.json();
        return userData.results[0];
    } catch (error) {
        console.log("some error");
    }
}

getUser();

async function logger() {
    console.log(await getUser());
}

logger();

/* localStorage.setItem('key2', JSON.stringify([1,2,3]));
console.log(JSON.parse(localStorage.getItem('meKey3')));
console.log(localStorage.length); */

console.log(Date.now());

localStorage.setItem('time', Date.now());
/* console.log(new Date(parseInt(localStorage.getItem('time')))); */
console.log(new Date((localStorage.getItem('time')).toString()));

localStorage.clear();
localStorage.removeItem();

let db
const openRequest = indexedDB.open('app', 2);
openRequest.addEventListener('error', (e) => {
    console.log(e.target.error);
});

openRequest.addEventListener('success', (e) => {
    db = e.target.result;
    console.log();
});

openRequest.addEventListener('upradeneeded', (e) => {
    db = e.target.result;
    db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
});

console.log(openRequest);
