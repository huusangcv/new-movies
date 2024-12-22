import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector } from 'react-redux';
import { moviesSimilar } from '~/redux/selector/selector';
import { Link } from 'react-router-dom';
const DialogSmilar = ({ open, setOpen, handleClickOpen, handleClose, slug }) => {
  const movies = useSelector(moviesSimilar);
  return (
    <div>
      {/* Hộp thoại */}
      <Dialog open={open} onClose={handleClose}>
        <div className="MuiDialogTitle-root">
          <h2 className="MuiTypography-root MuiTypography-h6">
            Phim tương tự
            <button
              className="MuiButtonBase-root MuiIconButton-root dialog-close-btn"
              tabindex="0"
              type="button"
              onClick={handleClose}
            >
              <span className="MuiIconButton-label">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
                </svg>
              </span>
              <span className="MuiTouchRipple-root"></span>
            </button>
          </h2>
        </div>

        <DialogContent dividers={true}>
          <Typography variant="body1">
            <div className="title-list">
              <div className="gird columns">
                {movies?.map((movie) => {
                  if (movie.slug !== slug) {
                    return (
                      <Link to={`/movie/${movie.slug}`} className="column" key={movie._id}>
                        <div className="cover">
                          <LazyLoadImage
                            src={`https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75`}
                            alt={movie.name}
                            effect="blur"
                            srcSet={`
                                        https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75 384w`}
                          ></LazyLoadImage>
                        </div>
                        <h3 className="name vi">
                          <span>{movie.name}</span>
                        </h3>
                        <h3 className="name en">
                          <span>{movie.origin_name}</span>
                        </h3>
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogSmilar;
