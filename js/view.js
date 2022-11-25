import { calculateRemainingTime } from './main.js';

import { formatDuration } from 'date-fns';

export const UI_ELEMENTS = {
    COUNTDOWN_FORM: document.querySelector('.countdown__form'),
    DATE_INPUT: document.querySelector('#input'),
    REMAINING_TIME_CONTAINER: document.querySelector('.result'),
    REMAINING_TIME: document.querySelector('.result__text')
}

UI_ELEMENTS.COUNTDOWN_FORM.addEventListener('submit', event => {
    event.preventDefault();
    calculateRemainingTime();
});

export function showResult(remainingTime, userDate, currentTime) {
    const remainingTimeText = formatDuration(remainingTime, { format: ['years', 'days', 'hours'], delimiter: ', ' });
    const negativeTime = '-' + remainingTimeText;
    const outputTime = userDate > currentTime ? remainingTimeText : negativeTime;
    UI_ELEMENTS.REMAINING_TIME_CONTAINER.classList.add('show');
    UI_ELEMENTS.REMAINING_TIME.textContent = `Remaining time: ${outputTime}`;
    clearDateInput();
}

function clearDateInput() {
    UI_ELEMENTS.DATE_INPUT.value = '';
}