import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Saksham Sharma | Software Engineer",
  description:
    "Portfolio of Saksham Sharma, a software engineer focused on scalable backend systems, real-time dashboards, and product-driven web applications.",
  keywords: [
    "Saksham Sharma",
    "software engineer",
    "portfolio",
    "Next.js portfolio",
    "backend engineer",
    "real-time systems",
  ],
  authors: [{ name: "Saksham Sharma" }],
  openGraph: {
    title: "Saksham Sharma | Software Engineer",
    description:
      "Scalable backend systems, real-time dashboards, and thoughtfully built web products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham Sharma | Software Engineer",
    description:
      "Scalable backend systems, real-time dashboards, and thoughtfully built web products.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
