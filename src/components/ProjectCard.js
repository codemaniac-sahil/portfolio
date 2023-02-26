import React from "react";

function ProjectCard(props) {
  return (
    <>
      {props.llink === "" ? (
        <div className={`card-${props.theme}`}>
          <span className="card-title">
            <h2>{props.title}</h2>
          </span>
          <span className="card-detail">{props.projectdesc}</span>
          <span className="links">
            <span className="github-link">
              <a href={props.glink} target="__blank">
                Github Link
              </a>
            </span>
            <span className="live"></span>
          </span>
        </div>
      ) : (
        <div className={`card-${props.theme}`}>
          <span className="card-title">
            <h2>{props.title}</h2>
          </span>
          <span className="card-detail">{props.projectdesc}</span>
          <span className="links">
            <span className="github-link">
              <a href={props.glink} target="__blank">
                Github Link
              </a>
            </span>
            <span className="live">
              <a href={props.llink} target="__blank">
                Live Project
              </a>
            </span>
          </span>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
