import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://scontent.fpnq7-4.fna.fbcdn.net/v/t1.6435-9/35682209_1660731690715362_5481870599032668160_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=be3454&_nc_ohc=H7l07VsZ6I8AX9_EQMT&_nc_ht=scontent.fpnq7-4.fna&oh=00_AfD67FG_6p_bb2p-Oq9vZOeVJlw1PgVLpZe3fEv5sBaRnA&oe=655F080E"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Mahmood Khan" />
          <label>Email</label>
          <input type="email" placeholder="mahmoodkhan944@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
