import React from 'react'
import Grid from '@mui/material/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import cake1 from "./Cake/cake1.jpg"
import  cake1ph from "./Cake/cake1ph.jpg"
import viado from "./Cake/viado.jpg"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Catering() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>  <div className='menubglist'> <h6 > <LazyLoadImage loading='lazy' src={cake1} alt={cake1} className='menulist'  placeholderSrc={cake1ph} effect='blur' /> Chocolate cake  </h6> </div>  </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <LazyLoadImage loading='lazy' src={cake1} alt={cake1} className='menulist'  placeholderSrc={cake1ph} effect='blur' /> Chocolate cake  
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
