// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { roleMenus } from "@/lib/roles";

// export default function Sidebar() {
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     setRole(localStorage.getItem("role") || "user");
//   }, []);

//   const menus = roleMenus[role] || [];

//   return (
//     <aside className="w-60 bg-white h-full p-4 shadow">
//       <h2 className="text-lg font-bold capitalize mb-4">{role} Panel</h2>
//       <ul className="space-y-2">
//         {menus.map((m, i) => (
//           <li key={i}>
//             <Link
//               href={m.link}
//               className="block p-2 bg-gray-200 rounded hover:bg-gray-300"
//             >
//               {m.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { roleMenus } from "@/lib/roles";

// export default function Sidebar() {
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     const r = localStorage.getItem("role") || "user";
//     setRole(r);
//   }, []);

//   const menus = roleMenus[role] || [];

//   if (!role) return null;

//   return (
//     <aside className="w-64 min-h-screen bg-white shadow-md border-r p-4">
//       <h2 className="text-xl font-semibold capitalize mb-4">{role} Panel</h2>

//       <ul className="space-y-2">
//         {menus.map((m, i) => (
//           <li key={i}>
//             <Link
//               href={m.link}
//               className="block p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
//             >
//               {m.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { roleMenus } from "@/lib/roles";

export default function Sidebar() {
  const [role, setRole] = useState("");
  const router = useRouter();

  useEffect(() => {
    const r = localStorage.getItem("role") || "user";
    setRole(r);
  }, []);

  const menus = roleMenus[role] || [];

  if (!role) return null;

  return (
    <aside className="w-64 min-h-screen bg-white shadow-md border-r p-4">
      <h2 className="text-xl font-semibold capitalize mb-4">{role} Panel</h2>

      <ul className="space-y-2">
        {menus.map((m, i) => (
          <li key={i}>
            <button
              onClick={() => router.push(m.link)}
              className="w-full text-left block p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              {m.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
