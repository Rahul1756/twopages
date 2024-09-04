// `app/dashboard/page.js` is the UI for the `/dashboard` URL
 import Link from "next/link";
import LoginButton from "@/components/UI/LoginButton";


export default function Login() {
 
  return (
    <main className="min-h-screen flex items-center justify-center ">
        
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <LoginButton />
      <div className="flex flex-col justify-end items-start  p-4 ">
      <Link href="/">
      <>
        Go to Back
      </>
    </Link>
      </div>
    </div>
  </main>
  
  );
}
