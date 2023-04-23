import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is next project home page</h1>
      <Link href="/about" legacyBehavior>
        <a>
          <h3>Go to about page</h3>
        </a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>
          <h3>Go to about page</h3>
        </a>
      </Link>
    </div>
  );
}
