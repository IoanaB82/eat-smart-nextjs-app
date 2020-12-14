import { styled } from "@material-ui/core";
import SearchBar from "./Searchbar";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = (props) => (
  <>
    <div className="main-header">
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
      div.main-header {
        background-color: #f9f5f3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        color: #615551;
        width: 100%;
        height: auto;
        border-radius: 15px 15px 0 0;
        padding: 0 2rem;
      }
    `}</style>
  </>
);

export default Header;
