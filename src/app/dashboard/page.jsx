"use client";

import { useSession } from "next-auth/react";
import React from "react";

const DashboardPage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      welcome
      <br />
      {session?.user?.email}
    </div>
  );
};

export default DashboardPage;
