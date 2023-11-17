import Link from "next/link";

export default function NavBar() {
  return (
    <div id="top" className="flex justify-between pb-6">
      <Link href={"/"}>MilesMate</Link>
      <p>Account</p>
    </div>
  );
}
