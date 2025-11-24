import "./globals.css";
import Header from "@/header";
import Footer from "@/app/footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>VSFrame | Red Seal Carpenter for Framing, Drywall &amp; Decking Services</title>
                <meta name="description" content="VSFrame offers expert Red Seal Carpenter services specializing in framing, drywall installation, and composite decking. Professional residential and commercial construction solutions that transform spaces with quality craftsmanship." />
                <meta name="keywords" content="VSFrame, Red Seal Carpenter, Framing Services, Drywall Installation, Composite Decking, Residential Construction, Commercial Construction, Carpentry Services, Home Renovation, Drywall Repair, Deck Builder" />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}