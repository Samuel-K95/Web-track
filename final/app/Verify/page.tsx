import React, { Suspense } from "react";
import Verify from "../components/Verify/Verify";
import Loading from "../components/Loading/loading";

const VerifyUser = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Verify />
      </div>
    </Suspense>
  );
};

export default VerifyUser;
