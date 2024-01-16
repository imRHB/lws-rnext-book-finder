import { useState } from "react";

import { BOOK_LIST } from "../../data/books";
import Header from "../Header";
import BookList from "./BookList";

export default function BookBoard() {
    const [books, setBooks] = useState(BOOK_LIST);
    const [sortOrder, setSortOrder] = useState("");

    function handleBookSearch(searchTerm) {
        const clonedBookList = [...BOOK_LIST];
        const searchedBooks = clonedBookList.filter((book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setBooks(searchedBooks);
    }

    function handleToggleFavorite(bookId) {
        const bookIndex = books.findIndex((book) => book.id === bookId);
        const clonedBookList = [...books];

        clonedBookList[bookIndex].isFavorite =
            !clonedBookList[bookIndex].isFavorite;

        setBooks(clonedBookList);
    }

    function handleSortBooks(sortOrderValue) {
        const sortedBooks = [...books].sort((a, b) => {
            switch (sortOrderValue) {
                case "name_asc":
                    return a.name.localeCompare(b.name);
                case "name_desc":
                    return b.name.localeCompare(a.name);
                case "year_asc":
                    return a.year - b.year;
                case "year_desc":
                    return b.year - a.year;
                default:
                    return [];
            }
        });

        setBooks(sortedBooks);
    }

    function handleSortOrderChange(evt) {
        const newSortOrderValue = evt.target.value;
        setSortOrder(newSortOrderValue);
        handleSortBooks(newSortOrderValue);
    }

    return (
        <main className="my-10 lg:my-14">
            <Header
                onSearch={handleBookSearch}
                sortOrder={sortOrder}
                onSortOrder={handleSortOrderChange}
            />
            <BookList books={books} onFavorite={handleToggleFavorite} />
        </main>
    );
}
