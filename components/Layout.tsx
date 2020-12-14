import Footer from "./Footer";
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

    padding: "2rem",

    background: "#fff",
  };

  return (
    <>
      <Container maxWidth="md">
        <Header />

        <main style={contentStyle}>{props.children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
