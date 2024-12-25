import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../store/atom";
import jwt_decode from "jwt-decode";
import { USER_COURSE_URL } from "../../utils/constant";
import {COURSE_BY_ID} from "../../utils/constant"; 
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QZWEkKlXzYwUHy1A9VTVvQPQNb0aQdgfDrvAXuLAyvf6JJbyOvKiYUjS7W3dHoH86SbZDkB01vQpJJIYHejueqt00RyXSO2fF');

function SingleCourse() {
  const [course, setCourse] = useState({});
  const id = useParams().id;
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState("");
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    axios
      .get(`${COURSE_BY_ID}${id}`)
      .then((res) =>
        // setCourse(res.data.courses.find((course) => course.id === id))
        setCourse(res.data.course)
      )
      .catch((err) => console.error(err));
  }, []);

  // const handleClick = () => {
  //   if (token) {
  //     if (jwt_decode(token).role === "user") {
  //       axios
  //         .post(`${USER_COURSE_URL}/${id}`, null, {
  //           headers: {
  //             authorization: token,
  //           },
  //         })
  //         .then((res) => setMessage(res.data.message))
  //         .catch((err) => console.error(err));
  //     } else {
  //       setMessage("You are not authenticated to buy any course");
  //     }
  //   } else {
  //     setMessage("You are not authenticated to buy any course");
  //   }
  // };

  const handleBuyCourse = async () => {
    try {
      // Get the user ID (from the authenticated user, typically from JWT)
      const userId = 'your_user_id';  // Replace with actual user ID from context or JWT

      // Create a checkout session in the backend
      const { data } = await axios.post('http://127.0.0.1:8000/api/create-checkout-session/', {
        course_id: id,
      });

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.id,  // Session ID from backend
      });

      if (error) {
        console.error('Error redirecting to Stripe:', error);
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
    } 
  };

  console.log(course);

  return (
    <section>
      <header
        className="py-24 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${course.image_url})`,
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white text-royal-green-900s">
            {course.title}
          </h1>
          <div className="text-center">
            <strong className="text-royal-green-600 font-normal text-sm inline-block my-3">
              {course.tag}
            </strong>
            <br />
            <strong className="text-gold-900 font-semibold text-2xl inline-block">
              ₹{course.price}
            </strong>
          </div>
          {message ? (
            <h2 className="text-xl font-bold text-gold-900 mt-4 text-center">
              {message}
              <br />
              {token ? (
                <>
                  {jwt_decode(token).role === "user" ? (
                    <Link to={`/${user}/dashboard`}>Go to your dashbaord</Link>
                  ) : (
                    <Link to={`/login`}>Please login to buy course</Link>
                  )}
                </>
              ) : (
                ""
              )}
            </h2>
          ) : (
            ""
          )}
          <footer className="mt-4">
            <button
              onClick={handleBuyCourse}
              className="btn mt-4 !border-white !text-white inline-block"
            >
              Buy Course
            </button>
          </footer>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <p className=" text-royal-green-900 text-xl">{course.description}</p>
      </div>
    </section>
  );
}

export default SingleCourse;
