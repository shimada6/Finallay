let topicsArray = [
    "時王",
    "Build",
    "EX-aid",
    "Ghost",
    "Drive",
    "鎧武"
];
let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //一次設定好月份跟日期
    startDate.setMonth(startMonth-1, startDay);
    //時間先忽略，設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

//先在程式碼中直接指定社團課程第一天
setMouthAndDay(4,1);