import { Database } from "firebase/database";

const addBook = (book) => {
  const bookRef = Database.ref('books').push(); // Generate a unique key for the book
  const bookKey = bookRef.key;

  bookRef.set({
    ...book,
    id: '1',
    quantity:'0'
  })
    .then(() => {
      console.log('Book added successfully');
    })
    .catch((error) => {
      console.error('Failed to add book:', error);
    });
};
