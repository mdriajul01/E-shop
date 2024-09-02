// @flow strict

import * as React from "react";
import { MdReviews } from "react-icons/md";
function TopReview() {
  return (
    <div>
      <div className="">
        <p className="flex font-bold text-4xl justify-center my-8 ">
          Top Review <MdReviews className="mt-2 text-[#b99a44]" />
        </p>
      </div>
    </div>
  );
}

export default TopReview;
