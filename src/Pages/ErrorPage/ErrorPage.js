import Lottie from "lottie-react";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import animation from "../../assets/animationFile/lottie.json";
import useSetTitle from "../../hook/useSetTitle";
const ErrorPage = () => {
  const error = useRouteError();
  useSetTitle("Error Page");
  return (
    <section className="">
      <div className="container text-center sm:max-w-md">
        <Lottie className="-mb-20" animationData={animation} loop={true} />

        <p className="text-6xl">
          <i>{error.statusText || error.message}</i>
        </p>
        <p className="text-xl">Sorry, an unexpected error has occurred.</p>
        <Link rel="noopener noreferrer" to="/" className="btn mt-4 btn-primary">
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
