import "./sidebar.css";

export default function Sidebar() {
  const items = ["Welcome", "Safety", "Adventure", "Community"];

  return (
    <div className="link-container">
      {items.map((item, index) => (
        <a href={"#" + item} key={index} className="links">
          {item}
        </a>
      ))}
    </div>
  );
}
