// src/components/JoinOurTeam.js
import React from 'react';
import './Section5.css';

const Section5 = () => {
  return (
    <section className="Section5">
      <h2>Join Our Team</h2>
      <p>We’re always looking for talented individuals to join our team. If you're passionate about technology and innovation, we’d love to hear from you!</p>
      
      <div className="job-list">
        <div className="job-card">
          <h3>Software Engineer</h3>
          <p>Develop and maintain cutting-edge software for our drone delivery systems.</p>
          <button className="apply-button"><span>Apply Now</span></button>
        </div>
        
        <div className="job-card">
          <h3>Drone Technician</h3>
          <p>Ensure our drones are operating at peak performance and handle repairs.</p>
          <button className="apply-button"><span>Apply Now</span></button>
        </div>
        
        <div className="job-card">
          <h3>Customer Support Specialist</h3>
          <p>Provide excellent customer support and help resolve issues related to our services.</p>
          <button className="apply-button"><span>Apply Now</span></button>
        </div>
      </div>
    </section>
  );
};

export default Section5;
