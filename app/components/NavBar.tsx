import Link from "next/link";
import Logo from "../../public/milesmate-high-resolution-logo-transparent.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-full top-0 flex justify-between pt-6 px-4 lg:px-32 xl:px-32 bg-bgWhite">
      <Link href={"/"}>
        <Image src={Logo} alt="milesmate logo" height={"30"} />
      </Link>
    </div>
  );
}
