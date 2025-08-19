//? Problem-2

function validContact(contact) {
  // You have to write your code here
  if (typeof contact !== "string") {
    return "Invalid";
  }

  if (
    contact.length === 11 &&
    contact.startsWith("01") &&
    !contact.includes(" ")
  ) {
    return true;
  }
  return false;
}

console.log(validContact("01819234567"));
console.log(validContact("0181923 456"));
console.log(validContact("018192345679"));
console.log(validContact(["01987654321"]));
console.log(validContact("01345678900"));
console.log(validContact("02145678900"));
console.log(validContact(true));