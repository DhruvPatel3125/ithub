import React from 'react';

const Carousels = () => {
  return (
    <div className="container mt-4">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://suratithub.org/image/company/1232%20AR%20team%20software%20solutions.png"
              className="d-block w-100"
              alt="First Slide"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://suratithub.org/image/company/1233%20Exosoft%20IT%20Solution.png"
              className="d-block w-100"
              alt="Second Slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://suratithub.org/image/company/1235%20Blackbugs%20Technologies.png"
              className="d-block w-100"
              alt="Third Slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousels;
