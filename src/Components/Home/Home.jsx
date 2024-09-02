// @flow strict

import * as React from "react";
import Bannar from "./Bannar/Bannar";
import TopReview from "./TopReview/TopReview";
// import Paralax from "./Paralax/ParalaxImage";
import ParalaxImage from "./Paralax/ParalaxImage";
import Support from "./Support/Support";
import Service from "./service/Service";
// import Service from "./Service/Service";
function Home() {
  return (
    <div>
      <Bannar></Bannar>
      <TopReview></TopReview>
      <ParalaxImage></ParalaxImage>
      <Support></Support>
      <Service></Service>
    </div>
  );
}

export default Home;
