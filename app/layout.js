// import "./globals.css";
// import LayoutWrapper from "@/components/LayoutWrapper";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <LayoutWrapper>{children}</LayoutWrapper>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "A modern Todo App built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
// import "./globals.css";
// import { ThemeProvider } from "@/components/ThemeProvider";
// import LayoutWrapper from "@/components/LayoutWrapper";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Todo App",
//   description: "A modern Todo App built with Next.js and Tailwind CSS",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
//           {/* Wrap all pages with your layout */}
//           <LayoutWrapper>{children}</LayoutWrapper>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
