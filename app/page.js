"use client"
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
export default function Home() {
  return (
  <div className="text-lg w-screen h-screen flex items-center justify-center">
    Todo Application
    <Link className="text-md border m-2" href="/signin">sign in to Todo app </Link>
    <Link className="text-md border m-2" href="/signup">sign up to Todo app </Link>
    </div>
  );
}
