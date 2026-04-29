//? Date and time related question from 44 - 50

//? Ques no 44: guess the output

// let date = new Date()

// console.log(date.toLocaleString())
// console.log(date.getTime())


//? Ques no 45: Validate that a user's selected date range is no longer than 30 days

// const nowDate = new Date('2025-04-23')

// const userDate = new Date('2025-08-25')

// const diff = userDate - nowDate

// const numOfDays = (Math.floor(diff / 1000 / 60 / 60 / 24))

// if(numOfDays > 30) {
//   console.log('date is over now , better luck for next time')
// } else {
//   console.log('congratulations ! your form is submitted successfully')
// }


//? Ques no 46: Calculate differences between two dates in the format of _years_months_days_hours_minutes_seconds 

// const startingDate = '2024-04-28T08:23:13Z'
// const endingDate = '2025-07-23T09:24:12Z'

// const takeDifference = (start, end) => {
//   const startDate = new Date(start)
//   const endDate = new Date(end)

//   let diff = (endDate - startDate) / 1000;

//   const years = Math.floor(diff / (60 * 60 * 24 * 365));
//    diff = diff % (60 * 60 * 24 * 365)

//    const months = Math.floor(diff / (60 * 60 * 24 * 30))
//    diff = diff % (60 * 60 * 24 * 30)

//    const days = Math.floor(diff / (60 * 60 * 24))
//    diff = diff % (60 * 60 * 24)

//    const hours = Math.floor(diff / (60 * 60))
//    diff = diff % (60 * 60)

//    const minutes = Math.floor(diff / (60))
//    const sec = diff = diff % (60)

//   return `${years} year, ${months} months, ${days} days ${hours} hrs ${minutes} min and ${sec} sec`
// }

// console.log(takeDifference(startingDate, endingDate))


//? Ques no 47: Add or subtract n days from a given date (E.G., Add 7 days to "2025-05-01")

// const n = 20;
// const startingDate = new Date('2024-04-28T08:23:13.234Z')

// const newDateTimeStamp = startingDate.getTime() + n * 24 * 60 * 60 * 1000

// const newDate = new Date(newDateTimeStamp)

// console.log(startingDate)
// console.log(newDate)


//? Ques no 48: Calculate the user's age from their date of birth

// const usersBornDate = new Date('1993-04-28')
// const todaysDate = new Date()

// const calculateUserAge = (bornDate , currentDate) => {

//   let diff = (currentDate - bornDate) / 1000;

//   const years = Math.floor(diff / (60 * 60 * 24 * 365))
//   diff = diff % (60 * 60 * 24 * 365)

//   const months = Math.floor(diff / (60 * 60 * 24 * 30))
//   diff = diff % (60 * 60 * 24 * 30)

//   const days = Math.floor(diff / (60 * 60 * 24))
//   diff = diff % (60 * 60 * 24)

//   const hrs = Math.floor(diff / (60 * 60))
//   diff = diff % (60 * 60)

//   const min = Math.floor(diff / (60))

//   const sec = diff = Math.floor(diff % (60))

//   return `${years} Years ${months} Months ${days} Days ${hrs} Hours ${min} Minutes ${sec} Seconds`
// }

// console.log(calculateUserAge(usersBornDate, todaysDate))

// let ageYear = todaysDate.getFullYear() - usersBornDate.getFullYear()
// let month = todaysDate.getMonth() - usersBornDate.getMonth()
// let day = todaysDate.getDay() - usersBornDate.getDate()

// console.log(ageYear)
// console.log(month)
// console.log(day)

// if(month < 0 || (month === 0 && day < 0)) {
//   ageYear--;
// } else {
//   ageYear++;
// }

// console.log(ageYear)


//? Ques no 49: Write a formatDate(dateStr) function that returns a user-friendly format like jan 1, 2025. Why is it better to centralize this login in a utility?




//? Ques no 50: what are the different options and parameters available in toLocaleString and toLocaleDateString etc to format date
