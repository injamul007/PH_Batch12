import React, { useEffect, useState } from "react";
import { use } from "react";
import { useRef } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from 'sweetalert2';
import  axios  from 'axios';

const ProductDetails = () => {
  const productDetails = useLoaderData();
  const bidModalRef = useRef(null);
  const { user, loading } = use(AuthContext);
  const [bids, setBids] = useState([]);
  
  const {
    _id: productId,
    title,
    status,
    category,
    condition,
    usage,
    created_at,
    description,
    image,
    location,
    price_max,
    price_min,
    seller_name,
    seller_contact,
  } = productDetails || {};
  
  // useEffect(()=>{
  //   fetch(`http://localhost:3000/products/bids/${productId}`, {
  //     headers : {
  //       authorization: `Bearer ${user.accessToken}`
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     setBids(data);
  //   });
  // },[productId,user]);

  useEffect(()=>{
    axios.get(`http://localhost:3000/products/bids/${productId}`)
    .then(data => {
      setBids(data.data);
    })
  },[productId]);
  
  if (loading)
    return (
  <div className="flex justify-center items-center min-h-[50vh]">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
    

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;
    const bidPriceInNum = Number(bid);

    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      buyer_image: user?.photoURL,
      bid_price: bidPriceInNum,
      status: status,
    };

    //? send bids data to server
    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidModalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Bid has been placed",
            showConfirmButton: false,
            timer: 1500,
          });
          newBid._id = data.insertedId
          const newBids = [...bids, newBid].sort((a,b)=>b.bid_price - a.bid_price)
          setBids(newBids);
        }
      });
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to={`/home`}
          className="inline-flex items-center text-sm text-sky-700 font-medium mb-4"
        >
          ← Back To Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column: Image + Description */}
          <div className="lg:col-span-4 space-y-6">
            <div className="w-full shadow-md" />
            <img src={image} className="rounded-md" alt="" />
            <div className="bg-white rounded-md shadow p-4">
              <h3 className="text-sm font-semibold text-gray-600">
                Product Description
              </h3>

              <div className="mt-3 text-xs text-gray-500 grid grid-cols-2 gap-2">
                <div>
                  <div className="text-purple-700 font-medium">Condition :</div>
                  <div className="text-gray-700 font-medium">{condition}</div>
                </div>
                <div>
                  <div className="text-purple-700 font-medium">
                    Usage Time :
                  </div>
                  <div className="text-gray-700 font-medium">{usage}</div>
                </div>
              </div>

              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Right column: Main product card + seller + bids */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-md shadow p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">
                    {title}
                  </h1>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                      {category}
                    </span>
                  </div>
                </div>

                <div className="w-56">
                  <div className="bg-gray-50 rounded-md p-4 shadow-inner">
                    <div className="text-green-600 font-bold">
                      ${price_min} - ${price_max}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Price starts from
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-sm font-semibold text-gray-600">
                    Product Details
                  </h4>
                  <div className="mt-2 text-xs text-gray-500">
                    <div>Product ID: {productId}</div>
                    <div className="mt-1">Posted: {created_at}</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-sm font-semibold text-gray-600">
                    Seller Information
                  </h4>
                  <div className="mt-3 flex items-start gap-3">
                    <div className="h-12 w-12 bg-gray-200 rounded-full" />
                    <div>
                      <div className="font-medium">{seller_name}</div>
                      <div className="text-xs text-gray-500">
                        Contact: {seller_contact}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Location: {location}
                      </div>
                      <div className="mt-2 inline-block text-xs px-2 py-1 rounded">
                        Status:{" "}
                        <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded">
                          {status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={handleBidModalOpen}
                      className="mt-4 w-full text-white font-semibold py-2 rounded-md bg-linear-to-r from-violet-500 to-fuchsia-500 cursor-pointer"
                    >
                      I Want Buy This Product
                    </button>

                    {/* //? Modal */}
                    <dialog
                      ref={bidModalRef}
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-center text-lg">
                          Give the best Offer!
                        </h3>
                        <p className="py-2 text-center">
                          Offer something seller can not resist
                        </p>
                        <form onSubmit={handleBidSubmit}>
                          <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input
                              type="text"
                              name="name"
                              className="input w-full"
                              readOnly
                              defaultValue={user?.displayName}
                            />
                            <label className="label">Email</label>
                            <input
                              type="email"
                              name="email"
                              className="input w-full"
                              readOnly
                              defaultValue={user?.email}
                            />
                            {/* Bid Amount */}
                            <label className="label">Bid</label>
                            <input
                              type="text"
                              name="bid"
                              className="input w-full"
                              placeholder="Your Bid Amount"
                            />
                            <button className="btn btn-primary mt-4">
                              Place Your Bid
                            </button>
                          </fieldset>
                        </form>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Cancel</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>

            {/* Bids card */}
            <div className="relative">
              <div className="absolute -top-10 left-0 text-3xl font-extrabold text-gray-200 opacity-40 select-none">
                Only Visible to Owner
              </div>

              <div className="bg-white rounded-md shadow p-6">
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Bids For This Products:{" "}
                      <span className="text-primary">{bids.length}</span>
                    </h2>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse">
                    <thead>
                      <tr className="text-xs text-gray-500 text-left">
                        <th className="py-3 pr-4">SL No</th>
                        <th className="py-3 pr-4">Product</th>
                        <th className="py-3 pr-4">Buyer</th>
                        <th className="py-3 pr-4">Bid Price</th>
                        <th className="py-3 pr-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bids.map((bid, idx) => (
                        <tr key={bid._id} className="text-sm border-t">
                          <td className="py-4 pr-4 align-top">{idx + 1}</td>
                          <td className="py-4 pr-4 align-top">
                            <div className="font-medium">{title}</div>
                            <div className="text-xs text-gray-500">${price_min} - ${price_max}</div>
                          </td>
                          <td className="py-4 pr-4 align-top">
                            <div className="flex items-center gap-3">
                              <img className="h-8 w-8 rounded-full" src={bid.buyer_image} alt="" />
                              <div>
                                <div className="font-medium">{bid.buyer_name}</div>
                                <div className="text-xs text-gray-500">
                                  {bid.buyer_email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 pr-4 align-top font-semibold">
                            ${bid.bid_price}
                          </td>
                          <td className="py-4 pr-4 align-top">
                            <div className="flex gap-3">
                              <button className="text-xs px-3 py-1 rounded bg-emerald-100 text-emerald-700">
                                Accept Offer
                              </button>
                              <button className="text-xs px-3 py-1 rounded bg-red-50 text-red-600">
                                Reject Offer
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
