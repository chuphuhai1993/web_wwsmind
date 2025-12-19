import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/web_logo.svg";

const Brand = () => (
    <Link href="/">
        <Image
            src={logo}
            width={120}
            height={50}
            alt="wwwsmind logo"
        />
    </Link>
)
export default Brand