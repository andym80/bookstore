import Books from './Book';
import Form from './Form';

const BooksList = () => {
  const Book = [
    {
      id: '1', title: 'The hunger games', author: 'Suzanne Collins', category: 'Action',
    },
    {
      id: '2', title: 'Dune', author: 'Frank Herbert', category: 'Science Fiction',
    },
    {
      id: '3', title: 'Capital in the Twenty-first Century', author: 'Suzanne Collins', category: 'Economy',
    },
  ];

  return (
    <div>
      {Book.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </div>
  );
};

export default Books;
