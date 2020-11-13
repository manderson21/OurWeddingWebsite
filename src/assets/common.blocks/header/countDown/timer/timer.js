//CSS
require('./timer__wrapper.css')
require('./timer__element.css')


const timerElement = document.getElementById("timer")



let currentDate = new Date()
const countDownDate = new Date("Jul 30, 2021 00:00:00")

const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth()
const currentDay = currentDate.getDate()

const countDownYear = countDownDate.getFullYear()
const countDownMonth = countDownDate.getMonth()
const countDownDay = countDownDate.getDate()

let months
let days
let hours
let minutes
let seconds

window.onload = function () {

    timerElement.innerHTML = `
        <div class="timer__wrapper">
          <div id="timer__month" class="timer__element">
            <p class="timer__element__number"></p>
            <p class="timer__element__label">months</p>
          </div>
          <div id="timer__day" class="timer__element">
            <p class="timer__element__number"></p>
            <p class="timer__element__label">days</p>
          </div>
          <div id="timer__hour" class="timer__element">
            <p class="timer__element__number"></p>
            <p class="timer__element__label">hours</p>
          </div>
          <div id="timer__minute" class="timer__element">
            <p class="timer__element__number"></p>
            <p class="timer__element__label">minutes</p>
          </div>
          <div id="timer__second" class="timer__element">
            <p class="timer__element__number"></p>
            <p class="timer__element__label">seconds</p>
          </divl>
        </div>
    `
}

let x = setInterval(function () {

    const timerMonthElement = document.getElementById("timer__month")
    const timerDayElement = document.getElementById("timer__day")
    const timerHourElement = document.getElementById("timer__hour")
    const timerMinuteElement = document.getElementById("timer__minute")
    const timerSecondElement = document.getElementById("timer__second")

    const timerNumberClass = "timer__element__number"

    //Today's date
    currentDate = new Date()

    getMonths()
    getDateForRemainderCountDown()

    // Display time in element with id="timer"

    // timerElement.innerHTML = padNum(months) + " : " + padNum(days) + " : " + padNum(hours) + " : " + padNum(minutes) + " : " + padNum(seconds)
    timerMonthElement.getElementsByClassName(timerNumberClass)[0].innerHTML = padNum(months)
    timerDayElement.getElementsByClassName(timerNumberClass)[0].innerHTML = padNum(days)
    timerHourElement.getElementsByClassName(timerNumberClass)[0].innerHTML = padNum(hours)
    timerMinuteElement.getElementsByClassName(timerNumberClass)[0].innerHTML = padNum(minutes)
    timerSecondElement.getElementsByClassName(timerNumberClass)[0].innerHTML = padNum(seconds)

    console.log(currentDate.getTime())
    console.log(countDownDate.getTime())


    // If countdown timer is finished
    if (currentDate >= countDownDate) {
        clearInterval(x)
        timerElement.innerHTML = "TODAY'S THE DAY!!!"
    }


}, 1000);


function getMonths() {
    const yearDistance = countDownYear - currentYear
    const monthDistance = yearDistance * 12

    if (countDownDay < currentDay) {
        months = ((countDownMonth + monthDistance) - 1) - currentMonth
    } else {
        months = (countDownMonth + monthDistance) - currentMonth
    }
}

function getDateForRemainderCountDown() {
    let distance

    const MILISEC_PER_SEC = 1000
    const MILISEC_PER_MIN = MILISEC_PER_SEC * 60
    const MILISEC_PER_HOUR = MILISEC_PER_MIN * 60
    const MILISEC_PER_DAY = MILISEC_PER_HOUR * 24

    const currentHours = currentDate.getHours()
    const currentMinutes = currentDate.getMinutes()
    const currentSeconds = currentDate.getSeconds()

    // Determine the starting point for days calculation
    if (months === 0) {
        distance = countDownDate.getTime() - currentDate.getTime()
    } else {

        if (countDownDay < currentDay) {

            // Deals with months with less days than the current day
            const daysInMonthBeforeLast = new Date(countDownYear, countDownMonth, 0).getDate()
            const currentDayOrLastDay = (daysInMonthBeforeLast < currentDay) ? daysInMonthBeforeLast : currentDay

            const monthBeforeDate = (countDownMonth !== 0) ?
                new Date(countDownYear, (countDownMonth - 1), currentDayOrLastDay, currentHours, currentMinutes, currentSeconds) :
                new Date((countDownYear - 1), 11, currentDay, currentHours, currentMinutes, currentSeconds)

            distance = countDownDate.getTime() - monthBeforeDate.getTime()
        } else {
            const monthOfDate = new Date(countDownYear, countDownMonth, currentDay, currentHours, currentMinutes, currentSeconds)
            distance = countDownDate.getTime() - monthOfDate.getTime()
        }
    }

    days = Math.floor(distance / MILISEC_PER_DAY)
    hours = Math.floor((distance % MILISEC_PER_DAY) / MILISEC_PER_HOUR)
    minutes = Math.floor((distance % MILISEC_PER_HOUR) / MILISEC_PER_MIN)
    seconds = Math.floor((distance % MILISEC_PER_MIN) / MILISEC_PER_SEC)
}

// Add leading zero
function padNum(num) {
    return ((num <= 9) ? ("0" + num) : num)
}

