import { useState } from "react";
import { BOOK_LIST } from "../data/books";
import Books from "./Books";
import Header from "./Header";

export default function BookBoard() {
    const [books, setBooks] = useState(BOOK_LIST);

    function handleBookSearch(searchTerm) {
        if (!searchTerm) setBooks(BOOK_LIST);

        const searchKey = searchTerm.toLowerCase();

        const searchedBooks = books.filter((book) =>
            book.title.toLowerCase().includes(searchKey)
        );

        setBooks(searchedBooks);
    }

    return (
        <main className="my-10 lg:my-14">
            <Header onSearch={handleBookSearch} />
            <Books books={books} />
        </main>
    );
}
