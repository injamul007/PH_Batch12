import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";

const MyBids = () => {
  const [myBids, setMyBids] = useState([]);
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    if (user?.email) {
     axiosSecure.get(`/bids?buyer_email=${user.email}`)
     .then(data=> {
      console.log(data.data)
      setMyBids(data.data)
     })
    }
  }, [user,axiosSecure]);


  // useEffect(() => {
  //   if (user?.email) {
  //     fetch(`http://localhost:3000/bids?buyer_email=${user.email}`, {
  //       headers: {
  //         authorization: `Bearer ${user.accessToken}`
  //       }
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMyBids(data);
  //       });
  //   }
  // }, [user]);

  const handleRemoveBid = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Now Delete");

        fetch(`http://localhost:3000/bids/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingBids = [...myBids].filter(
                (bid) => bid._id !== _id
              );
              setMyBids(remainingBids);
              Swal.fire({
                title: "Deleted!",
                text: "Your Bid has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-full flex justify-center items-start px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-sm p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            My Bids: <span className="text-primary">{myBids.length}</span>
          </h1>
        </div>

        {/* Table header (desktop) */}
        <div className="hidden md:grid md:grid-cols-[50px_1.6fr_1.6fr_120px_120px_140px] md:items-center text-sm text-slate-600 bg-gray-50 px-6 py-3 rounded-t-md border border-gray-200">
          <div className="font-medium">SL No</div>
          <div className="font-medium">Product</div>
          <div className="font-medium">Buyer</div>
          <div className="text-center font-medium">Bid Price</div>
          <div className="text-center font-medium">Status</div>
          <div className="text-center font-medium">Actions</div>
        </div>

        {/* Rows (single-layer grid per row; reflows responsively) */}
        <div className="divide-y divide-gray-100 border-l border-r border-b border-gray-200 rounded-b-md overflow-hidden">
          {myBids.map((bid, idx) => (
            <div
              key={bid._id}
              className="grid grid-cols-1 md:grid-cols-[50px_1.6fr_1.6fr_120px_120px_140px] gap-3 md:gap-0 items-start md:items-center px-4 py-4 md:px-6 md:py-3 hover:bg-gray-50 transition"
            >
              {/* SL No */}
              <div className="md:justify-start md:flex md:items-center text-slate-700 font-medium">
                <span className="md:hidden text-xs text-slate-400">
                  #{idx + 1}
                </span>
                <span className="hidden md:inline">{idx + 1}</span>
              </div>

              {/* Product */}
              <div className="flex items-start md:items-center gap-3">
                <img
                  src={bid.productImg}
                  alt={bid.productName}
                  className="w-16 h-12 rounded-sm object-cover shrink-0"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-800">
                    {bid.productName}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {bid.productPrice}
                  </div>
                </div>
              </div>

              {/* Buyer */}
              <div className="flex items-start md:items-center gap-3">
                <img
                  src={
                    bid.buyer_image ??
                    bid.buyerImage ??
                    "https://via.placeholder.com/40?text=U"
                  }
                  alt={bid.buyer_name ?? bid.buyerName ?? "Buyer"}
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                />
                <div>
                  <div className="text-sm font-medium text-slate-800">
                    {bid.buyer_name ?? bid.buyerName ?? "Unknown"}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {bid.buyer_email ?? bid.buyerEmail ?? ""}
                  </div>
                </div>
              </div>

              {/* Bid Price */}
              <div className="flex md:justify-center items-start md:items-center">
                <div className="text-sm font-semibold text-slate-800">
                  {bid.bid_price ?? bid.bidPrice ?? "-"}
                </div>
              </div>

              {/* Status */}
              <div className="flex md:justify-center items-start md:items-center">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 ring-1 ring-yellow-200">
                  {bid.status ?? "Pending"}
                </span>
              </div>

              {/* Actions */}
              <div className="flex md:justify-center items-start md:items-center">
                <button
                  onClick={() => handleRemoveBid(bid._id)}
                  className="inline-flex items-center gap-2 border border-red-300 text-red-500 px-3 py-1 rounded-md text-sm hover:bg-red-50 transition cursor-pointer"
                >
                  <FiTrash2 />
                  <span>Remove Bid</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 text-right text-xs text-slate-400">
          Showing {myBids.length} bids
        </div>
      </div>
    </div>
  );
};

export default MyBids;
