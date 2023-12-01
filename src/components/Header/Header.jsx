import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg">Modular Furniture</span>
      </div>
      <img
        className="headerImg"
        src="https://scontent.fpnq7-6.fna.fbcdn.net/v/t1.6435-9/184261605_2977809825874193_7039979190939379557_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=810d5f&_nc_ohc=TWv2Rr-eO9QAX_PVQkB&_nc_ht=scontent.fpnq7-6.fna&oh=00_AfBHOI1lcyQCDXw2qRIr4DIe6YntKlvYqorsglG5q2LyXA&oe=655781AD"
        alt=""
      />
    </div>
  );
}
