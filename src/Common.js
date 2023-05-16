import React from "react";
import { NavLink } from "react-router-dom";

// we can also use props as const common = (props){ and below we can get props like props.name}
const Common = ({ name, imgsrc, visit, btname }) => {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="row">
                <div className="col-md-6 pt-4 ptlg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {name}
                    <strong className="brand-name"> WhiskerVerse</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of telented developers making Dapps
                  </h2>
                  <div className="mt-3">
                    <NavLink to={visit} className="btn-get-started">
                      {btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="Common Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
