let myFullName = "Bill Farmer"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"

myFullName = "Gabriel Estrella";

document.querySelector(".header").innerHTML = myFullName + "'s Lab 4\n";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name

var paragraph1 = document.createElement("Paragraph One");
var paragraph2 = document.createElement("Paragraph Two");
var p1_text = document.createTextNode("The first new paragraph. \n");
var p2_text = document.createTextNode("The second new paragraph. \n");

paragraph1.appendChild(p1_text);
paragraph2.appendChild(p2_text);

var contentSection = document.querySelector(".content");
contentSection.appendChild(paragraph1);
contentSection.appendChild(paragraph2);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).

var nameLength = "My name has " + myFullName.length + " characters.";
paragraph1.append(nameLength);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name

var thirdCharacter = myFullName.charAt(2);

paragraph2.append(thirdCharacter);

// 6 Add a new line to your second paragraph

paragraph2.append("\n");

// 7 Return the final three characters of your last name to that new line

var finalThreeCharacters = myFullName.substring(myFullName.length - 3, myFullName.length);
paragraph2.append(finalThreeCharacters);

// 8 Substring your first and last name into two separate variables

let firstName = myFullName.substring(0,6);
let lastName = myFullName.substring(8,15);

// 9 Add the total length of your first and last names together

let totalNameLength = firstName.length + lastName.length;

// 10 Display that total next to your name in your header

document.querySelector(".header").append("The length of my name is: " + totalNameLength);