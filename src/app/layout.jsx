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

                {/* Google Tag Manager - head script */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5KZWFCMR');`,
                    }}
                />
            </head>
            <body>
                {/* Google Tag Manager (noscript) - placed immediately after opening <body> */}
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5KZWFCMR" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
                </noscript>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}