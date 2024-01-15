/* eslint-disable react/prop-types */

import BookCard from "./BookCard";

export default function BookList({ books, onFavorite }) {
    return (
        <>
            {books.length <= 0 ? (
                <div className="text-center py-12">
                    <h3 className="text-3xl font-extrabold text-[#DC2954]">
                        No books found!
                    </h3>
                    <p>Try searching with different keywords.</p>
                </div>
            ) : (
                <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {books?.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                            onFavorite={onFavorite}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
