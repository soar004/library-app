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
      books,
    },
  };
}
