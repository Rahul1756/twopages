"use client";
import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginButton() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center space-y-4 p-24">
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
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Sign in with Microsoft
        </button>
      )}
    </div>
  );
}
