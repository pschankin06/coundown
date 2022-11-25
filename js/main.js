'use strict';
import {
    UI_ELEMENTS,
    showResult
} from "./view.js";

import { intervalToDuration } from 'date-fns';

export function calculateRemainingTime() {
    const userDate = new Date(UI_ELEMENTS.DATE_INPUT.value);
    const currentTime = new Date();
    const remainingTime = intervalToDuration({
        start: userDate,
        end: currentTime
    });
    showResult(remainingTime, userDate, currentTime);
}