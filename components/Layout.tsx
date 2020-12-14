import Navbar from "./Navbar";
import Header from "./Header";
import Searchbar from "./Searchbar";
import Container from "@material-ui/core/Container";
import Head from "next/head";
import { styled } from "@material-ui/core/styles";

const Layout = (props) => {
  const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",

    borderRadius: "0 0 15px 15px",
    padding: "2rem",

    background: "#fff",
  };

  return (
    <>
      <Container maxWidth="md">
        <Header />

        <main style={contentStyle}>{props.children}</main>
      </Container>
    </>
  );
};

export default Layout;
