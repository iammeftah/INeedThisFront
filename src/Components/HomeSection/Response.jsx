import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { LocationOn, AttachMoney } from '@mui/icons-material';
import { formatDistanceToNow, parseISO } from 'date-fns';
import ProductModel from '../RequestDetails/ProductModel';

const Response = ({ item }) => {
  const image = 'https://cdn.pixabay.com/photo/2017/01/31/09/29/apples-2023401_640.jpg';
  let timeAgo = '';

  if (item?.createdAt) {
    const parsedDate = parseISO(item.createdAt);
    timeAgo = formatDistanceToNow(parsedDate);
  } else {
    console.error("item.createdAt is null");
  }

  const [openResponseModel, setOpenResponseModel] = useState(false);

  const handleOpenResponseModel = () => {
    console.log("Opening modal");
    setOpenResponseModel(true);
  };

  const handleCloseResponseModel = (event) => {
    console.log("Closing modal");
    // event.stopPropagation();
    setOpenResponseModel(false);
  };

  return (
    <div className="bg-gray-950 rounded-lg shadow-md p-4 cursor-pointer" onClick={handleOpenResponseModel} >
      <div className="flex items-center">
        <Avatar alt={item.user?.fullName} src="https://example.com/avatar.jpg" className="mr-2" />
        <div>
          <h3 className="font-semibold">{item.user?.fullName}</h3>
          <p className="text-gray-500 text-sm">{timeAgo} ago</p>
        </div>
      </div>
      <div className="flex w-full">
        <div className="mt-4 mr-5">
          <img src={image} alt="Product Name" className="w-40 h-40 object-cover rounded-lg" />
        </div>
        <div className="mt-4 flex flex-col">
          <h2 className="text-xl font-semibold">{item.user?.fullName}</h2>
          <p className="text-gray-600 mt-2">{item?.content}</p>
          <div className="flex items-center mt-4">
            <AttachMoney className="text-gray-500 mr-1" />
            <span className="font-semibold">99.99</span>
          </div>
          <div className="flex items-center mt-2">
            <LocationOn className="text-gray-500 mr-1" />
            <span>New York, USA</span>
          </div>
        </div>
      </div>
      <section>
        <ProductModel open={openResponseModel} handleClose={handleCloseResponseModel} />
      </section>
    </div>
  );
};

export default Response;