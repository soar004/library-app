import { supabase } from "@/lib/supabase";

export async function getServerSideProps() {
  const { data: books, error } = await supabase
    .from("books")
    .select("*")
    .order("title", { ascending: true });

  if (error) {
    console.error("Error fetching books:", error);
    return { props: { books: [] } };
  }

  return {
    props: {
      books: books ?? [],
    },
  };
}

interface Book {
  id: number;
  title: string;
  // Add other fields as needed, e.g. author, publishedDate, etc.
}

export default function Catalog({ books }: { books: Book[] }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book Catalog</h1>
      <ul className="space-y-2">
        {books.map((book) => (
          <li key={book.id} className="border-b pb-2">
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
