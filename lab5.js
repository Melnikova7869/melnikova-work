const jobButton = document.getElementById('job-button');
const jobResult = document.getElementById('job-result');

jobButton.addEventListener('click', async () => {
    jobResult.textContent = '...';

    const result = await job();

    jobResult.textContent = result;
});

function job() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Работа сделана');
        }, 2000);
    });
}

/* ----------------------------------------- */

const button = document.getElementById('get-data-button');
const text = document.getElementById('get-data');


button.addEventListener('click', () => {
    const getDataWithError = getData(0.8, 'Привет!');
    function getData(errorProbability = 0.5, dataString) {

        dataString = "Синтетические данные: " + dataString;

        return function (number) {
            if (typeof number !== 'number' || isNaN(number)) {
                throw new Error('Argument must be a number');
            }

            if (Math.random() < errorProbability) {
                return 'null';
            } else {
                return dataString;
            }
        };
    }
    text.textContent = getDataWithError(10);
});
