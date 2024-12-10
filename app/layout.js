import "./globals.css";
import "@shopify/polaris/build/esm/styles.css";

export const metadata = {
  title: "Customize Discount Block",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
