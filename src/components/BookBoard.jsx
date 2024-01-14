import { useState } from "react";

import { BOOK_LIST } from "../data/books";
import BookList from "./BookList";
import Header from "./Header";

export default function BookBoard() {
    const [books, setBooks] = useState(BOOK_LIST);
    const [sortOrder, setSortOrder] = useState("name_asc");
    // name_asc name_desc year_asc year_desc

    function handleBookSearch(searchTerm) {
        const searchedBooks = books.filter((book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setBooks(searchedBooks);
    }

    function handleSortBook() {
        const sortedBookList = [...books].sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            const yearA = a.year;
            const yearB = b.year;

            if (sortOrder === "name_asc") {
                return nameA.localeCompare(nameB);
            } else if (sortOrder === "name_desc") {
                return nameB.localeCompare(nameA);
            } else if (sortOrder === "year_asc") {
                return yearA - yearB;
            } else if (sortOrder === "year_desc") {
                return yearB - yearA;
            } else {
                return [...books];
            }
        });

        return sortedBookList;
    }

    handleSortBook();

    function handleFavorite(bookId) {
        const bookIndex = books.findIndex((book) => book.id === bookId);
        const clonedBookList = [...books];

        clonedBookList[bookIndex].isFavorite =
            !clonedBookList[bookIndex].isFavorite;

        setBooks(clonedBookList);
    }

    return (
        <main className="my-10 lg:my-14">
            <Header
                onSearch={handleBookSearch}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />
            <BookList books={books} onFavorite={handleFavorite} />
        </main>
    );
}
