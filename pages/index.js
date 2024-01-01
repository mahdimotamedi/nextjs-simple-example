import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page</p>
      <p>
        <Link href="/about">Go to the about page</Link>
      </p>
      <p>
        <Link href="/post?id=10">Go to post 10</Link>
      </p>
      <p>
        <Link href="/api-page">Go to API Page</Link>
      </p>
      <p>
        <Link href="/api-page-dynamic">Go to API Page Dynamic</Link>
      </p>
    </div>
  );
}
