// JSON text, as if it was received from a server

let rawBooksText = '{"books":[{"title":"The Great Gatsby","author":"F. Scott Fitzgerald","publicationYear":1925,"genres":["Fiction","Classics"]},{"title":"To Kill a Mockingbird","author":"Harper Lee","publicationYear":1960,"genres":["Fiction","Coming-of-Age"]}]}';

// Parse JSON text into a JavaScript object
let library = JSON.parse(rawBooksText);

// Display parsed values in browser console
console.log("Parsed Book 1 Title:", library.books[0].title);
console.log("Parsed Book 1 Author:", library.books[0].author);
console.log("Parsed Book 2 Title:", library.books[1].title);
console.log("Parsed Book 2 Genres:", library.books[1].genres);