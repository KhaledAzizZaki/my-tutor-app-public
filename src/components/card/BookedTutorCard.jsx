import React, { use, useState } from "react";
import { AuthContext } from "../../provider/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BookedTutorCard = ({ tutor }) => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  // console.log(tutor);
  const { name, language, price, review, tutorEmail, tutorId, reviewed } =
    tutor;

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
        console.log(data.data);
        const isReview = data?.data?.review;
        //
        setTotalReview(isReview);
        //
        setReviewCount((prev) => (isReview ? prev + 1 : prev - 1));
      });
  };

  return (
    <div className="m-5 border p-5">
      <h1>{name}</h1>
      <h1>{language}</h1>
      <h1>{price}</h1>
      <p>{reviewCount}</p>
      <button onClick={handleReview} className="btn">
        {totalReview ? "Reviewed" : "Review"}
      </button>
    </div>
  );
};

export default BookedTutorCard;
