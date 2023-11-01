import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReview = () => {
    return (
        <section id="customerreviews" className="max-container">
            <h3 className="font-palanquin text-center font-bold text-4xl">
                What Our<span className="text-coral-red "> Customers </span>Say?
            </h3>
            <p className="info-text max-w-lg mt-4 m-auto text-center">
                {" "}
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.
            </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.customerName}
                        imgURL={review.imgURL}
                        name={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </section>
    );
};

export default CustomerReview;
