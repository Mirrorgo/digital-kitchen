import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("kitchen");
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   {/* <Image src="/next.svg" alt="wow" width={30} height={30} /> */}
    // </main>
    <main>hello</main>
  );
}
