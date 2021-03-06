import React from "react";

const LanguageSkills = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h4 className="brown-text light">Languages</h4>
          <div className="row text-center">
            {props.data.map((data) => {
              return (
                <div className="col s3 m2">
                  <img alt="" src={data.image} className="responsive-img" />
                  <br />
                  {data.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageSkills;
