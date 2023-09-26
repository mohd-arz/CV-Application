/* eslint-disable react/prop-types */
import Input from "./Input";

function EducationalInfo({ setEduInfos, setEduInfosID, id, eduInfos }) {
  function handleEduDeletion(e) {
    setEduInfosID((prevId) => prevId.filter((id) => e.target.id != id));
    setEduInfos((obj) => {
      let objArr = Object.entries(obj);
      let newObj = objArr.filter((key) => key[0] != e.target.id);
      return Object.fromEntries(newObj);
    });
  }
  function handleEduValue(input, event, id) {
    setEduInfos((prevInfo) => {
      const updatedInfo = { ...prevInfo };
      updatedInfo[id] = {
        ...updatedInfo[id],
        [input]: event.target.value,
      };
      return updatedInfo;
    });
  }
  function gettingEduValue(id, input) {
    return eduInfos[id][input];
  }
  return (
    <section>
      <div className="eduDetailContainer">
        <Input
          type="text"
          name="school"
          index={id}
          placeholder="School/College"
          label="School/College"
          handleValue={handleEduValue}
          gettingValue={gettingEduValue}
        ></Input>
        <Input
          type="text"
          name="degree"
          index={id}
          placeholder={"Degree/Specialization"}
          label={"Degree/Specialization"}
          handleValue={handleEduValue}
          gettingValue={gettingEduValue}
        ></Input>
      </div>
      <div className="eduAddressContainer">
        <Input
          type="number"
          name="percentage"
          index={id}
          placeholder={"99% ?"}
          label={"Percentage"}
          handleValue={handleEduValue}
          gettingValue={gettingEduValue}
        ></Input>
        <Input
          type="text"
          name="citystatecountry"
          index={id}
          placeholder={"City/State/Country"}
          label={"City/State/Country"}
          handleValue={handleEduValue}
          gettingValue={gettingEduValue}
        ></Input>
      </div>
      <div className="eduDurationContainer">
        <Input
          type="text"
          name="from"
          index={id}
          placeholder={"Aug 1900"}
          label={"From"}
          handleValue={handleEduValue}
          gettingValue={gettingEduValue}
        ></Input>
        <Input
          type="text"
          name="to"
          index={id}
          placeholder={"Aug 2000"}
          label={"To"}
          handleValue={handleEduValue}
          gettingValue={gettingEduValue}
        ></Input>
      </div>
      <button onClick={handleEduDeletion} id={id}>
        Delete Education
      </button>
      <hr />
    </section>
  );
}
export default EducationalInfo;
