import "./styles/globals.scss";
import { Navbar } from "@/widgets/Navbar";
import { ReactNode } from "react";
import AuthProvider from "@/app/providers/AuthProvider/AuthProvider";
import { StoreProvider } from "@/app/providers/StoreProvider";
export const metadata = {
  title: "Promtopia",
  description: "Discover and share AI prompts",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AuthProvider>
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app">
              <Navbar />
              {children}
            </main>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
