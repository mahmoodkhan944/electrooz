import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://5.imimg.com/data5/LY/WO/IH/ANDROID-51155373/product-jpeg.jpg"
          alt=""
        />
        <p>
          Kabco Kitchen has emerged as a successful manufacturer, supplier, and
          importer of cabinetry solutions that include modular kitchen cabinets,
          wardrobes, vanities, and furniture. Kabco Kitchen has collaborated
          with OPPEIN, the leading cabinetry manufacturer in Asia as its project
          partner in India. We offer state-of-the-art products that are known
          for its high-functionality, and durability. Owing to this, the company
          has marked its presence in the UAE market & Indian sub-continent. The
          company is growing steadily and working in successful cooperation with
          its new and repeat clients alike.
        </p>
      </div>
      <div className="sidebarTitle">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">L-Shaped Modular Kitchen Layout</li>
          <li className="sidebarListItem">U-Shaped Modular Kitchen Layout</li>
          <li className="sidebarListItem">Straight Modular Kitchen</li>
          <li className="sidebarListItem">Parallel Shaped Kitchen Layout</li>
          <li className="sidebarListItem">Island Modular Kitchen Layout</li>
          <li className="sidebarListItem">Open Modular Kitchen Layout</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a
            href="https://www.facebook.com/mahmood.tahiri/"
            style={{ textDecoration: "none" }}
          >
            <i className="facebook fa-brands fa-square-facebook"></i>
          </a>
          <a
            href="https://twitter.com/Electroozz1"
            style={{ textDecoration: "none" }}
          >
            <i className="twitter fa-brands fa-square-twitter"></i>
          </a>
          <a
            href="https://in.pinterest.com/mahmoodkhan944/"
            style={{ textDecoration: "none" }}
          >
            <i className="pinterest fa-brands fa-square-pinterest"></i>
          </a>
          <a
            href="https://www.instagram.com/shopping_hunk/"
            style={{ textDecoration: "none" }}
          >
            <i className="instagram fa-brands fa-square-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
