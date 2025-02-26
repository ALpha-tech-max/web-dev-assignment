// Array of names
var names = ["John", "Jane", "Mark", "Jill", "Paul", "George"];

// Loop through the names array
for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase(); // Get the first letter and convert to lowercase

    // Check if the first letter is 'j'
    if (firstLetter === 'j') {
        console.log("Goodbye " + names[i]);
    } else {
        console.log("Hello " + names[i]);
    }
}