//?

//? Practice task - 1 (a)

function wakeUpBuddy() {
  setTimeout(() => {
    console.log('Good morning , wakeUp Buddy, you are getting late for office ')
  },5000)
}

// wakeUpBuddy()


//? Practice task - 1 (b)

function delayedGreeting(name, delayTime) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
    },delayTime);
}

// delayedGreeting('Alice', 5000)

//? Practice task - 2

function tellJoke() {
  console.log("Why don't scientists trust atoms? Because they make up everything!!")
}

// const jokeInterval = setInterval(tellJoke, 2000);

// setTimeout(() => {
//     clearInterval(jokeInterval);
//   },11000);


  //? Practice task - 3

const jokesFromApi = async () => {
  const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
  const jokesData = await res.json()
  console.log(jokesData.joke)
}

// const setIntervalId = setInterval(jokesFromApi, 3000)

// setTimeout(() => {
//   clearInterval(setIntervalId)
// }, 31000) 