import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div>
      This is error page.Go to{" "}
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
    </div>
  );
};

export default ErrorPage;
