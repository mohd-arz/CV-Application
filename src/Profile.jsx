/* eslint-disable react/prop-types */
function Profile({ profileSummary, setProfileSummary, setProfileShow }) {
  function closeSummary() {
    setProfileSummary("");
    setProfileShow(false);
  }

  function handleProfileValue(e) {
    setProfileSummary(e.target.value);
  }
  return (
    <div className="profileContainer">
      <textarea
        name="profile"
        id="profile"
        cols="30"
        rows="5"
        value={profileSummary}
        onChange={handleProfileValue}
        placeholder="Add Your Profile Summary"
      ></textarea>
      <button onClick={closeSummary}>Remove Summary</button>
    </div>
  );
}
export default Profile;
