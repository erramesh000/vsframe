import "./globals.css";
import Header from "@/header";
import Footer from "@/app/footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}