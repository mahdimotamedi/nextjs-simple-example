import { getDynamicData } from "../lib/data";
import Link from "next/link";

export async function getStaticProps() {
  const staticData = await getDynamicData();
  return {
    props: {
      staticData,
    },
  };
}

export default function ApiPage(props) {
  return (
    <>
      <pre>{JSON.stringify(props.staticData, null, 2)}</pre>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </>
  );
}
