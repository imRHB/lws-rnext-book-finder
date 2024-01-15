const starImg = "/assets/star.svg";

export default function BookRating() {
    return (
        <div className="flex items-center space-x-1">
            <img src={starImg} />
            <img src={starImg} />
            <img src={starImg} />
            <img src={starImg} />

            <span className="text-xs lg:text-sm">(4 Star)</span>
        </div>
    );
}
