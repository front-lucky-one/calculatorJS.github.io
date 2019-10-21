let startNum = document.querySelector('.start'),
    budjetNum = document.querySelector('.budget-value'),
    dayNum = document.querySelector('.daybudget-value'),
    levelNum = document.querySelector('.level-value'),
    staexpensesNum = document.querySelector('.expenses-value'),
    optionalexpensesNum = document.querySelector('.optionalexpenses-value'),
    incomeNum = document.querySelector('.income-value'),
    chooseIncome = document.querySelector('.choose-income'),
    monthsavingsNum = document.querySelector('.monthsavings-value'),
    yearsavingsNum = document.querySelector('.yearsavings-value'),
    yearNum = document.querySelector('.year-value'),
    monthNum = document.querySelector('.month-value'),
    daysNum = document.querySelector('.day-value'),
    expensenItem = document.querySelectorAll('.expenses-item'),
    expensBtn = document.querySelector('.expenses-item-btn'),
    optionalBtn = document.querySelector('.optionalexpenses-btn'),
    countBtn = document.querySelector('.count-budget-btn'),
    savingsCheck = document.querySelector('#savings'),
    optional = document.querySelectorAll('.optionalexpenses-item'),
    sumValue = document.querySelector('.choose-sum'),
    persentValue = document.querySelector('.choose-percent'),
    people = document.querySelectorAll('.persons')[0],
    day = document.querySelectorAll('.persons')[1],
    place = document.getElementById('lol'),
    numValue = document.querySelector('.value'),
    dateInput = document.querySelector('.date-input'),
    budjetInput = document.querySelector('.budjet-input'),
    modalContent = document.querySelector('.modalwindow'),
    modalBudjet = document.querySelector('.modalBudjet'),
    dateNextBtn = document.querySelector('.date-next-btn'),
    startBtn = document.querySelector('.start-programm-btn'),
    personsSum = 0,
    daySum = 0,
    total = 0;
let money, time;

let appData = {
    moneyFin: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

startNum.addEventListener('click', function () {
    modalContent.style.display = 'block';
});

dateInput.addEventListener('input', function () {
    time = dateInput.value;
});

dateNextBtn.addEventListener('click', function () {
    modalContent.style.display = 'none';
    modalBudjet.style.display = 'block';
});

modalBudjet.addEventListener('input', function () {
    money = budjetInput.value;
});

startBtn.addEventListener('click', function () {
    if (budjetInput.value != '') {
        startBtn.disabled = false;
        modalBudjet.style.display = 'none';
        appData.moneyFin = money;
        appData.timeData = time;
        budjetNum.textContent = money;
        yearNum.value = new Date(Date.parse(time)).getFullYear();
        monthNum.value = new Date(Date.parse(time)).getMonth() + 1;
        daysNum.value = new Date(Date.parse(time)).getDate();

    } else {
        startBtn.disabled = true;

    }

});

countBtn.addEventListener('click', function () {
    if (appData.moneyFin != undefined) {
        appData.moneyPerDay = (appData.moneyFin / 30).toFixed();
        dayNum.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelNum.textContent = 'Минимальный уровень достатка';

        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelNum.textContent = 'Средний уровень достатка!';
        } else if (appData.moneyPerDay > 2000) {
            levelNum.textContent = 'Высокий уровень достатка';

        } else {
            levelNum.textContent = 'Произошла ошибка'
        }

    } else {
        dayNum.textContent = 'Произошла ошибка'
    }

});

expensBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensenItem.length; i++) {
        let a = expensenItem[i].value,
            b = expensenItem[++i].value;
        if ((typeof (a)) != null && (typeof (b)) != null && a != ' ' && b != ' ' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;

        } else {
            i = i - 1;
        }

    }
    if (isNaN(sum)) {
        staexpensesNum.textContent = 'Произошла ошибка';

    } else {
        staexpensesNum.textContent = sum;
    }

});


optionalBtn.addEventListener('click', function () {
    for (let i = 0; i < optional.length; i++) {
        let opt = optional[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesNum.textContent += appData.optionalExpenses[i] + ' ';

    }

});

chooseIncome.addEventListener('input', () => {
    let items = chooseIncome.value;
    appData.income = items.split(',');
    incomeNum.textContent = appData.income;

});

savingsCheck.addEventListener('click', function () {
    if (appData.sevings == true) {
        appData.sevings = false;
    } else {
        appData.sevings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.sevings == true) {
        let sum = +sumValue.value,
            persent = +persentValue.value;
        appData.monthIncome = sum / 100 / 12 * persent;
        appData.yearIncome = sum / 100 * persent;
        monthsavingsNum.textContent = appData.monthIncome.toFixed(1);
        yearsavingsNum.textContent = appData.yearIncome.toFixed(1);

    }
});

persentValue.addEventListener('input', function () {
    if (appData.sevings == true) {
        let sum = +sumValue.value,
            persent = +persentValue.value;
        appData.monthIncome = sum / 100 / 12 * persent;
        appData.yearIncome = sum / 100 * persent;
        monthsavingsNum.textContent = appData.monthIncome.toFixed(1);
        yearsavingsNum.textContent = appData.yearIncome.toFixed(1);
    }
});