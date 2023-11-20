import { MonthSatus, MonthlyDate, WeekDays, WeeklyDate } from './useCalendar.type';
export declare const ONE_WEEK = 7;
export declare const weekDays: string[];
export declare const weekStartByCountry: {
    [key: string]: number;
};
export declare const THIS_MONTH: MonthSatus;
export declare const OTHER_MONTH: MonthSatus;
/** 날짜 객체에서 년을 구하는 함수 */
export declare const getYear: (date: Date) => number;
/** 날짜 객체에서 달을 구하는 함수 */
export declare const getMonth: (date: Date) => number;
/** 날짜 객체에서 일자를 구하는 함수  */
export declare const getDate: (date: Date) => number;
/** 날짜 객체에서 요일을 구하는 함수 */
export declare const getDay: (date: Date) => number;
/** 특정 달의 요일을 구하는 함수 */
export declare const getMonthFirstDay: (date: Date) => number;
/** 특정 달의 마지막 날짜를 구하는 함수 */
export declare const getMonthEndDate: (date: Date) => number;
/** 특정 달의 1일 날짜를 구하는 함수 */
export declare const setFirstDate: (date: Date) => Date;
/** 한 주의 시작 요일을 기준으로 특정 달이 시작하는 날짜의 index를 구하는 함수  */
export declare const getMonthlyStartIndex: (date: Date, weekStartDay?: number) => number;
/** 특정 달의 주 수를 구하는 함수 */
export declare const getNumberOfWeeks: (date: Date, weekStartDay?: number) => number;
/** Date 객체를 YY-mm-dd 형태의 문자열로 변환하는 함수 */
export declare const getDateToString: (date: Date) => string;
/** 달력에 출력될 요일 목록을 구하는 함수 */
export declare const getWeekDays: (weekStartDay: number) => WeekDays;
/** 주 단위의 날짜 데이터를 구하는 함수 */
export declare const getWeeklyDate: (startDate: Date, currentMonth: number) => WeeklyDate;
/** 2*2 배열로 날짜 데이터를 구하는 함수 */
export declare const getMonthlyDate: (date: Date, weekStart: number, showFixedNumberOfWeeks?: number) => MonthlyDate;
