// "use client";

import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import {useSession, signOut} from "next-auth/react";


// make function async for server comp
export default async function Home() {
  const session=await getServerSession(authOptions);
  if(!session){
    redirect("api/auth/signin")
  }
 
 

  // const { data: session, status } = useSession({
  //   required: true,
  // });

  // if(status === "loading") {
  //   return <><h1>Loading...</h1></>
  // }

// const handleSignOut = () => {
//   signOut();
// };

 
  return (
    <div className="flex h-screen items-center justify-center">
      <h1>This is a credential protected Home page.</h1>
      {/* {session && (
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Sign Out
        </button>
      )} */}
      <form method="POST" action="/api/auth/signout">
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Sign Out
        </button>
      </form>
    </div>
  );
}


// // commented lines are used in client components 


