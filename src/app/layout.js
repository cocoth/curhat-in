import "@/css/globals.css";

export const metadata = {
  title: "CURHAT-IN",
  description: "Tidak ada masalah yang terlalu berat untuk di selesaikan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
