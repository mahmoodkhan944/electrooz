import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
      <a href="https://www.facebook.com/mahmood.tahiri/" style={{textDecoration: 'none'}} ><i className="facebook fa-brands fa-square-facebook"></i></a>
          <a href="https://twitter.com/Electroozz1" style={{textDecoration: 'none'}} ><i className="twitter fa-brands fa-square-twitter"></i></a>
          <a href="https://in.pinterest.com/mahmoodkhan944/" style={{textDecoration: 'none'}} ><i className="pinterest fa-brands fa-square-pinterest"></i></a>
          <a href="https://www.instagram.com/shopping_hunk/" style={{textDecoration: 'none'}} ><i className="instagram fa-brands fa-square-instagram"></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://scontent.fpnq7-1.fna.fbcdn.net/v/t39.30808-6/371822093_725612256247251_3660460229749734984_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1iLtNa8_d7sAX8z0uVu&_nc_ht=scontent.fpnq7-1.fna&oh=00_AfDE-Q86YkRFiDBQ8BNwZbdKGoC08Jlri4RAg3ppbPl9HA&oe=6534F6E6"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
              LOGIN
            </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
              REGISTER
            </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
