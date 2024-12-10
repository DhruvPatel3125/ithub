import React from 'react';

const Card = () => {
  return (
    <section className="services py-5 bg-light" id="services">
      <div className="container">
        <div className="text-center my-5">
          <h1>Why Joining<span className="text-primary"> SuratIt Hub</span></h1>
          <hr className="w-25 m-auto" />
        </div>
      </div>

      <div className="row px-5" data-aos="zoom-in-up" data-aos-offset="200">
        <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <div className="card">
            <div className="card-body">
            
              <h5 className="card-title">Vision</h5>
              <p className="card-text">The vision of Surat IT Hub is to make Surat a global hub of IT field & create a vibrant and thriving IT ecosystem in Surat that can promote innovation, collaboration, and excellence.</p>
              
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <div className="card bg-primary text-white">
            <div className="card-body">
            
              <h5 className="card-title">Mission</h5>
              <p className="card-text">The mission of Surat IT Hub is to connect & support professionals, companies, institutes, students, mentors and vendors, through a platform that offers various resources, opportunities, and benefits.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <div className="card">
            <div className="card-body">
             
              <h5 className="card-title">Goal</h5>
              <p className="card-text">The goal of Surat IT Hub is to cultivate a highly skilled and competitive tech workforce capable of meeting the evolving demands of the tech-driven future for making Surat an IT destination.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
