/* eslint-disable react/prop-types */

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import AddToCartButton from "./AddToCartButton";

export default function BookCard({ book, onFavorite }) {
    const { id, title, author, price, isFavorite, year } = book;

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
                <img
                    className="max-w-[144px]"
                    src="./assets/book.png"
                    alt={title}
                />
            </div>

            <div className="space-y-3">
                <h4 className="text-lg font-bold lg:text-xl truncate">
                    {title}
                </h4>
                <p className="text-xs lg:text-sm">
                    By : <span>{author}</span> <span>({year})</span>
                </p>
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold lg:text-xl">${price}</h4>

                    <div className="flex items-center space-x-1">
                        <img src="./assets/star.svg" />
                        <img src="./assets/star.svg" />
                        <img src="./assets/star.svg" />
                        <img src="./assets/star.svg" />
                        <span className="text-xs lg:text-sm">(4 Star)</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-xs lg:text-sm">
                    <AddToCartButton />
                    <button
                        className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md py-1.5 transition-all lg:py-1.5 ${
                            isFavorite
                                ? "bg-[#DC2954]/[14%] text-[#DC2954] hover:bg-[#DC2954]/[24%]"
                                : "bg-[#1C4336]/[14%] text-[#1C4336] hover:bg-[#1C4336]/[24%]"
                        }`}
                        onClick={() => onFavorite(id)}
                    >
                        {isFavorite ? (
                            <AiFillHeart color="#DC2954" />
                        ) : (
                            <AiOutlineHeart />
                        )}
                        Favourite
                    </button>
                </div>
            </div>
        </div>
    );
}
