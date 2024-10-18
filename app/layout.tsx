import type { Metadata } from "next";
import { Toaster } from "sonner";
import "@/styles/globals.css";
import { Provider } from "@/providers/Provider";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Awesome Prometheus Toolkit",
  description: "A collection of alerting rules for Prometheus",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        href: "/favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-dvh flex-col">
        <Provider>
          <div className="flex flex-1 flex-col overflow-auto">
            <Header />
            <main className="flex flex-1 flex-col overflow-hidden">{children}</main>
            <Footer />
          </div>
        </Provider>

        <Toaster duration={2000} position="top-center" />
      </body>
    </html>
  );
}
