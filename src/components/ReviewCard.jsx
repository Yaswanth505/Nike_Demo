import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, name, rating, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img
                src={imgURL}
                alt={name}
                className="object-cover rounded-full w-[120px] h[120px]"
            />
            <p className="mt-6 text-center info-text max-w-sm">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img
                    src={star}
                    height={24}
                    width={24}
                    className="m-0 object-contain"
                />
                <p className="text-xl font-montserrat text-slate-gray">
                    {rating}
                </p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
                {name}
            </h3>
        </div>
    );
};

export default ReviewCard;
