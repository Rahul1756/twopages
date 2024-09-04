"use client"; // Ensure this file is treated as a client component

import { SessionProvider } from 'next-auth/react';


 


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><title>Signup</title></head>
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
