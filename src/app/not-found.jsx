import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <>
        <h2>This route is not available. </h2> <br />
        <button><Link href="/">Home</Link> </button>
    </>
  );
};

export default notFound;
