import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link style={{ color: "unset" }} href="/volumes">
        Go to all volumes
      </Link>
    </div>
  );
}
