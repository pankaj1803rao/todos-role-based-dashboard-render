// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const router = useRouter();

//   const roleMap = {
//     "admin@gmail.com": "admin",
//     "trainer@gmail.com": "trainer",
//     "faculty@gmail.com": "faculty",
//     "sales@gmail.com": "sales",
//     "manager@gmail.com": "manager",
//     "hr@gmail.com": "hr",
//     "user@gmail.com": "user",
//   };

//   const handleSubmit = () => {
//     const role = roleMap[email];

//     if (!role) {
//       alert("Invalid email — use admin@gmail.com etc.");
//       return;
//     }

//     localStorage.setItem("role", role);
//     document.cookie = `auth=true; path=/;`;

//     router.push("/attendance");
//   };

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <div className="p-6 bg-white shadow rounded w-80">
//         <h2 className="text-xl font-bold mb-4">Test Login</h2>

//         <input
//           className="w-full border p-2 mb-4"
//           placeholder="Enter email (admin@gmail.com)"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <button
//           className="w-full bg-blue-600 text-white p-2 rounded"
//           onClick={handleSubmit}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SignIn from "@/components/SignIn";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");

  // Role mapping for testing
  const roleMap = {
    "admin@gmail.com": "admin",
    "trainer@gmail.com": "trainer",
    "faculty@gmail.com": "faculty",
    "sales@gmail.com": "sales",
    "manager@gmail.com": "manager",
    "hr@gmail.com": "hr",
    "user@gmail.com": "user",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const role = roleMap[email];

    if (!role) {
      alert("Invalid email! Use admin@gmail.com / trainer@gmail.com etc.");
      return;
    }

    // Store role and a simple auth flag
    localStorage.setItem("role", role);
    document.cookie = `auth=true; path=/`;

    router.push("/attendance");
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-lg">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Welcome To My App
          </h1>
        </header>

        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md font-medium hover:opacity-90"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm mb-3 text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
        <SignIn />
      </div>
    </div>
  );
}
