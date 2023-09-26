/* eslint-disable react/prop-types */
import Input from "./Input";
function ExperienceInfo({ setExpInfos, setExpInfosID, index, expInfos }) {
  function handleValueExp(input, event, index) {
    setExpInfos((prevExp) => {
      let updatedExp = { ...prevExp };
      updatedExp[index] = { ...updatedExp[index], [input]: event.target.value };
      return updatedExp;
    });
  }

  function handleDeleteExp(e) {
    setExpInfosID((prevID) => {
      return prevID.filter((id) => {
        return e.target.id != id;
      });
    });

    setExpInfos((prevInfo) => {
      let objArr = Object.entries(prevInfo);
      let newArr = objArr.filter((item) => {
        return item[0] != e.target.id;
      });
      return Object.fromEntries(newArr);
    });
  }
  function gettingExpValue(id, input) {
    return expInfos[id][input];
  }
  let textAreaValue = gettingExpValue(index, "workdescription");
  return (
    <section>
      <div className="companyDetails">
        <Input
          type={"text"}
          name={"companyname"}
          index={index}
          placeholder={"Google"}
          label={"Company Name"}
          handleValue={handleValueExp}
          gettingValue={gettingExpValue}
        ></Input>
        <Input
          type={"text"}
          name={"statecountry"}
          index={index}
          placeholder={"State/Country"}
          label={"State/Country"}
          handleValue={handleValueExp}
          gettingValue={gettingExpValue}
        ></Input>
      </div>
      <div className="designationDetails">
        <Input
          type={"text"}
          name={"designation"}
          index={index}
          placeholder={"Software Engineer"}
          label={"Designation"}
          handleValue={handleValueExp}
          gettingValue={gettingExpValue}
        ></Input>
        <div>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="2"
            onChange={(e) => {
              handleValueExp("workdescription", e, index);
            }}
            placeholder="Add Your Achievements"
            value={textAreaValue}
          ></textarea>
          <label htmlFor="description">Description</label>
        </div>
      </div>
      <div className="durationDetails">
        <Input
          type={"text"}
          name={"from"}
          index={index}
          placeholder={"Aug 1900"}
          label={"From"}
          handleValue={handleValueExp}
          gettingValue={gettingExpValue}
        ></Input>
        <Input
          type={"text"}
          name={"to"}
          index={index}
          placeholder={"Aug 2000"}
          label={"To"}
          handleValue={handleValueExp}
          gettingValue={gettingExpValue}
        ></Input>
      </div>
      <button onClick={handleDeleteExp} id={index}>
        Delete Experience
      </button>
      <hr />
    </section>
  );
}

export default ExperienceInfo;
