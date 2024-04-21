/* eslint-disable no-unused-vars */
/* -------------------1------------------- */
const likeButton = document.getElementById('like-button');

likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('active');
});

/* -------------------2------------------- */

const like = document.getElementById('like-button1');
const dislike = document.getElementById('dislike-button');

function buttonActive(button) {
    if (button === like) {
        like.classList.toggle('active');
        dislike.classList.remove('active');
    } else {
        dislike.classList.toggle('active');
        like.classList.remove('active');
    }
}

like.addEventListener('click', () => {
    buttonActive(like);
});

dislike.addEventListener('click', () => {
    buttonActive(dislike);
});

/* -------------------3------------------- */

const addToCartButton = document.getElementById('add-to-cart');
const cartCountSpan = document.getElementById('count');

let cartCount = 0;

addToCartButton.addEventListener('click', () => {
    cartCount++;
    cartCountSpan.textContent = cartCount;
});

/* -------------------4------------------- */

/* function createList(items) {
  const list = document.createElement('ul');
  items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  });
  return list;
}

let currentList = createList(numbers);
listElement.appendChild(currentList);  */

/* function creatList(array) {
  const ul = document.createElement('ul');

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  array.forEach((num) => {
    const li = document.createElement('li');
    li.textContent = num;
    ul.appendChild(li);
  });
}

creatList(creat); ----------------------- */

/* --------------------------------------------- */
/* const sortInc = document.getElementById('sort-inc');
const sortDec = document.getElementById('sort-dec');
const reset = document.getElementById('reset');

function random(one, two) {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * (two - one + 1)));
  }
  return arr;
}

const numbers = random(1, 100);

/* function createList(arr) {
  const list = document.createElement('ul');

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  arr.forEach((number) => {
    const listItem = document.createElement('li');
    listItem.textContent = number;
    list.appendChild(listItem);
  });

  return list;
}
 */
/* function creatList(arr) {
  const list = document.createElement('ul');

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  arr.forEach((num) => {
    const li = document.createElement('li');
    li.textContent = num;
    list.appendChild(li);
  });
}

const numberDisplay = document.querySelector('li');
// eslint-disable-next-line no-undef
const newList = createList(arr);

numberDisplay.textContent = numbers.join(', ');

// eslint-disable-next-line no-shadow
function sortByInc(numberDisplay) {
  return newList.slice().sort((a, b) => a - b);
}

// eslint-disable-next-line no-shadow
function sortByDec(numberDisplay) {
  return newList.slice().sort((a, b) => b - a);
}

sortInc.addEventListener('click', () => {
  const sortedInc = sortByInc(numbers);
  updateDisplay(sortedInc);
});

sortDec.addEventListener('click', () => {
  const sortedDec = sortByDec(numbers);
  updateDisplay(sortedDec);
});

reset.addEventListener('click', () => {
  updateDisplay(numbers);
});

// eslint-disable-next-line no-shadow
function updateDisplay(numbers) {
  numberDisplay.textContent = numbers.join(', ');
}
-------------------------------- */
/* const sortIncButton = document.getElementById('sort-inc');
const sortDecButton = document.getElementById('sort-dec');
const resetButton = document.getElementById('reset');
const numberDisplay = document.querySelector('li');

function createList(numbers) {
  const list = document.createElement('ul');

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  numbers.forEach((number) => {
    const listItem = document.createElement('li');
    listItem.textContent = number;
    list.appendChild(listItem);
  });

  return list;
}

const initialNumbers = generateRandomNumbers(1, 100, 10);

function generateRandomNumbers(min, max, quantity) {
  const numbers = [];
  for (let i = 0; i < quantity; i++) {
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numbers;
}


let currentNumbers = createList(initialNumbers);

function updateDisplay(currentNumbers) {
  numberDisplay.textContent = currentNumbers.join(', ');
}

function sortByInc(currentNumbers) {
  return currentNumbers.slice().sort((a, b) => a - b);
}

function sortByDec(currentNumbers) {
  return currentNumbers.slice().sort((a, b) => b - a);
}

sortIncButton.addEventListener('click', () => {
  const sortedNumbers = sortByInc([...currentNumbers]);
  updateDisplay(sortedNumbers);
});

sortDecButton.addEventListener('click', () => {
  const sortedNumbers = sortByDec([...currentNumbers]);
  currentNumbers = sortedNumbers;
  updateDisplay(sortedNumbers);
});

resetButton.addEventListener('click', () => {
  currentNumbers = initialNumbers;
  updateDisplay(currentNumbers);
}); */


