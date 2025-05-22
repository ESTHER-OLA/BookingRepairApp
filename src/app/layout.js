import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AuthProvider } from "@/lib/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UrService",
  description: "Service Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            <Navbar></Navbar>
            <main>
              {children} <Toaster position="top-center" richColors />
            </main>
            <Footer></Footer>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
