import { useState } from "react";
import PersonalInfo from "./PersonalDetails";
import Profile from "./Profile";
import EducationalInfo from "./EducationDetails";
import ExperienceInfo from "./ExperienceDetails";
import SkillsInfo from "./SkillsDetails";
import ProjectInfo from "./ProjectDetails";
import Preview from "./Preview";

let personalInfoObj = function () {
  return {
    firstName: "JOHN",
    lastName: "DOE ",
    email: "johndoeHEHE@gmail.com",
    phoneNo: 9876543210,
    linkedin: "https://www.linkedin.com/in/johndoe/",
    city: "SF",
    state: "CA",
    country: "USA",
  };
};

let EducationInfoObj = function () {
  return {
    school: "",
    degree: "",
    percentage: "",
    citystatecountry: "",
    from: "",
    to: "",
  };
};

let ExperienceInfoObj = function () {
  return {
    companyname: "",
    designation: "",
    workdescription: "",
    statecountry: "",
    from: "",
    to: "",
  };
};

let SkillInfoObj = function () {
  return {};
};

let ProjectInfoObj = function () {
  return {
    projectname: "",
    description: "",
    link: "",
  };
};

function App() {
  const [personalInfo, setPersonalInfo] = useState(personalInfoObj());
  const [selectedImage, setSelectedImage] = useState(null);

  const [profileSummary, setProfileSummary] = useState("");
  const [isProfileShow, setProfileShow] = useState(false);

  // 0: EducationInfoObj()
  const [eduInfos, setEduInfos] = useState({});
  const [eduInfosID, setEduInfosID] = useState([]);

  // 0: ExperienceInfoObj()
  const [expInfos, setExpInfos] = useState({});
  const [expInfosID, setExpInfosID] = useState([]);

  const [skillInfo, setSkillInfo] = useState({});
  const [skillInfoID, setSkillInfoID] = useState([]);

  const [projectInfo, setProjectInfo] = useState({});
  const [projectInfoID, setProjectInfoID] = useState([]);

  const [isPreview, setPreview] = useState(false);

  function handleValue(input, event) {
    setPersonalInfo({ ...personalInfo, [input]: event.target.value });
  }

  function open() {
    setPreview(true);
  }

  function close() {
    setPreview(false);
  }

  function handleAddEdu() {
    const newEduInfosID = [
      ...eduInfosID,
      isNaN(eduInfosID[eduInfosID.length - 1])
        ? 0
        : eduInfosID[eduInfosID.length - 1] + 1,
    ];
    setEduInfosID(newEduInfosID);
    let updatedInfo = {
      ...eduInfos,
      [newEduInfosID[newEduInfosID.length - 1]]: EducationInfoObj(),
    };
    if (Object.keys(updatedInfo).length == 1) {
      updatedInfo[0].school = "STANFORD UNIV";
      updatedInfo[0].degree = "MS";
      updatedInfo[0].percentage = "88";
      updatedInfo[0].citystatecountry = "CA,USA";
      updatedInfo[0].from = "2018";
      updatedInfo[0].to = "2020";
    }
    setEduInfos(updatedInfo);
  }
  function handleAddExp() {
    const newExpInfosID = [
      ...expInfosID,
      isNaN(expInfosID[expInfosID.length - 1])
        ? 0
        : expInfosID[expInfosID.length - 1] + 1,
    ];
    setExpInfosID(newExpInfosID);
    let updatedInfo = {
      ...expInfos,
      [newExpInfosID[newExpInfosID.length - 1]]: ExperienceInfoObj(),
    };
    if (Object.keys(updatedInfo).length == 1) {
      updatedInfo[0].companyname = "Google";
      updatedInfo[0].designation = "Software Engineer";
      updatedInfo[0].statecountry = "SF, USA";
      updatedInfo[0].workdescription = "Main Contribution for PaLM AI";
      updatedInfo[0].from = "2022";
      updatedInfo[0].to = "2023";
    }
    setExpInfos(updatedInfo);
  }
  function handleMoreSkills() {
    let updatedId = [
      ...skillInfoID,
      isNaN(skillInfoID[skillInfoID.length - 1])
        ? 0
        : skillInfoID[skillInfoID.length - 1] + 1,
    ];
    setSkillInfoID(updatedId);
    let updatedInfo = {
      ...skillInfo,
      [updatedId[updatedId.length - 1]]: SkillInfoObj(),
    };

    setSkillInfo(updatedInfo);
  }
  function handleAddPro() {
    let updatedID = [
      ...projectInfoID,
      isNaN(projectInfoID[projectInfoID.length - 1])
        ? 0
        : projectInfoID[projectInfoID.length - 1] + 1,
    ];
    setProjectInfoID(updatedID);
    let updatedInfo = {
      ...projectInfo,
      [updatedID[updatedID.length - 1]]: ProjectInfoObj(),
    };
    if (updatedID.length == 1) {
      updatedInfo[0].projectname = "Tic Tac Toe";
      updatedInfo[0].description =
        "A JavaScript-focused Game where we can choose both Single and Multiplayer modes. Everything was accomplished by Vanilla HTML CSS JS.";
      updatedInfo[0].link = "https://github.com/mohd-arz/Tic-Tac-Toe";
    }
    setProjectInfo(updatedInfo);
  }

  return (
    <>
      <h1>CV Maker</h1>
      {isPreview && (
        <div className="previewWrapper">
          <Preview
            visible={isPreview}
            pInfo={personalInfo}
            selectedImage={selectedImage}
            eduInfos={eduInfos}
            profileSummary={profileSummary}
            expInfos={expInfos}
            skillInfo={skillInfo}
            projectInfo={projectInfo}
            close={close}
          ></Preview>
        </div>
      )}
      <PersonalInfo
        handleValue={handleValue}
        personalInfo={personalInfo}
        setSelectedImage={setSelectedImage}
      ></PersonalInfo>
      <div className="profileSummaryContainer">
        <h2>Profile Summary</h2>
        {isProfileShow == false && (
          <button onClick={() => setProfileShow(true)}>Add Summary</button>
        )}

        {isProfileShow == true && (
          <Profile
            profileSummary={profileSummary}
            setProfileShow={setProfileShow}
            setProfileSummary={setProfileSummary}
          ></Profile>
        )}
      </div>

      <div className="educationalInfoContainer">
        <h2>Education Section</h2>
        {eduInfosID.map((id) => (
          <EducationalInfo
            key={id}
            id={id}
            setEduInfos={setEduInfos}
            setEduInfosID={setEduInfosID}
            eduInfos={eduInfos}
          ></EducationalInfo>
        ))}
        <button onClick={handleAddEdu}>Add Education</button>
      </div>

      <div className="experienceInfoContainer">
        <h2>Experience Section</h2>
        {expInfosID.map((key) => {
          return (
            <ExperienceInfo
              key={key}
              index={key}
              expInfos={expInfos}
              setExpInfos={setExpInfos}
              setExpInfosID={setExpInfosID}
            ></ExperienceInfo>
          );
        })}
        <button onClick={handleAddExp}>Add Experience</button>
      </div>
      <div className="skillsInfoContainer">
        <h2>Skills Section</h2>
        {skillInfoID.map((key) => (
          <SkillsInfo
            key={key}
            id={key}
            skillInfo={skillInfo}
            setSkillInfo={setSkillInfo}
            setSkillInfoID={setSkillInfoID}
          ></SkillsInfo>
        ))}
        <button onClick={handleMoreSkills}>Add Skills</button>
      </div>

      <div className="projectInfoContainer">
        <h2>Projects Section</h2>
        {projectInfoID.map((key) => (
          <ProjectInfo
            key={key}
            id={key}
            setProjectInfo={setProjectInfo}
            setProjectInfoID={setProjectInfoID}
            projectInfo={projectInfo}
          ></ProjectInfo>
        ))}
        <button onClick={handleAddPro}>Add more Projects</button>
      </div>

      <button onClick={open} className="view-btn">
        PREVIEW
      </button>
      <footer className="author">
        Copyright © Mohammed Arsh M 2023{" "}
        <a href="https://github.com/mohd-arz" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </>
  );
}

export default App;
