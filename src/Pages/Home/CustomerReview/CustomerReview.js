import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const CustomerReview = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <section className="mt-14">
            <div className="container px-6 py-10 mx-auto">
              <span className="text-primary text-center text-xl flex justify-center">
                Dream Watch
              </span>
              <h1 className="text-3xl font-medium text-center text-gray-800 capitalize xl:text-4xl lg:text-3xl ">
                What clients saying
              </h1>

              <div className="flex justify-center mx-auto mt-3">
                <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-primary rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-primary rounded-full"></span>
              </div>

              <div className="flex items-start max-w-6xl mx-auto mt-10">
                <div>
                  <p className="flex items-center text-center text-gray-500 lg:mx-8">
                    Donec sollicitudin molestie malesuada. Pellentesque in ipsum
                    id orci porta dapibus. Curabitur non nulla sit amet nisl
                    tempus convallis quis ac lectus. Curabitur aliquet quam id
                    dui posuere blandit. Nulla porttitor accumsan tincidunt.
                    Vivamus suscipit tortor eget felis porttitor volutpat.
                    Pellentesque in ipsum id orci porta dapibus. Donec rutrum
                    congue leo eget malesuada. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>

                  <div className="flex flex-col items-center justify-center mt-8">
                    <img
                      className="object-cover rounded-full w-14 h-14"
                      src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div className="mt-4 mb-8 text-center">
                      <h1 className="font-semibold text-gray-800">
                        Jane Brown
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="mt-14">
            <div className="container px-6 py-10 mx-auto">
              <span className="text-primary text-center text-xl flex justify-center">
                Dream Watch
              </span>
              <h1 className="text-3xl font-medium text-center text-gray-800 capitalize xl:text-4xl lg:text-3xl ">
                What clients saying
              </h1>

              <div className="flex justify-center mx-auto mt-3">
                <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-primary rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-primary rounded-full"></span>
              </div>

              <div className="flex items-start max-w-6xl mx-auto mt-10">
                <div>
                  <p className="flex items-center text-center text-gray-500 lg:mx-8">
                    Donec sollicitudin molestie malesuada. Pellentesque in ipsum
                    id orci porta dapibus. Curabitur non nulla sit amet nisl
                    tempus convallis quis ac lectus. Curabitur aliquet quam id
                    dui posuere blandit. Nulla porttitor accumsan tincidunt.
                    Vivamus suscipit tortor eget felis porttitor volutpat.
                    Pellentesque in ipsum id orci porta dapibus. Donec rutrum
                    congue leo eget malesuada. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>

                  <div className="flex flex-col items-center justify-center mt-8">
                    <img
                      className="object-cover rounded-full w-14 h-14"
                      src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div className="mt-4 mb-8 text-center">
                      <h1 className="font-semibold text-gray-800">Mia Brown</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CustomerReview;
