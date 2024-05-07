import { getUserDetails } from "@/utils/features";
import React, { Suspense } from "react";
import Post from "./posts";

const page = async ({ params }) => {
//   console.log(params.id);

  const res = await getUserDetails(params.id);
  return (
    <div>
      {" "}
      USER ID: {params.id} <br />
      <h1>{res.name}</h1>
      <h3>{res.email}</h3>
      <h5>{res.phone}</h5>
<br />
      <Suspense fallback={<div>Loding hihi...</div>}>
      <Post paramsId={params.id} />

      </Suspense>

    </div>
  );
};

export default page;
