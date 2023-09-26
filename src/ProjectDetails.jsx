/* eslint-disable react/prop-types */
import Input from "./Input";
function ProjectInfo({ id, setProjectInfo, setProjectInfoID, projectInfo }) {
  function handleProValue(input, event, index) {
    setProjectInfo((prevObj) => {
      let updatedObj = { ...prevObj };
      updatedObj[index] = {
        ...updatedObj[index],
        [input]: event.target.value,
      };
      return updatedObj;
    });
  }

  function handleDeletePro(event) {
    setProjectInfoID((prev) => prev.filter((id) => id != event.target.id));
    setProjectInfo((prevObj) => {
      let objArr = Object.entries(prevObj);
      let newArr = objArr.filter((id) => id[0] != event.target.id);
      return Object.fromEntries(newArr);
    });
  }

  function gettingProValue(id, input) {
    return projectInfo[id][input];
  }
  let projectDetails = gettingProValue(id, "description");
  return (
    <section>
      <div className="projectNameContainer">
        <Input
          type="text"
          name="projectname"
          index={id}
          placeholder={"Project Name"}
          label={"Project Name"}
          handleValue={handleProValue}
          gettingValue={gettingProValue}
        ></Input>
        <Input
          type="text"
          name="link"
          index={id}
          placeholder={"Link"}
          label={"Link"}
          handleValue={handleProValue}
          gettingValue={gettingProValue}
        ></Input>
      </div>
      <div className="projectDetailContainer">
        <textarea
          type="text"
          name="description"
          id="description"
          onChange={(e) => {
            handleProValue("description", e, id);
          }}
          value={projectDetails}
        ></textarea>
        <label htmlFor="description">Description</label>
      </div>

      <button id={id} onClick={handleDeletePro}>
        Delete Project
      </button>
      <hr />
    </section>
  );
}

export default ProjectInfo;
