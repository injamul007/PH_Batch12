function totalFine(fare) {
  // You have to write your code here
  if (typeof fare !== 'number' || fare <= 0) {
    return "Invalid";
  };
  const surCharge = fare * (20 / 100);
  const extraServiceCharge = 30;
  const totalFineAmount = fare + surCharge + extraServiceCharge;
  return totalFineAmount;
}


function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== 'string') {
    return "Invalid";
  };
  const removeSpaceFromString = str.split(' ').join('');
  const charactersInCapital = removeSpaceFromString.toUpperCase();
  return charactersInCapital;
}


function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 !== 'object' || typeof player2 !== 'object') {
    return "Invalid";
  };
  if ((player1.foul + player1.cardY + player1.cardR) < (player2.foul + player2.cardY + player2.cardR)) {
    return player1.name;
  } else if ((player2.foul + player2.cardY + player2.cardR) < (player1.foul + player1.cardY + player1.cardR)) {
    return player2.name;
  }else if ((player1.foul + player1.cardY + player1.cardR) === (player2.foul + player2.cardY + player2.cardR)) {
    return "Tie";
  }
}


function isSame(arr1, arr2) {
  // You have to write your code here
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return "Invalid";
  };
  if (arr1.length !== arr2.length) {
    return false;
  };
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


function resultReport(marks) {
  // You have to write your code here
  if (Array.isArray(marks) !== true) {
    return "Invalid";
  };
  let sumOfMarks = 0;
  let passSub = 0;
  let failSub = 0;
  for (const mark of marks) {
    sumOfMarks += mark;
    if(mark >= 40) {
      passSub++;
    } else {
      failSub++;
    }
  };
  let finalScore = Math.round(sumOfMarks / marks.length);
  if (marks.length === 0) {
    finalScore = 0;
  };
  const object = {finalScore: finalScore, pass: passSub, fail: failSub};
  return object;
}