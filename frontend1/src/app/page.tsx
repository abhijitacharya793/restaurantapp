import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Base() {
  return (
    <div className="flex w-full">
      <div className="w-1/2 h-16 bg-blue-300">1</div>
      <div className="w-1/2 h-16 bg-green-300">2</div>
    </div>
  );
}
