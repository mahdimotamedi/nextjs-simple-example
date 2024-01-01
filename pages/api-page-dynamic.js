import { getDynamicData } from "../lib/data";
import Link from "next/link";

export async function getServerSideProps() {
  const dynamicData = await getDynamicData();
  return {
    props: {
      dynamicData,
    },
  };
}

export default function ApiPageDynamic(props) {
  return (
    <>
      <pre>{JSON.stringify(props.dynamicData, null, 2)}</pre>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </>
  );
}
