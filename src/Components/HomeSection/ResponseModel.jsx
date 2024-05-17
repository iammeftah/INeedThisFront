import * as React from 'react';
import  { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Avatar, colors } from '@mui/material';
import VerifiedIcon from "@mui/icons-material/Verified";
import AvatarImg from "../../recources/avatar.png"
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddLinkIcon from "@mui/icons-material/AddLink";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import avatar from "../../recources/avatar.png";
import { useDispatch } from 'react-redux';
import { createOffre } from '../../Store/Request/Action';






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#111827',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline:"none",
  borderRadius: "4px",
};

export default function ResponseModel({handleClose,open , item}) {
  const handleSubmit = (values) =>{
    handleClose();
    dispatch(createOffre(values))
    console.log("handel Response",  values)
  }
  const [uploadingImage, SetUploadingImage] = useState(false);
  const [selectImage, setSelectedImage] = useState("");
  const dispatch = useDispatch();
  

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:{
        content:"",
        image :"",
        requestId:item?.id
    },
    onSubmit : handleSubmit
  })
  const handleSelectImage = (event) => {
    SetUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    SetUploadingImage(false);
};

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='bg-opacity-70 bg-black'
        
      >
        <Box sx={style} >
        <div className="flex space-x-5 ">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="me"
          src={AvatarImg}
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Minaoui Mohamed</span>
              <span className="text-gray-600">Made a request .30m ago</span>
              <VerifiedIcon className="ml-2 w-2 h-2 text-[#7c3aed]" />
            </div>
            
          </div>
          <div  onClick={() =>navigate(`/Request/${3}`)} className="cursor-pointer">
            <p className="mb-6 p-0">need this phone in red color</p>
          </div>
          
        </div>
      
      </div>
      <section className={"py-10"}>
        <div className={"flex space-x-5"}>
          <Avatar alt="username" src={avatar} />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                    
                  type="text"
                  name="content"
                  placeholder="Provide for Minaoui's Request"
                  className={" w-full border-none outline-none text-xl bg-transparent"}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className={"text-red-500"}>
                    {formik.errors.content}
                  </span>
                )}
                <div className="flex justify-between items-center mt-5">
                  <div className="flex space-x-5 items-center">
                    <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                      <AddPhotoAlternateIcon className="text-[#7c3aed]" />
                      <input
                        type="file"
                        name="image file"
                        className="hidden"
                        onChange={handleSelectImage}
                      ></input>
                    </label>
                    <AddLinkIcon className="text-[#7c3aed]" />
                  </div>
                  <div>
                    <Button
                      sx={{
                        width: "100%",
                        borderRadius: "3px",
                        py: "5px",
                        bgcolor: "#7c3aed",
                      }}
                      variant="contained"
                      endIcon={<AddCircleOutlineIcon />}
                      type="submit"
                    >
                      Provide
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
        </Box>
      </Modal>
    </div>
  );
}