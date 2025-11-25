"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Drywall() {
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
                style={{ backgroundImage: "url('/images/vsframe-4.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
                        Drywall, Taping & Finishing
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
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">Expert Drywall Services — Boarding &amp; Taping</h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2"></h3>
                        <p className="mb-4 text-gray-700">
                            A perfectly finished interior starts with professional drywall services. Whether you’re working on a custom home, renovation, multifamily townhome, or low-rise building, our team ensures smooth, flawless walls and ceilings from start to finish. From drywall boarding to taping and finishing, we combine precision, skill, and attention to detail to deliver exceptional results.
                        </p>

                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Why Professional Drywall Matters</h4>
                        <p className="mb-4 text-gray-700">
                            Drywall is more than just panels on a wall — it’s the foundation for paint, texture, and overall interior aesthetics. Poor installation or finishing can lead to cracks, uneven surfaces, or costly repairs. Choosing experienced drywall professionals ensures:
                        </p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li>Smooth, even surfaces ready for finishing</li>
                            <li>Structural integrity with proper fastening and alignment</li>
                            <li>Efficient installation, keeping your project on schedule</li>
                            <li>Durability, so your walls and ceilings last for years</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Drywall Services</h4>
                        <p className="mb-4 text-gray-700">We provide drywall services for residential and low-rise commercial projects, tailored to your needs:</p>

                        <h5 className="font-semibold text-gray-800 mt-2">Custom Homes &amp; Renovations</h5>
                        <p className="mb-2 text-gray-700">Every custom home deserves a flawless finish. Our boarding and taping services ensure your walls and ceilings are perfectly smooth and ready for paint, texture, or wallpaper.</p>
                        <p className="mb-3 text-gray-700"><strong>Key Benefits:</strong></p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li>Precision cutting and fitting for a professional look</li>
                            <li>Seamless joints and corners</li>
                            <li>Supports complex designs, vaulted ceilings, and specialty features</li>
                        </ul>

                        <h5 className="font-semibold text-gray-800 mt-2">Multifamily Townhomes</h5>
                        <p className="mb-2 text-gray-700">For multifamily developments, consistent quality is critical. We deliver efficient, reliable drywall installation across all units while maintaining high standards.</p>
                        <p className="mb-3 text-gray-700"><strong>Key Benefits:</strong></p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li>Uniform finish in every unit</li>
                            <li>Meets fire, sound, and building code requirements</li>
                            <li>Durable surfaces ready for painting or other finishes</li>
                        </ul>

                        <h5 className="font-semibold text-gray-800 mt-2">Low-Rise Buildings</h5>
                        <p className="mb-2 text-gray-700">Low-rise commercial and residential buildings require accuracy and efficiency. Our team handles large-scale drywall projects while maintaining superior quality.</p>
                        <p className="mb-3 text-gray-700"><strong>Key Benefits:</strong></p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li>Smooth, level walls and ceilings</li>
                            <li>Reinforced areas for added durability</li>
                            <li>Optimized workflow for on-time project completion</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Why Choose Us</h4>
                        <p className="mb-4 text-gray-700">Our drywall team combines experience, precision, and high-quality materials to deliver flawless results on every project. We prioritize safety, efficiency, and customer satisfaction, ensuring your project progresses smoothly from start to finish.</p>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li>Licensed and insured professionals</li>
                            <li>Expertise in modern drywall techniques</li>
                            <li>Reliable, on-time project completion</li>
                            <li>Clean, professional worksite management</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Achieve Flawless Interiors</h4>
                        <p className="mb-4 text-gray-700">Whether it’s a custom home, renovation, multifamily townhome, or low-rise building, expert drywall services provide the perfect foundation for beautiful, lasting interiors. Our boarding and taping expertise guarantees smooth walls and ceilings that enhance your space and elevate your home or building.</p>
                        <p className="text-gray-700">Start your project with precision and quality — contact us today for professional drywall services you can trust!</p>
                    </main>
                </div>
            </section>
        </>
    );
}
