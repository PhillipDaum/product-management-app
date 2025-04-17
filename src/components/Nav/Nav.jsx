import { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import "./Nav.css";

function Nav({ selectByCategory }) {
  const categories = ["UI", "UX", "Enhancement", "Bug", "Feature"];

  const [ dynamicMenuStyle, setDynamicMenuStyle ] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMenu = () => {
    setDynamicMenuStyle({ display: "flex" });
    setIsMenuOpen(true);
  };
  
  const closeMenu = () => {
    setDynamicMenuStyle({ display: "none" });
    setIsMenuOpen(false);
  };  

  return (
    <nav>
      <div className="my-comany-and-mobile-nav">
        <div className="company-info">
          <h3>My company</h3>
          <p>Feedback Board</p>
        </div>
        <div className="hamburger-menu">
        {isMenuOpen ? (
          <p className="open-menu-button" onClick={() => closeMenu()}>X</p>
        ) : (
          <LiaBarsSolid
          className="open-menu-button"
          onClick={() => showMenu()}
        />
        )}
        </div>
      </div>

      <div className="side-menu" style={dynamicMenuStyle}>
        <div className="filtering-options">
          <button onClick={() => selectByCategory("All")}>All</button>
          {categories.map((item, index) => (
            <button onClick={selectByCategory} key={index} value={item}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden-small filtering-options">
        <button onClick={() => selectByCategory("All")}>All</button>
        {categories.map((item, index) => (
          <button onClick={selectByCategory} key={index} value={item}>
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
