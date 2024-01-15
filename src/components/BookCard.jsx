/* eslint-disable react/prop-types */

import AddToCartButton from "./AddToCartButton";
import BookRating from "./BookRating";
import FavoriteButton from "./FavoriteButton";

const bookImg = "/assets/book.png";

export default function BookCard({ book, onFavorite }) {
    const { id, name, author, price, isFavorite, year } = book;

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
                <img className="max-w-[144px]" src={bookImg} alt={name} />
            </div>

            <div className="space-y-3">
                <h4 className="text-lg font-bold lg:text-xl truncate">
                    {name}
                </h4>
                <p className="text-xs lg:text-sm">
                    By : <span>{author}</span>{" "}
                    <span className="font-extrabold">({year})</span>
                </p>
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold lg:text-xl">${price}</h4>

                    <BookRating />
                </div>

                <div className="flex items-center gap-3 text-xs lg:text-sm">
                    <AddToCartButton />
                    <FavoriteButton
                        bookId={id}
                        isFavorite={isFavorite}
                        onFavorite={onFavorite}
                    />
                </div>
            </div>
        </div>
    );
}
