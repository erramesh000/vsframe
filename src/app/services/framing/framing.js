"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Framing() {
    const pathname = usePathname();
    const linkClass = (href) =>
        `block py-4 px-4 font-medium text-gray-700 ${pathname === href
            ? "bg-emerald-100 text-emerald-700 rounded-r-lg shadow-inner"
            : "hover:bg-emerald-50 hover:pl-8 transition"
        }`;

    return (
        <>
            {/* Hero Section */}
            <div
                className="relative h-64 md:h-96 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/vsframe-12.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
                        Precision Structural Framing
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Services */}
                    <aside className="md:w-1/3 w-full md:sticky md:top-50 h-fit">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="px-6 py-4 border-b">
                                <h2 className="text-xl font-semibold text-gray-800">Our Services</h2>
                            </div>
                            <ul className="divide-y">
                                <li>
                                    <Link href="/services/customdeck" className={linkClass("/services/customdeck")}>
                                        Custom Deck
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/framing" className={linkClass("/services/framing")}>
                                        Framing Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/drywall" className={linkClass("/services/drywall")}>
                                        Drywall Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/handyman" className={linkClass("/services/handyman")}>
                                        Handyman Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    {/* Main Service Details */}
                    <main className="md:w-2/3 w-full bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">Expert Framing Services for Every Project</h2>
                        <p className="mb-4 text-gray-700">
                            Framing is the backbone of any construction project — the structure that brings your vision to life. Whether you’re building a custom home, a laneway house, multifamily townhomes, or a low-rise building, professional framing ensures strength, stability, and precision. With expert craftsmanship and attention to detail, our team turns architectural plans into a solid, reliable framework for your dream project.
                        </p>
                        <img src="/images/vsframe-12.jpg" alt="VSFRAME CANADA" className="w-full h-48 object-cover rounded-lg mb-6" />

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Professional Framing Matters</h3>
                        <p className="mb-4 text-gray-700">
                            A well-executed frame sets the stage for everything that follows — from plumbing and electrical work to finishing touches. Poor framing can lead to costly delays, structural issues, and compromised safety. Choosing experienced framers guarantees:
                        </p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li>Structural integrity that meets or exceeds building codes</li>
                            <li>Precision and accuracy for seamless installation of walls, roofs, and floors</li>
                            <li>Efficiency, keeping your project on schedule and budget</li>
                            <li>Durability, ensuring your building stands the test of time</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Framing Services</h3>
                        <p className="mb-4 text-gray-700">
                            We specialize in all types of residential and low-rise commercial framing, tailored to your specific needs: <b>Custom Homes</b> - Every custom home starts with a solid frame. Our team works closely with architects and designers to ensure your home is built to exact specifications — delivering both beauty and structural soundness.
                        </p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li>Precise execution of complex designs</li>
                            <li>Accommodates unique floor plans, vaulted ceilings, and specialty features</li>
                            <li>Strong foundation for all interior and exterior finishes</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Laneway Homes & Secondary Suites</h3>
                        <p className="mb-4 text-gray-700">
                            Laneway homes require careful planning and precise construction in tight urban spaces. Our framing services optimize space, structural stability, and aesthetic appeal.
                        </p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li>Efficient use of limited lot space</li>
                            <li>Complies with municipal codes and zoning regulations</li>
                            <li>Supports modern, functional layouts</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Multifamily Townhomes</h3>
                        <p className="mb-4 text-gray-700">
                            Framing for multifamily developments demands experience and attention to detail. We handle repetitive layouts efficiently while maintaining structural integrity for multiple units.
                        </p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li>Consistent quality across all units</li>
                            <li>Designed for long-term durability and safety</li>
                            <li>Supports soundproofing and energy efficiency requirements</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Low-Rise Buildings</h3>
                        <p className="mb-4 text-gray-700">
                            Low-rise residential and commercial buildings require expert framing to withstand environmental stresses while providing a stable foundation for multiple floors.
                        </p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li>Reinforced structural systems for safety and longevity</li>
                            <li>Accurate alignment of floors, walls, and roof systems</li>
                            <li>Optimized for both performance and aesthetics</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us</h3>
                        <p className="mb-4 text-gray-700">
                            Our framing team combines experience, precision, and quality materials to deliver exceptional results on every project. We prioritize communication, safety, and efficiency, ensuring your project progresses smoothly from foundation to finish.
                        </p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li>Fully licensed and insured professionals</li>
                            <li>Skilled in all modern framing techniques and materials</li>
                            <li>Committed to meeting deadlines without compromising quality</li>
                            <li>Collaborative approach — we work with you, architects, and other trades</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Build with Confidence</h3>
                        <p className="mb-4 text-gray-700">
                            Whether it’s a custom home, laneway house, multifamily townhome, or low-rise building, expert framing sets the foundation for a project that lasts. Our precision, craftsmanship, and dedication to excellence ensure your structure is safe, strong, and built to exceed expectations.
                        </p>

                        <div className="text-xl md:text-2xl mb-4 text-center italic text-emerald-700">
                            Ready to start your project? Contact us today for professional framing services you can trust!
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}
