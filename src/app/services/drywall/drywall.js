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
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">Drywall Service</h2>
                        <p className="mb-4 text-gray-700">
                            From board hanging to Level 5 finishes, we deliver smooth, durable walls and ceilings. Our teams handle taping, mudding, sanding, corner beads, and textures while maintaining clean, contained work areas.
                        </p>
                        <img src="/images/vsframe-4.jpg" alt="Drywall" className="w-full h-48 object-cover rounded-lg mb-6" />

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Scope of Work</h3>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li>Board installation and soundproof assemblies</li>
                            <li>Taping, mudding, sanding (Levels 3–5)</li>
                            <li>Corner beads, returns, and patches</li>
                            <li>Texture matching and prime-ready handoff</li>
                        </ul>

                        <p className="text-gray-700">
                            We coordinate with painters and other trades to keep schedule and quality on track.
                        </p>
                    </main>
                </div>
            </section>
        </>
    );
}
