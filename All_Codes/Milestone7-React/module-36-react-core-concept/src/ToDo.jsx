// export default function ToDo({task, isDone}) {
//   return (
//     <ul>
//       <li>Task: {task}</li>
//       {/* <li>Complete: {isDone}</li> */}
//     </ul>
//   )
// }

// export default function ToDo({task, isDone}) {
//   if(isDone) {
//     return <li>Done: {task}</li>
//   } else {
//     return <li>Pending: {task}</li>
//   }
// }

// export default function ToDo({task, isDone, time=0}) {
//   if(isDone) {
//     return <li>Done: {task} Duration: {time}</li>
//   }
//   return <li>Pending: {task} Duration: {time}</li>
// }

// export default function Vote({name, age}) {
//   if(age >= 18) {
//     return <li>{name} can vote now bcz he is {age}</li>
//   }
//   return <li>{name} cannot vote now bcz he is {age} </li>
// }

//? conditional rendering 3 ternary

// export default function ToDo({ task, isDone, time = 0 }) {
//   return isDone ? (
//     <li>
//       {task} is done and Duration: {time}
//     </li>
//   ) : (
//     <li>
//       {task} is not done yet and Duration: {time}
//     </li>
//   );
// }

//? conditional rendering 4 && operator

// export default function ToDo({task, isDone, time=0}) {
//   return isDone && <li>Done Task: {task} and time: {time}</li>
// }
//? conditional rendering 5 || operator

// export default function ToDo({task, isDone, time=0}) {
//   return isDone || <li>Not Done Task: {task} and time: {time}</li>
// }


// ? conditional rendering 6 use variable
// export default function ToDo({task, isDone, time}) {
//   // const displayTime = time ? time : 100;
//   let listItem;
//   if(isDone) {
//     listItem = <li>Done: {task} time: {time ? 'I am Done' : 'not done yet'}</li>
//   } else {
//     listItem = <li>Pending: {task} time: {time}</li>
//   }
//   return listItem;
// }

// //? conditional rendering 7 using null
// export default function ToDo({task, isDone, time=0}) {
//   if(isDone) {
//     return null;
//   } else {
//     return <li>Pending: {task} time: {time}</li>
//   }
// }

//? conditional rendering 8 using ternary inside of return
// export default function ToDo({task, isDone, time=0}) {
//   return (
//     <li>
//     {isDone ? task + time + '✅' : task + '❌'}
//     </li>
//   )
// }