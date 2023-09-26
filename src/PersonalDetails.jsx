/* eslint-disable react/prop-types */
function Input({ type, name, label, placeholder, handleValue, gettingValue }) {
  let value = gettingValue(name);
  return (
    <div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={(e) => {
          handleValue(name, e);
        }}
        value={value}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

function PersonalInfo({ handleValue, personalInfo, setSelectedImage }) {
  function gettingValue(input) {
    return personalInfo[input];
  }
  function handleImage(event) {
    let file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target.result;
        setSelectedImage(image);
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <div className="personalInfoContainer">
      <h2>Personal Info</h2>
      <section>
        <div className="nameContainer">
          <Input
            type="text"
            name="firstName"
            label={"First Name"}
            placeholder={"John"}
            gettingValue={gettingValue}
            handleValue={handleValue}
          ></Input>
          <Input
            type="text"
            name="lastName"
            label={"Last Name"}
            placeholder={"Doe"}
            gettingValue={gettingValue}
            handleValue={handleValue}
          ></Input>
        </div>
        <div className="contactContainer">
          <Input
            type="email"
            name="email"
            label={"Email"}
            placeholder={"xxx@gmail.com"}
            gettingValue={gettingValue}
            handleValue={handleValue}
          ></Input>
          <Input
            type="number"
            name="phoneNo"
            label={"Phone No"}
            placeholder={"+00 9999999999"}
            gettingValue={gettingValue}
            handleValue={handleValue}
          ></Input>
        </div>
        <div className="addressContainer">
          <Input
            type="text"
            name="city"
            label={"City"}
            placeholder={"City"}
            gettingValue={gettingValue}
            handleValue={handleValue}
          ></Input>
          <Input
            type="text"
            name="state"
            label={"State"}
            placeholder={"State"}
            gettingValue={gettingValue}
            handleValue={handleValue}
          ></Input>
          <Input
            type="text"
            name="country"
            label={"Country"}
            placeholder={"Country"}
            gettingValue={gettingValue}
            handleValue={handleValue}
          ></Input>
        </div>
        <div className="additionalInfo">
          <Input
            type="text"
            name="linkedin"
            label={"Linked In"}
            placeholder={"https://www.linkedin.com/in/Your Profile/"}
            gettingValue={gettingValue}
            handleValue={handleValue}
          ></Input>
          <label className="imagelabel">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleImage}
              style={{ display: "none" }}
            ></input>
            Upload Photo
          </label>
        </div>
      </section>
    </div>
  );
}
export default PersonalInfo;
