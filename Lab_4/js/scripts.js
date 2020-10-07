let myFullName = "Bill Farmer"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"

myFullName = "Gabriel Estrella";

let myHeading = document.querySelector('.header');

myHeading.textContent = myFullName +  "'s Lab 4";


// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name

var paragraph1 = document.createElement("Paragraph 1");
var paragraph2 = document.createElement("Paragraph 2");
var p1_text = document.createTextNode("The first new paragraph. \n");
var p2_text = document.createTextNode("The second new paragraph. \n");

paragraph1.appendChild(p1_text);
paragraph2.appendChild(p2_text);

var contentSection = document.querySelector(".content");
contentSection.appendChild(paragraph1);
contentSection.appendChild(paragraph2);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).



// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name



// 6 Add a new line to your second paragraph



// 7 Return the final three characters of your last name to that new line



// 8 Substring your first and last name into two separate variables



// 9 Add the total length of your first and last names together



// 10 Display that total next to your name in your header

