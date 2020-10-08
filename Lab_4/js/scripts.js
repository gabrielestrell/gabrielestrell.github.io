let myFullName = "Bill Farmer"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"

myFullName = "Gabriel Estrella";

document.querySelector(".header").innerHTML = myFullName + "'s Lab 4\n";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name

let paragraph1 = document.createElement("P");
let paragraph2 = document.createElement("P");
let p1_text = document.createTextNode("");
let p2_text = document.createTextNode("");

paragraph1.className = "content1";
paragraph2.className = "content2";

paragraph1.appendChild(p1_text);
paragraph2.appendChild(p2_text);

let contentSection = document.querySelector(".content");
contentSection.appendChild(paragraph1);
contentSection.appendChild(paragraph2);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).

let nameLength = "My name has " + myFullName.length + " characters.";
paragraph1.append(nameLength);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name

let thirdCharacter = myFullName.charAt(2).toUpperCase();

paragraph2.append("The third character of my first name is: " + thirdCharacter + "\n");

// 6 Add a new line to your second paragraph

paragraph2.append("\n");

// 7 Return the final three characters of your last name to that new line

let finalThreeCharacters = myFullName.substring(myFullName.length - 3, myFullName.length);
paragraph2.append("The final three characters of my last name are: " + finalThreeCharacters);

// 8 Substring your first and last name into two separate variables

let firstName = myFullName.substring(0,6);
let lastName = myFullName.substring(8,15);

// 9 Add the total length of your first and last names together

let totalNameLength = firstName.length + lastName.length;

// 10 Display that total next to your name in your header

document.querySelector(".header").append("The length of my name is: " + totalNameLength);