import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full top-0 flex justify-between py-5 px-4 bg-accentBlue">
      <Link href={"/"}>MilesMate</Link>
      <p>Account</p>
    </div>
  );
}