/* const initialList = createList(initialNumbers);
numberDisplay.parentNode.appendChild(initialList); */


/* const sortIncButton = document.getElementById('sort-inc');
const sortDecButton = document.getElementById('sort-dec');
const resetButton = document.getElementById('reset');
const numberDisplay = document.getElementById('number');

function generateRandomNumbers(min, max, quantity) {
  const numbers = [];
  for (let i = 0; i < quantity; i++) {
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numbers;
}

const initialNumbers = generateRandomNumbers(1, 100, 10);

function createList(numbers) {
  const list = document.createElement('ul');

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  numbers.forEach((number) => {
    const listItem = document.createElement('li');
    listItem.textContent = number;
    list.appendChild(listItem);
  });

  return list;
}

function updateDisplay(numbers) {
  numberDisplay.textContent = numbers.join(', ');
}

let currentNumbers = initialNumbers;

sortIncButton.addEventListener('click', () => {
  const sortedNumbers = sortByInc([...currentNumbers]);
  currentNumbers = sortedNumbers;
  updateDisplay(sortedNumbers);
});

sortDecButton.addEventListener('click', () => {
  const sortedNumbers = sortByDec([...currentNumbers]);
  currentNumbers = sortedNumbers;
  updateDisplay(sortedNumbers);
});

resetButton.addEventListener('click', () => {
  currentNumbers = initialNumbers;
  updateDisplay(currentNumbers);
});

function sortByInc(numbers) {
  return numbers.slice().sort((a, b) => a - b);
}

function sortByDec(numbers) {
  return numbers.slice().sort((a, b) => b - a);
}

const initialList = createList(initialNumbers);
numberDisplay.parentNode.appendChild(initialList);
 */

const sortInc = document.getElementById('sort-inc');
const sortDec = document.getElementById('sort-dec');
const reset = document.getElementById('reset');
const list = document.getElementById('number');

function random(one, two) {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * (two - one + 1)));
    }
    return arr;
}

const numbers = random(1, 100);

function createList(array) {
    if (list.hasChildNodes()) {
        list.removeChild(list.children[0]);
    }
    const ul = document.createElement('ul');
    array.forEach((num) => {
        const li = document.createElement('li');
        li.textContent = num;
        ul.appendChild(li);
    });
    list.appendChild(ul);
}

function updateDisplay(currentNumbers) {
    list.textContent = currentNumbers.join(', ');
}

function sortByInc(arr) {
    const sortArrayDown = [...numbers].slice().sort((a, b) => a - b);
    return sortArrayDown;
}

function sortByDec(arr) {
    const sortArrayUp = [...numbers].sort((a, b) => b - a);
    return sortArrayUp;
}

sortInc.addEventListener('click', () => {
    const sortedInc = sortByInc(numbers);
    updateDisplay(sortedInc);
});

sortDec.addEventListener('click', () => {
    const sortedDec = sortByDec(numbers);
    updateDisplay(sortedDec);
});

reset.addEventListener('click', () => {
    updateDisplay(numbers);
});

createList(numbers);
/* -------------------4.1------------------- */

/* -------------------5------------------- */

const coordinatesElement = document.getElementById('coordinates');

document.addEventListener('click', (e) => {
    const { clientX, clientY } = e;
    coordinatesElement.textContent = `X: ${clientX}, Y: ${clientY}`;
});
