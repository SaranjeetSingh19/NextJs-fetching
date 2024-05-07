import { getUserPosts } from "@/utils/features";
import Link from "next/link";
import React from "react";

const Post = async ({ paramsId }) => {
  const posts = await getUserPosts(paramsId);
  console.log(posts);

  return (
    <div>
      {posts?.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
      <button className="bg-green-400 rounded-xl py-1 mt-4 px-2"><Link href={"/"}>Back</Link></button>
    </div>
  );
};

export default Post;
