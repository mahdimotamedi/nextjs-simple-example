import { useRouter } from "next/router";
import Link from "next/link";

export default function About() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the about page</p>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </div>
  );
}
