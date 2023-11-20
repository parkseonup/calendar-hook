export const ONE_WEEK = 7;
export const weekDays = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];
export const weekStartByCountry = {
    // 달력 표기를 일요일(0)부터 시작하는 국가
    'en-US': 0,
    'en-CA': 0,
    'es-MX': 0,
    'ja-JP': 0,
    'ko-KR': 0,
    'pt-BR': 0,
    'en-AU': 0,
    // 달력 표기를 월요일(1)부터 시작하는 국가
    'en-GB': 1,
    'fr-FR': 1,
    'de-DE': 1,
    'it-IT': 1,
    'es-ES': 1,
    'zh-CN': 1,
    'ru-RU': 1,
    // 달력 표기를 토요일(6)부터 시작하는 국가
    'fa-IR': 6,
    'ps-AF': 6, // 아프가니스탄 (AF)
};
export const THIS_MONTH = 'thisMonth';
export const OTHER_MONTH = 'otherMonth';
/** 날짜 객체에서 년을 구하는 함수 */
export const getYear = (date) => {
    if (date instanceof Date) {
        return date.getFullYear();
    }
    throw new Error(`Failed to get year from date: ${date}`);
};
/** 날짜 객체에서 달을 구하는 함수 */
export const getMonth = (date) => {
    if (date instanceof Date) {
        return date.getMonth();
    }
    throw new Error(`Failed to get month from date: ${date}`);
};
/** 날짜 객체에서 일자를 구하는 함수  */
export const getDate = (date) => {
    if (date instanceof Date) {
        return date.getDate();
    }
    throw new Error(`Failed to get date from date: ${date}`);
};
/** 날짜 객체에서 요일을 구하는 함수 */
export const getDay = (date) => {
    if (date instanceof Date) {
        return date.getDay();
    }
    throw new Error(`Failed to get day from date: ${date}`);
};
/** 특정 달의 요일을 구하는 함수 */
export const getMonthFirstDay = (date) => {
    if (date instanceof Date) {
        return getDay(new Date(getYear(date), getMonth(date), 1));
    }
    throw new Error(`Failed to get start day from date: ${date}`);
};
/** 특정 달의 마지막 날짜를 구하는 함수 */
export const getMonthEndDate = (date) => {
    if (date instanceof Date) {
        return getDate(new Date(getYear(date), getMonth(date) + 1, 0));
    }
    throw new Error(`Failed to get end date from date: ${date}`);
};
/** 특정 달의 1일 날짜를 구하는 함수 */
export const setFirstDate = (date) => {
    date.setDate(1);
    return date;
};
/** 한 주의 시작 요일을 기준으로 특정 달이 시작하는 날짜의 index를 구하는 함수  */
export const getMonthlyStartIndex = (date, weekStartDay = 0) => {
    const startDay = getMonthFirstDay(date);
    return weekStartDay - startDay > 0 ? 7 - (weekStartDay - startDay) : -(weekStartDay - startDay);
};
/** 특정 달의 주 수를 구하는 함수 */
export const getNumberOfWeeks = (date, weekStartDay = 0) => {
    return Math.ceil((getMonthlyStartIndex(date, weekStartDay) + getMonthEndDate(date)) / ONE_WEEK);
};
/** Date 객체를 YY-mm-dd 형태의 문자열로 변환하는 함수 */
export const getDateToString = (date) => {
    if (date instanceof Date) {
        return `${getYear(date)}-${(getMonth(date) + 1 + '').padStart(2, '0')}-${(getDate(date) + '').padStart(2, '0')}`;
    }
    throw new Error(`Failed to get date string from date: ${date}`);
};
/** 달력에 출력될 요일 목록을 구하는 함수 */
export const getWeekDays = (weekStartDay) => {
    const newWeekDays = [];
    weekDays.forEach((day, i) => {
        const index = i - weekStartDay >= 0 ? i - weekStartDay : weekDays.length + (i - weekStartDay);
        newWeekDays[index] = { key: i, value: day };
    });
    return newWeekDays;
};
/** 주 단위의 날짜 데이터를 구하는 함수 */
export const getWeeklyDate = (startDate, currentMonth) => Array.from({ length: ONE_WEEK }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(getDate(startDate) + i);
    return {
        key: `daily_${i}_${date}`,
        value: date,
        status: currentMonth === getMonth(date) ? THIS_MONTH : OTHER_MONTH,
    };
});
/** 2*2 배열로 날짜 데이터를 구하는 함수 */
export const getMonthlyDate = (date, weekStart, showFixedNumberOfWeeks) => {
    const numberOfWeeks = showFixedNumberOfWeeks ?? getNumberOfWeeks(date, weekStart); // 출력될 달의 주 수
    // 달력에 출력될 첫번째 날짜를 구한다. (이전/현재/다음 달 상관없이)
    const monthlyStartDate = setFirstDate(new Date(date));
    monthlyStartDate.setDate(1 - getMonthlyStartIndex(date, weekStart));
    return Array.from({ length: numberOfWeeks }, (_, i) => {
        const newDate = new Date(monthlyStartDate);
        newDate.setDate(getDate(monthlyStartDate) + 7 * i);
        return {
            key: `weekly_${i}_${date}`,
            value: getWeeklyDate(newDate, getMonth(date)),
        };
    });
};
//# sourceMappingURL=date-utils.js.map