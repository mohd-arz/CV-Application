/* eslint-disable react/prop-types */
import { useState } from "react";

function SkillsInfo({ id, setSkillInfo, setSkillInfoID }) {
  const [heading, setHeading] = useState("");
  const [isHeadingVisible, setHeadingVisible] = useState(true);

  function handleSkillsHeading(input, id) {
    setSkillInfo((prevInfo) => {
      let updatedInfo = { ...prevInfo };
      updatedInfo[id] = { ...updatedInfo[id], [input]: "" };
      return updatedInfo;
    });
  }
  function handleSkillsHeadingDeletion(input) {
    setSkillInfo((prevSkillInfo) => {
      let updatedSkillInfo = Object.entries(prevSkillInfo);
      let newArr = updatedSkillInfo.filter((item) => {
        return Object.keys(item[1])[0] != input;
      });
      return Object.fromEntries(newArr);
    });
  }
  function handleSkillDetails(input, event, id) {
    setSkillInfo((prevInfo) => {
      let updatedInfo = { ...prevInfo };
      updatedInfo[id] = { ...updatedInfo[id], [input]: event.target.value };
      return updatedInfo;
    });
  }
  function handleSkillDeletion(e) {
    setSkillInfoID((skillInfoID) =>
      skillInfoID.filter((id) => id != e.target.id)
    );
    setSkillInfo((prevInfo) => {
      let ObjArr = Object.entries(prevInfo);
      let newArr = ObjArr.filter((item) => item[0] != e.target.id);
      return Object.fromEntries(newArr);
    });
  }

  return (
    <section>
      <div className="headingContainer">
        <input
          type="text"
          name="header"
          id="header"
          placeholder="Skill Heading (Languages) "
          onChange={(e) => setHeading(e.target.value)}
          disabled={!isHeadingVisible}
        ></input>
        <label htmlFor="header">Heading</label>
        {isHeadingVisible && (
          <button
            onClick={() => {
              if (heading.length > 0) {
                setHeadingVisible(false);
                handleSkillsHeading(heading, id);
              }
            }}
          >
            Add Heading
          </button>
        )}
        {isHeadingVisible == false && (
          <button
            onClick={() => {
              setHeadingVisible(true);
              handleSkillsHeadingDeletion(heading);
            }}
          >
            Edit Heading
          </button>
        )}
      </div>
      <div className="skillDetailsContainer">
        {!isHeadingVisible && (
          <>
            <textarea
              name="skilldetails"
              id="skilldetails"
              cols="30"
              rows="5"
              onChange={(e) => handleSkillDetails(heading, e, id)}
              placeholder="Skill Description (HTML, CSS, JavaScript)"
            ></textarea>
            <label htmlFor="skilldetails">Details</label>
          </>
        )}
      </div>

      <button id={id} onClick={handleSkillDeletion}>
        Delete Skills
      </button>
      <hr />
    </section>
  );
}

export default SkillsInfo;
