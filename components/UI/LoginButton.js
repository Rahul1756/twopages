"use client";
import { useSession, signIn, signOut } from 'next-auth/react';
import { FaAws } from 'react-icons/fa';

export default function LoginButton() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center space-y-4 p-24">
        <h4>Continue with</h4>
      {session ? (
        <>
          <p className="text-lg">Signed in as {session.user.email}</p>
          <button
            onClick={() => signOut()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Sign out
          </button>
        </>
      ) : (
        <button
        onClick={() => signIn('azure-ad')}
        className="flex items-center justify-content-between p-2 rounded border border-gray-300 bg-white "
      >
        <span className="text-gray-700 group-hover:text-white">Sign in with</span>
        <FaAws size={35} className="ml-3 mr-3 mt-1  group-hover:text-white self-center" />
      </button>
      
      
      )}
    </div>
  );
}
