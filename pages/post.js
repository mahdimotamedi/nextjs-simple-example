import { useRouter } from "next/router";
import Link from "next/link";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Post {id}</h1>
      <p>This is the post with ID {id}</p>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </div>
  );
}
