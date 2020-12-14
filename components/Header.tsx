import { styled } from "@material-ui/core";
import SearchBar from "./Searchbar";
import Navbar from "./Navbar";
import Link from "next/link";

const headerStyle = {
  backgroundColor: "#f9f5f3",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  color: "#615551",
  width: "100%",
  height: "auto",
  borderRadius: "15px 15px 0 0",
  padding: "0 2rem",
};

const Header = (props) => (
  <>
    <div className="Header" style={headerStyle}>
      <h1>
        <Link href="/">
          <a>Eat smart app</a>
        </Link>
      </h1>

      <Navbar />
    </div>

    <style jsx>{`
      div {
        background: #f2f2f2;
      }
    `}</style>
  </>
);

export default Header;
