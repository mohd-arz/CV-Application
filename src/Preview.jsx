/* eslint-disable react/prop-types */

export default function Preview({
  pInfo,
  selectedImage,
  profileSummary,
  eduInfos,
  expInfos,
  skillInfo,
  projectInfo,
  close,
}) {
  return (
    <div className="previewContainer">
      <div className="personalPreview">
        <div className="personal-left">
          <div className="fullName">
            <h1>{pInfo.firstName}</h1>
            <h1>{pInfo.lastName}</h1>
          </div>
          <p className="email">{pInfo.email}</p>
          <p className="phoneno">{pInfo.phoneNo}</p>
          <p className="address">
            {pInfo.city},{pInfo.state},{pInfo.country}
          </p>
          <a href={pInfo.linkedin} target="_blank" rel="noreferrer">
            {pInfo.linkedin}
          </a>
        </div>
        <div className="personal-right">
          {selectedImage && <img src={selectedImage.src}></img>}
        </div>
      </div>

      <hr />

      <div className="profileSummaryPreview">
        {profileSummary.length > 0 && <h2>PROFILE</h2>}
        <p>{profileSummary}</p>
      </div>

      {Object.keys(eduInfos).length > 0 && (
        <div className="educationalPreview">
          <h2>EDUCATION</h2>
          {Object.entries(eduInfos).map((item) => {
            let key = item[0];
            let values = item[1];
            return (
              <div key={key}>
                {values.school.length > 0 && (
                  <h3>
                    {values.school} <span>|</span> {values.citystatecountry}
                  </h3>
                )}
                <div className="educationNameDate">
                  <h4>{values.degree}</h4>
                  {values.from.length > 0 && (
                    <p>
                      {values.from} to {values.to}
                    </p>
                  )}
                </div>

                {values.percentage.length > 0 && (
                  <p>Percentage: {values.percentage}%</p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {Object.keys(expInfos).length > 0 && (
        <div className="experiencePreview">
          <h2>EXPERIENCE</h2>
          {Object.entries(expInfos).map((item) => {
            let key = item[0];
            let values = item[1];
            return (
              <div key={key}>
                {values.companyname.length > 0 && (
                  <h3>
                    {values.companyname} <span> | </span> {values.statecountry}
                  </h3>
                )}

                <div className="designationDate">
                  <h4>{values.designation}</h4>
                  {values.from.length > 0 && (
                    <p>
                      {values.from} to {values.to}
                    </p>
                  )}
                </div>
                <p>{values.workdescription}</p>
              </div>
            );
          })}
        </div>
      )}

      {Object.keys(skillInfo).length > 0 && (
        <div className="skillsPreview">
          <h2>SKILLS</h2>
          <ul>
            {Object.entries(skillInfo).map((item) => {
              let keys = item[0];
              let values = item[1];
              let heading = Object.keys(values);
              return (
                <li key={keys}>
                  <h3 style={{ display: "inline" }}>{heading} : </h3>
                  {values[heading]}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {Object.keys(projectInfo).length > 0 && (
        <div className="projectPreview">
          <h2>PROJECTS</h2>
          {Object.entries(projectInfo).map((item) => {
            let key = item[0];
            let values = item[1];
            return (
              <dl key={key}>
                <dt>{values.projectname}</dt>
                <dd>{values.description}</dd>
                {values.link.length > 0 && (
                  <p>
                    Source Code :
                    <a href={values.link} target="_blank" rel="noreferrer">
                      {values.link}
                    </a>
                  </p>
                )}
              </dl>
            );
          })}
        </div>
      )}
      <button onClick={close} className="close-btn">
        Close
      </button>
      <button
        onClick={() => {
          window.print();
        }}
        className="print-btn"
      >
        Print
      </button>
    </div>
  );
}
