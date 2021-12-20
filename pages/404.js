import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className="not-found">
      <h1>The page is not found 404</h1>
      <br />
      <Link href="/">Go back to home page</Link>
    </div>
  );
}

export default NotFound;
