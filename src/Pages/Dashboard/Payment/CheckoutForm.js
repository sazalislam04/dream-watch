import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const CheckoutForm = ({ bookings }) => {
  const { _id, email, img, name, price, productName } = bookings;
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: name,
      email: email,
    },
  });

  useEffect(() => {
    fetch("https://dream-watch-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("watch-token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handlePayment = async (data) => {
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      setError("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (confirmError) {
      setError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      setSuccess("Congrats! Your Payment Completed");
      setTransactionId(paymentIntent.id);

      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
        name,
        productName,
        phone: data.phone,
        area: data.area,
        postalCode: data.postalCode,
        productId: bookings.productId,
      };
      fetch("https://dream-watch-server.vercel.app/payment", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("watch-token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire(
              `Congrats! Your Payment Successed ${success}, ${transactionId}`
            );
          }
        });
    }
    setProcessing(false);
  };

  return (
    <section>
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50 py-12 md:py-24">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <div className="flex items-center">
                <img src={img} className="h-10 w-10 rounded-full" alt="" />
                <h2 className="ml-4 font-medium">{productName}</h2>
              </div>

              <div className="mt-8">
                <p className="text-2xl font-medium tracking-tight">${price}</p>
                <p className="mt-1 text-sm text-gray-500">
                  For the purchase of
                </p>
              </div>
            </div>
          </div>

          <div className="bg-base-100 py-12 md:py-24">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <form
                onSubmit={handleSubmit(handlePayment)}
                className="grid grid-cols-6 gap-4"
              >
                <div className="col-span-6">
                  <label
                    className="mb-1 block text-sm text-gray-800"
                    htmlFor="name"
                  >
                    Your Name
                  </label>

                  <input
                    className="w-full rounded-lg focus:outline-primary p-2.5 text-sm shadow-sm"
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-1">{errors.name?.message}</p>
                  )}
                </div>
                <div className="col-span-6">
                  <label
                    className="mb-1 block text-sm text-gray-800"
                    htmlFor="email"
                  >
                    Email
                  </label>

                  <input
                    className="w-full rounded-lg p-2.5 text-sm shadow-sm focus:outline-primary"
                    type="email"
                    id="email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1">{errors.email?.message}</p>
                  )}
                </div>

                <div className="col-span-6">
                  <label
                    className="mb-1 block text-sm text-gray-800"
                    htmlFor="phone"
                  >
                    Phone
                  </label>

                  <input
                    className="w-full rounded-lg focus:outline-primary p-2.5 text-sm shadow-sm"
                    type="tel"
                    id="phone"
                    {...register("phone", { required: "Phone is required" })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 mt-1">{errors.phone?.message}</p>
                  )}
                </div>

                <fieldset className="col-span-6">
                  <legend className="mb-1 block text-sm text-gray-600">
                    Card Details
                  </legend>
                  <CardElement
                    className="border p-3 rounded-lg"
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#424770",
                          "::placeholder": {
                            color: "#aab7c4",
                          },
                        },
                        invalid: {
                          color: "#9e2146",
                        },
                      },
                    }}
                  />
                </fieldset>

                <fieldset className="col-span-6">
                  <legend className="mb-1 block text-sm text-gray-600">
                    Billing Address
                  </legend>

                  <div className="-space-y-px rounded-lg bg-white shadow-sm">
                    <div>
                      <label className="sr-only" htmlFor="country">
                        Country
                      </label>

                      <select
                        className="relative w-full rounded-t-lg border focus:outline-primary p-2.5 text-sm focus:z-10"
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        {...register("area", {
                          required: "Area is required",
                        })}
                      >
                        <option>Select Your Area</option>
                        <option>Dhaka</option>
                        <option>Sylhet</option>
                        <option>Khulna</option>
                        <option>Chittagong</option>
                      </select>
                      {errors.country && (
                        <p className="text-red-500 mt-1">
                          {errors.area?.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="postal-code">
                        ZIP/Post Code
                      </label>

                      <input
                        className="relative w-full border rounded-b-lg focus:outline-primary p-2.5 text-sm placeholder-gray-400 focus:z-10"
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        placeholder="ZIP/Post Code"
                        {...register("postalCode", {
                          required: "Postal Code is required",
                        })}
                      />
                      {errors.postalCode && (
                        <p className="text-red-500 mt-1">
                          {errors.postalCode?.message}
                        </p>
                      )}
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-6">
                  <button
                    className="block w-full rounded-lg btn btn-primary p-2.5"
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                  >
                    Pay Now
                  </button>
                </div>
              </form>
              <p className="text-red-500">{error}</p>
              {success && (
                <div>
                  <p className="text-green-500">{success}</p>
                  <p>
                    Your TransactionId:{" "}
                    <span className="font-bold">{transactionId}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
