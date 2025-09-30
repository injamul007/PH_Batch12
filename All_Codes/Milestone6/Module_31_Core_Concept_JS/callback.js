// //? callback function


// function pakhiBhai(callMeBack, patro, patri) {
//   console.log('value of patro', patro)
//   console.log('value of patri', patri)
//   console.log('callMeBack parameter', callMeBack)
//   if(patri) {
//     // console.log(callMeBack)
//     callMeBack(patro);
//   }
// }

// pakhiBhai(callSomeOne,'Jack','Alice');


// function callSomeOne(person) {
//   console.log('Calling', person)
// }

// // callSomeOne('jodu');


// function pakhiBhai(callMeBack, patro, patri) {
//   if(patri) {
//     callMeBack(patro)
//   } else if (patro) {
//     callMeBack(patri)
//   } else {
//     console.log("Nothing found yet")
//   }
// }

// pakhiBhai(callSomeOne, 'Roton', 'Ratri')

// function callSomeOne(person) {
//   console.log(`Calling ${person} that we got Someone for you`)
// }


const pakhiBhai = (callMeBack, patro, patri) => {
  if(patri) {
    callMeBack(patro)
  }
}

const callSomeOne = (person) => console.log(`Calling ${person} we found someone for you`)

pakhiBhai(callSomeOne, 'kalachan', 'sonamoni')