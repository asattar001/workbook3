"use strict";

function parseAndDisplayName(fullName) {
  let space = fullName.indexOf(" ");
  let firstName = fullName.substring(0, space);
  let lastName = fullName.substring(space);
    let result = `Name: ${fullName}
First name: ${firstName}
Last Name: ${lastName}`
    
    console.log(result)

//   console.log("Name: ", fullName);
//   console.log("First name: ", firstName);
//   console.log("Last name: ", lastName);
}

parseAndDisplayName("Jane Doe")
// parseAndDisplayName("Jane Doe")
// parseAndDisplayName("Brenda Kaye")