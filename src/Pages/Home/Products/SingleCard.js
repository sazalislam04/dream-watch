import React, { useContext } from "react";
import toast from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../../context/AuthProvider";
import useSeller from "../../../hook/useSeller";

const SingleCard = ({ product, setBookingData }) => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  const {
    img,
    location,
    name,
    number,
    original_price,
    price,
    seller_name,
    years,
    description,
    timestamp,
    status,
    condition,
  } = product;

  const reportToAdmin = (product) => {
    fetch("http://localhost:5000/reports", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Reported success");
        } else {
          toast.error(data.message);
        }
      });
  };

  const handleWishlist = (product) => {
    const wishlist = {
      product,
      userEmail: user.email,
    };
    fetch(`http://localhost:5000/wishlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Added Wishlist");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <section className="container">
      <div className="relative mx-auto max-w-screen-xl px-4 lg:py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <PhotoProvider
              speed={() => 800}
              easing={(type) =>
                type === 2
                  ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                  : "cubic-bezier(0.34, 1.56, 0.64, 1)"
              }
            >
              <PhotoView src={img}>
                <img
                  alt=""
                  src={img}
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </PhotoView>
            </PhotoProvider>

            <div className="grid grid-cols-2 gap-4 lg:mt-4">
              <PhotoProvider
                speed={() => 800}
                easing={(type) =>
                  type === 2
                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                }
              >
                <PhotoView src={img}>
                  <img
                    alt="Les Paul"
                    src={img}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                </PhotoView>
              </PhotoProvider>
              <PhotoProvider
                speed={() => 800}
                easing={(type) =>
                  type === 2
                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                }
              >
                <PhotoView src={img}>
                  <img
                    alt="Les Paul"
                    src={img}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>

          <div className="sticky lg:ml-4 top-0">
            <div>
              <p className="text-sm">{timestamp}</p>
            </div>
            <div className="mt-3 flex justify-between">
              <div className="max-w-[35ch]">
                <h1 className="text-2xl font-bold">{name}</h1>
                <p className="mt-0.5 text-sm">{condition} Product</p>
                <div className="mt-2 -ml-0.5 flex">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <p className="text-2xl flex flex-col items-center font-semibold">
                ${price}
                <small className="line-through text-sm -mt-2 font-medium text-gray-800">
                  ${original_price}
                </small>
              </p>
            </div>

            <details className="group relative mt-4">
              <summary className="block">
                <div>
                  <div className="prose max-w-none group-open:hidden">
                    <p>
                      {description ? description.slice(0, 200) : description}
                    </p>
                  </div>

                  <span className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                    Read More
                  </span>
                </div>
              </summary>

              <div className="prose max-w-none pb-6">
                <p>{description}</p>
              </div>
            </details>

            <div className="mt-8">
              <fieldset>
                <legend className="mb-1 text-sm font-medium">
                  What is your choose?
                </legend>

                <div className="flow-root">
                  <div className="-m-0.5 flex flex-wrap">
                    <label htmlFor="color_tt" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_tt"
                        className="peer sr-only"
                      />

                      <span
                        title="wishlist"
                        onClick={() => handleWishlist(product)}
                        className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-primary peer-checked:text-white"
                      >
                        WishList
                      </span>
                    </label>

                    <label htmlFor="color_fr" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_fr"
                        className="peer sr-only"
                      />

                      <span
                        title="report to admin"
                        onClick={() => reportToAdmin(product)}
                        className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-secondary peer-checked:text-white"
                      >
                        Report to Admin
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <fieldset className="mt-4">
                <h2 className="mb-1 text-sm font-medium">Seller Name</h2>

                <div className="flow-root">
                  <div className="-m-0.5 flex flex-wrap">
                    <label htmlFor="size_xs" className="p-0.5">
                      <span className="capitalize inline-flex items-center gap-2 text-xl">
                        {seller_name}
                        {status ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-blue-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        ) : (
                          ""
                        )}{" "}
                      </span>
                    </label>
                  </div>
                  <label htmlFor="size_xs">
                    <p className="mt-2 md:flex gap-2 items-center">
                      Contact: <span>{number},</span> <span>{location}.</span>
                    </p>
                  </label>
                  <label htmlFor="">
                    <p>Used: {years}</p>
                  </label>
                </div>
              </fieldset>

              <div className="mt-6 flex">
                {!isSeller ? (
                  <>
                    <label
                      onClick={() => setBookingData(product)}
                      htmlFor="booking-modal"
                      className="btn btn-primary"
                    >
                      Book Now
                    </label>
                  </>
                ) : (
                  <button className="btn btn-primary" disabled>
                    Not Available
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCard;
