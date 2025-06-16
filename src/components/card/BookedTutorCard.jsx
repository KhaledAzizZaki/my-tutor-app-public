import React, { use, useState } from "react";
import { AuthContext } from "../../provider/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BookedTutorCard = ({ tutor }) => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  // console.log(tutor);
  const {
    name,
    language,
    price,
    review,
    tutorEmail,
    tutorId,
    reviewed,
    image,
  } = tutor;

  const [totalReview, setTotalReview] = useState(
    reviewed?.includes(user.email)
  );
  const [reviewCount, setReviewCount] = useState(review);
  // console.log(totalReview);
  // console.log(tutorId);

  // console.log(user.email);
  // console.log(tutorEmail);

  const handleReview = () => {
    if (user.email === tutorEmail) {
      return alert("Your Tutor can not add review");
    }

    axiosSecure
      .patch(`/review/${tutorId}`, { email: user?.email })
      .then((data) => {
        // console.log(data.data);
        const isReview = data?.data?.review;
        //
        setTotalReview(isReview);
        //
        setReviewCount((prev) => (isReview ? prev + 1 : prev - 1));
      });
  };

  return (
    <div className="m-5 bg-blue-800 p-5 sm:flex gap-5 dark:bg-gray-700">
      <img src={image} alt="" className="h-[200px] w-[200px] object-cover" />
      <div className="flex-1 pt-3 text-white ">
        <h1 className="font-medium text-xl">Name: {name}</h1>
        <p className="py-3">Language: {language}</p>
        <p>Price: {price}</p>
        <p className="py-3">Review: {reviewCount}</p>
        <button
          onClick={handleReview}
          className="border  px-5 py-2 hover:bg-white hover:text-blue-600"
        >
          {totalReview ? "Reviewed" : "Review"}
        </button>
      </div>
    </div>
  );
};

export default BookedTutorCard;
