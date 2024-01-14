/* eslint-disable react/prop-types */

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function FavoriteButton({ isFavorite = false }) {
    return (
        <button
            className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md py-1.5 transition-all lg:py-1.5 ${
                isFavorite
                    ? "bg-[#DC2954]/[14%] text-[#DC2954] hover:bg-[#DC2954]/[24%]"
                    : "bg-[#1C4336]/[14%] text-[#1C4336] hover:bg-[#1C4336]/[24%]"
            }`}
        >
            {isFavorite ? <AiFillHeart color="#DC2954" /> : <AiOutlineHeart />}
            Favourite
        </button>
    );
}
