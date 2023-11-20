import { useMemo, useState } from 'react';
import { getWeekDays, getDate, getMonth, getYear, weekStartByCountry, getMonthlyDate } from './date-utils';
export default function useCalendar({ showDate, showFixedNumberOfWeeks, locale }) {
    const today = new Date();
    const [currentFullDate, setCurrentFullDate] = useState(showDate ? new Date(showDate) : today);
    const [weekStart, setWeekStart] = useState(weekStartByCountry[locale ?? navigator.language]);
    const currentYear = getYear(currentFullDate);
    const currentMonth = getMonth(currentFullDate);
    const currentDate = getDate(currentFullDate);
    const monthlyDate = useMemo(() => getMonthlyDate(currentFullDate, weekStart, showFixedNumberOfWeeks), [currentFullDate, weekStart, showFixedNumberOfWeeks]);
    const movePrevMonth = () => {
        setCurrentFullDate(new Date(currentYear, currentMonth - 1, currentDate));
    };
    const moveNextMonth = () => {
        setCurrentFullDate(new Date(currentYear, currentMonth + 1, currentDate));
    };
    const changeWeekStart = (day) => {
        setWeekStart(day);
    };
    return {
        headers: {
            current: {
                year: currentYear,
                month: currentMonth,
            },
            weekStart,
            weekDays: getWeekDays(weekStart),
        },
        body: {
            value: monthlyDate,
            today,
        },
        view: {
            changeWeekStart,
            movePrevMonth,
            moveNextMonth,
        },
    };
}
//# sourceMappingURL=useCalendar.js.map