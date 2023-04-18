import { useRouter } from "next/router";
import React from "react";

const Doucment = () => {
  const router = useRouter();
  const params = router.query.params || [];
  if(params.length == 2){
    return <h2>This page for {params[0]} and {params[1]}</h2>
  }
  if(params.length == 3){
    return <h2>This page for {params[1]} and {params[2]}</h2>
  }
  return (
    <div>
      <h1>Doc home</h1>
    </div>
  );
};

export default Doucment;
