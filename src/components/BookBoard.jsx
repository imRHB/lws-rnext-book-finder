import { useState } from "react";

import { BOOK_LIST } from "../data/books";
import Books from "./Books";
import Header from "./Header";

export default function BookBoard() {
    const [books, setBooks] = useState(BOOK_LIST);

    function handleBookSearch(searchTerm) {
        const searchKey = searchTerm.toLowerCase();

        const searchedBooks = books.filter((book) =>
            book.title.toLowerCase().includes(searchKey)
        );

        setBooks(searchedBooks);
    }

    function handleFavorite(bookId) {
        const bookIndex = books.findIndex((book) => book.id === bookId);
        const clonedBookList = [...books];

        clonedBookList[bookIndex].isFavorite =
            !clonedBookList[bookIndex].isFavorite;

        setBooks(clonedBookList);
    }

    return (
        <main className="my-10 lg:my-14">
            <Header onSearch={handleBookSearch} />
            <Books books={books} onFavorite={handleFavorite} />
        </main>
    );
}
