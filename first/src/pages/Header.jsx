import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h2>Header</h2>
      <div
        className="div-buttons"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "10px",
          margin: "10px",
        }}
      >
        <button>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </button>
        <button>
          <Link to="/products" style={{ textDecoration: "none" }}>
            Products
          </Link>
        </button>
        <button>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            Cart
          </Link>
        </button>
      </div>
    </>
  );
};

export default Header;
