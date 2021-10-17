/* Storing user's device details in a variable*/
let details = navigator.userAgent;

/* Creating a regular expression 
containing some mobile devices keywords 
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;

/* Using test() method to search regexp in details
it returns boolean value*/
let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
 document.getElementById("myImageId").src="img2/untitled-4.jpg";
} 
// else {
//     document.write("You are using Desktop");
// }
function openNav() {
 
 if (isMobileDevice) {
   document.getElementById("myNav").style.width = "100%";
 } else {
   document.getElementById("myNav").style.width = "20%";
 }
}

function closeNav() {
 document.getElementById("myNav").style.width = "0%";
}