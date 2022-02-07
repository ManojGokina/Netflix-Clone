import React from "react";
import Nav from "../Navbar/Nav";
import Bannar from "../Banner/Bannar";
import "./Home.css";
import Row from "../Row/Row";
import requests from "../../request";

const Home = () => {
  return (
    <div className="homeScreen">
      <Nav />

      <Bannar />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchAction} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <Row title="Horror" fetchUrl={requests.fetchHorror} />
      <Row title="Romance" fetchUrl={requests.fetchRomance} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
    </div>
  );
};

export default Home;
