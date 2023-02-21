import React, { useState } from "react";
import cake1 from "./Cake/cake1.jpg";
import cake1ph from "./Cake/cake1ph.jpg";
import cake2 from "./Cake/cake2.jpg";
import cake2ph from "./Cake/cake2ph.jpg";
import cake3 from "./Cake/cake3.jpg";
import cake3ph from "./Cake/cake3ph.jpg";
import viado from "./Cake/viado.jpg";
import cake4 from "./Cake/cake4.webp";
import cake4ph from "./Cake/cake4ph.jpg"
import { Trans, useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Cakes() {
  const [id, setId] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Button onClick={() => {setOpen(true);setId(cake1);}}>
              <div className="menubglist">
               <h6>
                  <LazyLoadImage
                    loading="lazy"
                    src={cake1}
                    alt={cake1}
                    className="menulist"
                    placeholderSrc={cake1ph}
                    effect="blur"
                  />
                  Chocolate cake
                </h6>
              </div>
            </Button>
            <Button onClick={() => {setOpen(true);setId(cake2);}}>
              <div className="menubglist">
                <h6>
                  <LazyLoadImage
                    loading="lazy"
                    src={cake2}
                    alt={cake2}
                    className="menulist"
                    placeholderSrc={cake2ph}
                    effect="blur"
                  />
                  Bojo
                </h6>
              </div>
            </Button>
            <Button onClick={() => {setOpen(true); setId(cake3);}}>
              <div className="menubglist"><h6>
                   <LazyLoadImage
                    loading="lazy"
                    src={cake3}
                    alt={cake3}
                    className="menulist"
                    placeholderSrc={cake3ph}
                    effect="blur"
                  />
                  Marmer cake
                </h6>
              </div>
            </Button>

          </Grid>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <img
                  loading="lazy"
                  src={id}
                  alt={id}
                  className="menulist formodal"
                />
              </Typography>
            </Box>
          </Modal>

          <Grid item xs={6}>
            <Button onClick={() => {setOpen(true);setId(viado);}}>
              <div className="menubglist">
                <h6>
                   <LazyLoadImage
                    loading="lazy"
                    src={viado}
                    alt={viado}
                    className="menulist"
                    effect="blur"
                  />
                  Viado
                </h6>
              </div>
            </Button>
            <Button onClick={() => {setOpen(true);setId(cake4);}} > <div className="menubglist"> <h6>
                  <LazyLoadImage
                    loading="lazy"
                    src={cake4}
                    alt={cake4}
                    className="menulist"
                    placeholderSrc={cake4ph}
                    effect="blur"
                  />
                Nuts with currants
                </h6>
              </div>
            </Button>

          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
