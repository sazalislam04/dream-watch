import React from "react";

const NewsLetter = () => {
  return (
    <section
      className="py-20 mt-20 bg-base-200"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-medium capitalize tracking-tight text-gray-800 xl:text-4xl">
          Join us and get the update from anywhere
        </h2>

        <div className="mt-8 lg:mt-0">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
            <input
              id="email"
              type="text"
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2  focus:border-blue-400 d focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email Address"
            />

            <button className="btn btn-primary">Subscribe Now</button>
          </div>

          <p className="mt-3 text-sm text-gray-800">
            Attention! Offer expires in 30 days. Make sure not to miss this
            opportunity
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
