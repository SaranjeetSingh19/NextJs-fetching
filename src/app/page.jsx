// "use client"
import getAllUsers from "@/utils/features";
import Link from "next/link";
import React from "react";

const page = async () => {
  const users = await getAllUsers();

  // console.log(users);

  return (
    <div>
      {users?.map((user) => (
        <Link key={user.id} href={`/user/${user.id}`}>
          {user.name} <br /> 
        </Link>
      ))}
    </div>
  );
};

export default page;
