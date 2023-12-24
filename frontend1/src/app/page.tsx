import Link from "next/link";
import { redirect } from "next/navigation";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { PageWrapper } from "./page-wrapper";

export default function Base() {
  redirect("/home");
  return (
    <>
      <PageWrapper>
        <div className="flex w-full"></div>
      </PageWrapper>
    </>
  );
}
