import Email from "@/components/Email";
import Socials from "@/components/Socials";
import Navbar from "@/sections/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Socials />
      <Email />
    </div>
  );
}
