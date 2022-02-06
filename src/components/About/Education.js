import React from "react";

function Education() {
  return (
    <div className="col-md-6  mt-md-4 mt-3">
      <div className="about-second">
        <div className="education">
          <h1 className="heading-about-me mb-4 text-center third-heading">
            Education
          </h1>
          <div className="container-timeline justify-content-center">
            <div className="timeline">
              <ul>
                <li>
                  <div className="timeline-content">
                    <h3 className="fifth-heading">B. Tech</h3>
                    <p className="paragraph-large">2019 - 2023</p>
                  </div>
                </li>
                <li>
                  <div className="timeline-content">
                    <h3 className="fifth-heading">Intermediate</h3>
                    <p className="paragraph-large">Scored 95%</p>
                  </div>
                </li>
                <li>
                  <div className="timeline-content">
                    <h3 className="fifth-heading">High School</h3>
                    <p className="paragraph-large">Scored 10 CGPA</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
