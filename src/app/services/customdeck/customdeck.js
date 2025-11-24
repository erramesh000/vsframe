"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function CustomDeck() {
    const pathname = usePathname();
    const linkClass = (href) =>
        `block py-4 px-4 font-medium text-gray-700 ${pathname === href
            ? "bg-emerald-100 text-emerald-700 rounded-r-lg shadow-inner"
            : "hover:bg-emerald-50 hover:pl-8 transition"
        }`;

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/vsframe-1.jpg')" }}>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
                        Transform Your Outdoor Living
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
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">Custom Deck Service</h2>
                        <p className="mb-6 text-gray-700">
                            A deck is more than just a platform with railings — it’s an extension of your home. It’s where morning coffee tastes better, summer evenings feel longer, and get-togethers become unforgettable. With thoughtful design and expert craftsmanship, a custom deck can completely transform the way you enjoy your home and the outdoors.
                        </p>
                        <img src="/images/vsframe-1.jpg" alt="VSFRAME CANADA" className="w-full h-48 object-cover rounded-lg mb-6" />

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Choosing the Right Deck for Your Home</h3>
                        <p className="mb-4 text-gray-700">
                            When it comes to decking materials, the two most popular options are natural cedar and composite decking. Each offers its own unique advantages — the right choice depends on your style, lifestyle, and maintenance preferences.
                        </p>

                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-700 mb-1">Cedar Decks <span className="font-normal text-sm text-gray-500">— Timeless, Natural Beauty</span></h4>
                            <p className="mb-2 text-gray-700">
                                Cedar decking offers a classic, warm look that blends beautifully with any outdoor space. Naturally resistant to rot and insects, cedar’s rich color and distinct aroma bring character and charm to your deck.
                            </p>
                            <span className="font-semibold text-gray-700">Benefits of Cedar:</span>
                            <ul className="list-disc list-inside mb-2 text-gray-700">
                                <li>Naturally beautiful and aromatic</li>
                                <li>Resistant to decay and insects</li>
                                <li>Can be customized with stains and finishes</li>
                                <li>Provides a traditional, authentic wood feel</li>
                            </ul>
                            <p className="text-sm text-red-600 font-medium">
                                Maintenance Note: To preserve its color and durability, cedar should be sealed or stained regularly.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-700 mb-1">Composite Decks <span className="font-normal text-sm text-gray-500">— Durable, Low-Maintenance Luxury</span></h4>
                            <p className="mb-2 text-gray-700">
                                Composite decking is the modern choice for homeowners who want a beautiful, worry-free outdoor space that lasts for decades. Made from a blend of wood fibers and recycled plastics, composite boards are engineered to resist fading, staining, scratching, and mold — all without the need for sanding, painting, or sealing.
                            </p>
                            <span className="font-semibold text-gray-700">Why Choose Composite?</span>
                            <ul className="list-disc list-inside mb-2 text-gray-700">
                                <li>Virtually maintenance-free — just wash occasionally</li>
                                <li>Fade, stain, and scratch resistant</li>
                                <li>Won’t warp, crack, or splinter</li>
                                <li>Eco-friendly — made from recycled materials</li>
                                <li>Available in a wide range of colors and textures</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-700 mb-1">Premium Composite Options</h4>
                            <span className="font-semibold text-gray-700">Trex® Decking</span>
                            <p className="mb-2 text-gray-700">
                                Trex is one of the most recognized names in composite decking, offering eco-friendly boards made from 95% recycled materials. Their innovative capped design provides exceptional resistance to the elements.
                            </p>
                            <span className="font-semibold text-gray-700">Trex Warranty:</span>
                            <ul className="list-disc list-inside mb-2 text-gray-700">
                                <li>25–50 Year Limited Residential Warranty</li>
                                <li>25–50 Year Fade & Stain Coverage</li>
                                <li>Sustainable manufacturing process</li>
                            </ul>
                            <span className="font-semibold text-gray-700">TimberTech® & Azek® Decking:</span>
                            <p className="mb-2 text-gray-700">
                                TimberTech and Azek are known for their unmatched craftsmanship and innovation. TimberTech offers high-performance capped composite decking, while Azek (made from 100% PVC) provides the ultimate protection against moisture — perfect for coastal or humid climates.
                            </p>
                            <span className="font-semibold text-gray-700">TimberTech/Azek Warranty:</span>
                            <ul className="list-disc list-inside mb-2 text-gray-700">
                                <li>Lifetime Limited Product Warranty (Azek PVC)</li>
                                <li>50-Year Fade & Stain Warranty</li>
                                <li>Resistant to mold, mildew, and moisture</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <span className="font-semibold text-gray-700">Invest in Long-Term Value</span>
                            <p className="mb-2 text-gray-700">
                                Whether you’re drawn to the natural charm of cedar or the long-lasting convenience of composite, your new deck should reflect your lifestyle. Composite decking from Trex or TimberTech/Azek offers unbeatable durability and beauty with minimal upkeep — giving you more time to relax and enjoy your outdoor retreat.
                            </p>
                        </div>

                        <div className="text-xl md:text-2xl mb-4 text-center italic text-emerald-700">
                            Build your dream deck — beautiful, functional, and made to last.
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}