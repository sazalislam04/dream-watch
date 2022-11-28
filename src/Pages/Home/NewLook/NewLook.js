import React from "react";
import look from "../../../assets/img/look.jpg";
const NewLook = () => {
  return (
    <div className="py-2 lg:py-10">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div
              className="lg:max-w-lg lg:text-left text-center"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 className="text-3xl font-medium text-gray-700 lg:text-5xl">
                A New Look
              </h2>
              <h2 className="text-3xl font-medium text-gray-700 lg:text-5xl">
                New Style For You !
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed
                porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia
                in, elementum id enim.
              </p>
            </div>
          </div>

          <div
            className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
            data-aos="zoom-in"
          >
            <img
              className="w-full h-full rounded lg:max-w-2xl"
              src={look}
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLook;
