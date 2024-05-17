import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1100,
  height : 600,
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 2.5,
};

export default function ProductModel({ open, handleClose }) {
  console.log("Modal Open Status:", open); // Debug log

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-gray-950 text-white">
          <div className="flex items-center justify-between mb-3 bg-black">
            <div className="flex items-center space-x-3">
              <IconButton
                onClick={(event) => {
                  event && event.stopPropagation();
                  handleClose();
                }}
                aria-label="close"
              >
                <CloseIcon className="text-red-500 hover:text-red-700" />
              </IconButton>
              <p className="text-sm"></p> {/* Added some text for clarity */}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
