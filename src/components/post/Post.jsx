import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://5.imimg.com/data5/YI/LL/MP/SELLER-90610978/l-shaped-modular-kitchen.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Modular</span>
          <span className="postCat">Kitchen</span>
        </div>
        <span className="postTitle">L-Shaped Modular Kitchen Layout</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <div className="postDesc">
        <p>
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
