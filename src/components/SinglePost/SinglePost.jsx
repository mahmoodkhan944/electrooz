import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://4.imimg.com/data4/OJ/FO/MY-25607535/lshape-kitchen3.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          L-Shape Modular Kitchen
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Khan</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          L-shaped kitchens allow for a significant amount of corner space and
          allow the designer to creatively use the corner space because they are
          built on one side of the kitchen and use only two walls. Carousel
          units and Magic Corner units are two fashionable and useful corner
          storage options for an L-shaped kitchen layout.
        </p>
      </div>
    </div>
  );
}
