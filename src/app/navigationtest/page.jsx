"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  const router = useRouter(); // Call useRouter as a function to get the router object
  const pathname = usePathname();
  console.log(pathname);
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  console.log(q);
  const handleClick = () => {
    console.log("Привет");
    router.back();
  };
  return (
    <div>
      <Link href="/" prefetch={false}>
        Click_here
      </Link>
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  );
};
export default NavigationTestPage;
