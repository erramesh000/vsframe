"use client";
import Link from "next/link";
import React from "react";
import ServiceSidebar from "@/components/ServiceSidebar";

export default function Handyman() {
    return (
        <>
            {/* Hero Section */}
            <div
                className="relative h-64 md:h-96 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/vsframe-3.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
                        Reliable Handyman Solutions
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Services */}
                    <ServiceSidebar />

                    {/* Main Service Details */}
                    <main className="md:w-2/3 w-full bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">Handyman Service</h2>
                        <p className="mb-4 text-gray-700">
                            Quick, dependable fixes for the tasks that stack up: repairs, installations, and small improvements done right the first time. We prioritize tidy work and minimal disruption to your home or business.
                        </p>
                        <img src="/images/vsframe-3.jpg" alt="VSFRAME CANADA" className="w-full h-48 object-cover rounded-lg mb-6" />

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Common Requests</h3>
                        <ul className="list-disc list-inside mb-4 text-gray-700">
                            <li>Trim and door adjustments, hardware installs</li>
                            <li>Caulking, minor drywall repairs, paint touch-ups</li>
                            <li>Fixture swaps and small carpentry</li>
                            <li>Maintenance punch lists and move-in ready prep</li>
                        </ul>

                        <p className="text-gray-700">Need something specific? Tell us the scope and a preferred time—we’ll make it easy.</p>
                    </main>
                </div>
            </section>
        </>
    );
}
