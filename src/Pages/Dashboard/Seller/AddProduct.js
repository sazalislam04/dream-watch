import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import ButtonLoading from "../../../Loading/ButtonLoading";
const AddProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgHostKey = process.env.REACT_APP_imgbb;
  const { user, loading, logOut } = useContext(AuthContext);
  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const product = {
          img: imageData.data.display_url,
          category_name: data.category_name,
          location: data.location,
          name: data.name,
          number: data.number,
          original_price: data.original_price,
          price: data.price,
          seller_name: data.seller_name,
          years: data.years,
          description: data.description,
          timestamp: new Date().toLocaleString(),
          email: user.email,
          userName: user.displayName,
          isAdvertise: false,
          available: true,
          condition: data.condition,
        };
        storeProductData(product);
      });
  };

  const storeProductData = (product) => {
    fetch(
      `https://dream-watch-server.vercel.app/products?email=${user?.email}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("watch-token")}`,
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Added Success");
          navigate("/dashboard/myproducts");
        }
      });
  };

  return (
    <div>
      <h1 className="text-center mt-6 text-4xl">Add a Product</h1>

      <div className="card flex-shrink-0 w-full mx-auto mt-8 mb-8 lg:max-w-2xl shadow bg-base-100">
        <form onSubmit={handleSubmit(handleAddProduct)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="product name"
              className="input input-bordered"
              {...register("name", { required: "Product Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 mt-1">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              placeholder="Resale price"
              className="input input-bordered"
              {...register("price", { required: "Price is required" })}
            />
            {errors.price && (
              <p className="text-red-500 mt-1">{errors.price?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              type="text"
              placeholder="Original price"
              className="input input-bordered"
              {...register("original_price", { required: "Price is required" })}
            />
            {errors.original_price && (
              <p className="text-red-500 mt-1">
                {errors.original_price?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Years of use</span>
            </label>
            <input
              type="text"
              placeholder="Years of use"
              className="input input-bordered"
              {...register("years", { required: "Year is required" })}
            />
            {errors.years && (
              <p className="text-red-500 mt-1">{errors.years?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              placeholder="Seller Name"
              className="input input-bordered"
              {...register("seller_name", {
                required: "Seller Name is required",
              })}
            />
            {errors.seller_name && (
              <p className="text-red-500 mt-1">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              type="text"
              placeholder="mobile number"
              className="input input-bordered"
              {...register("number", { required: "Phone Number is required" })}
            />
            {errors.number && (
              <p className="text-red-500 mt-1">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <select
              {...register("location", { required: "Location is required" })}
              className="select select-bordered w-full"
            >
              {errors.location && (
                <p className="text-red-500 mt-1">{errors.location?.message}</p>
              )}
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Sylhet</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Category</span>
            </label>
            <select
              {...register("category_name", {
                required: "Product Category is required",
              })}
              className="select select-bordered w-full"
            >
              <option>Classic Watches</option>
              <option>Minimal Watches</option>
              <option>Modern Watches</option>
            </select>
            {errors.category_name && (
              <p className="text-red-500 mt-1">
                {errors.category_name?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Condition Type</span>
            </label>
            <select
              {...register("condition", {
                required: "condition is required",
              })}
              className="select select-bordered w-full"
            >
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
            {errors.condition && (
              <p className="text-red-500 mt-1">{errors.condition?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea
              {...register("description", {
                required: "Product Description is required",
              })}
              className="textarea textarea-bordered"
              placeholder="Product description"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 mt-1">{errors.description?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>

            <input
              {...register("image", {
                required: "Product image is required",
              })}
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full"
              placeholder="Product image"
            />
            {errors.image && (
              <p className="text-red-500 mt-1">{errors.image?.message}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">
              {loading ? <ButtonLoading /> : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
