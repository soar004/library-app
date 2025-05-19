type Book = {
  id: string | number;
  title: string;
  // add other fields as needed
};

export default function Catalog({ books }: { books: Book[] }) {
  return (
    <div>
      <h1>Book Catalog</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
