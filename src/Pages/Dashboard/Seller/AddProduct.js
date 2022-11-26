import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const AddProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgHostKey = process.env.REACT_APP_imgbb;
  const { user } = useContext(AuthContext);
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
          resale_price: data.resale_price,
          seller_name: data.seller_name,
          years: data.years,
          description: data.description,
          timestamp: new Date().toLocaleString(),
          email: user.email,
          userName: user.displayName,
          isAdvertise: false,
        };
        storeProductData(product);
      });
  };

  const storeProductData = (product) => {
    fetch(`http://localhost:5000/category-products?email=${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Added Success");
          navigate("/dashboard/myproducts");
        }
      });
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-4xl">Add a Product</h1>

      <div className="card flex-shrink-0 w-full mx-auto mt-10 lg:max-w-2xl shadow-2xl bg-base-100">
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              placeholder="Resale price"
              className="input input-bordered"
              {...register("resale_price", { required: "Price is required" })}
            />
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <select
              {...register("location", { required: "Location is required" })}
              className="select select-bordered w-full"
            >
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
