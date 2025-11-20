import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
// import useAxios from "../../hook/useAxios";

const CreateProduct = () => {
  const {user} = useAuth();
  // const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure()
  console.log(axiosSecure)

  const handleAProduct = (e) => {
    e.preventDefault();

    const newProductCreateFormData = {
      title: e.target.title.value,
      image: e.target.image.value,
      price_min: e.target.price_min.value,
      price_max: e.target.price_max.value,
      email: user.email
    };

    axiosSecure.post('/products', newProductCreateFormData)
    .then(data => {
      console.log(data.data)
      if(data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Product has been Created",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })

    // axios
    //   .post("http://localhost:3000/products", productCreateFormData)
    //   .then((data) => {
    //     console.log("after post data", data.data);
    //     if (data.data.insertedId) {
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "Your Product has been Created",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     }
    //   });
  };
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-center">Add New Product</h2>
      <form onSubmit={handleAProduct}>
        <fieldset className="fieldset">
          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            className="input w-full"
            // defaultValue={user?.displayName}
          />
          <label className="label">Image</label>
          <input
            type="text"
            name="image"
            className="input w-full"
            // defaultValue={user?.email}
          />

          <label className="label">Min Price</label>
          <input
            type="text"
            name="price_min"
            className="input w-full"
            placeholder="Your Min Price"
          />
          <label className="label">Max Price</label>
          <input
            type="text"
            name="price_max"
            className="input w-full"
            placeholder="Your Max Price"
          />
          <button className="btn btn-primary mt-4">Add a Product</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateProduct;
