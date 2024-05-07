export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) return new Error("Something went wrong while fetching...");

  return await res.json();
}

export const getUserDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) return new Error("Something went wrong while fetching 2...");

  return await res.json();
};

export const getUserPosts = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${1}`
  );

  if (!res.ok) return new Error("Something went wrong while fetching 2...");

  const data = await res.json();
  return await new Promise((resolve) => setTimeout(() => resolve(data), 3000));
};
