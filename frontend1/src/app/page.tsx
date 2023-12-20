import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Base() {
  redirect("/home");
  return <div className="flex w-full"></div>;
}
