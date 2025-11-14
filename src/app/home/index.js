"use client";
import Link from "next/link";
import "./index.css";
import { useState } from "react";
export default function Home() {
    const images = [
        "../images/IMG-20251111-WA0016.jpg",
        "../images/IMG-20251111-WA0018.jpg",
        "../images/IMG-20251111-WA0019.jpg",
        "../images/IMG-20251111-WA0020.jpg",
    ];
    const services = [
        { name: "Custom Deck", link: "customdeck", image: "../images/IMG-20251111-WA0016.jpg" },
        { name: "Framing Service", link: "framing", image: "../images/IMG-20251111-WA0018.jpg" },
        { name: "Drywall Service", link: "drywall", image: "../images/IMG-20251111-WA0019.jpg" },
        { name: "Handyman Service", link: "handyman", image: "../images/IMG-20251111-WA0020.jpg" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('../images/IMG-20251111-WA0024.jpg')" }}>
                <div className="absolute inset-0 backdrop-invert backdrop-opacity-10 flex items-center justify-center text-center">
                    <div className="text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-title">
                            Deck, Framing & Drywall  Contractor
                        </h1>
                        {/* <p className="text-lg md:text-xl mb-6">Custom deck construction that's built to a moral code</p> */}
                        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                            <button className="px-6 py-3 w-auto inline-flex bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
                                Get a Free Consultation
                            </button>
                            <button className="px-6 py-3 w-auto inline-flex bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                                Call Us Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="w-[90%] mx-auto bg-white mt-5 p-2 WCUs">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 text-center w-full">Why Choose Us?</h1>
                <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="md:h-auto p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <span className="feature-icon feature-icon--chat mb-3" aria-hidden="true">💬</span>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Communication</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Sharing the right information with the right people at the right time to make sure the project runs smoothly.</p>
                    </div>
                    <div className="md:h-auto p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <span className="feature-icon feature-icon--tools mb-3" aria-hidden="true">🛠️</span>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Craftsmanship</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Doing construction work with skill, care, and pride so that the final result looks good and lasts long.</p>
                    </div>
                    <div className="md:h-auto p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <span className="feature-icon feature-icon--shield mb-3" aria-hidden="true">🛡️</span>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Reliable and Cost Effective</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Ability to deliver work as promised — on time, within budget, and to the quality and safety standards.</p>
                    </div>
                </div></section>

            <div className="relative h-150 bg-black">
                <div className="relative h-full">
                    <img
                        src={images[currentIndex]}
                        alt="Slider Image"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 text-white rounded-full p-3 hover:bg-white/50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 text-white rounded-full p-3 hover:bg-white/50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <section className="w-[90%] mx-auto mt-5">
                <div className="rounded-2xl bg-gradient-to-tr from-gray-50 to-white shadow-[0_10px_40px_rgba(8,20,10,0.08)] p-4 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Image side */}
                        <div className="relative group order-2 md:order-1">
                            <span className="absolute -inset-6 bg-gradient-to-tr from-green-200/40 via-emerald-100/30 to-sky-200/40 blur-2xl rounded-3xl" aria-hidden="true" />
                            <img
                                src="../images/IMG-20251111-WA0024.jpg"
                                alt="VSFRAME project in progress"
                                className="relative z-10 w-full h-auto object-cover rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>

                        {/* Text side */}
                        <div className="order-1 md:order-2">
                            <p className="text-xs tracking-widest font-semibold text-emerald-700/80 mb-2">VSFRAME CONSTRUCTION</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Metro Vancouver’s Trusted Deck, Framing & Drywall Contractor</h2>
                            <p className="text-gray-700 mt-4">
                                At VSFRAME Construction, we specialize in custom deck building, framing, and drywall services for custom homes and multifamily projects across Metro Vancouver. Our goal is to bring lasting quality and craftsmanship to every project — enhancing each property’s strength, functionality, and aesthetic appeal.
                            </p>

                            <ul className="mt-4 grid gap-2 text-gray-700">
                                <li className="flex items-start gap-2"><span aria-hidden className="text-emerald-600">✔</span> Licensed, insured, and safety-first.</li>
                                <li className="flex items-start gap-2"><span aria-hidden className="text-emerald-600">✔</span> Custom decks, framing, and drywall experts.</li>
                                <li className="flex items-start gap-2"><span aria-hidden className="text-emerald-600">✔</span> On-time delivery and transparent pricing.</li>
                            </ul>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">Get a quote</a>
                                <a href="tel:+1-000-000-0000" className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-emerald-700 font-semibold shadow ring-1 ring-emerald-200 hover:bg-emerald-50 transition">Call us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full mx-auto bg-white mt-5 p-2">
                <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('../images/IMG-20251111-WA0024.jpg')" }}>
                    <div className="absolute inset-0 backdrop-invert backdrop-opacity-30 flex items-center justify-center text-center overflow-hidden">
                        <div className="text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Services
                            </h1>
                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <div className="w-full overflow-hidden">
                                    <div
                                        className="flex transition-transform duration-500 ease-in-out"
                                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                    >
                                        {/* Group images into slides with three items per slide */}
                                        {services.map((service, index) => (
                                            <div key={index} className="min-w-full flex justify-center gap-4">
                                                <div className="w-1/2 flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
                                                    <Link className="" href={`/services/${service.link}`}>
                                                        <img
                                                            src={service.image}
                                                            alt={`${service.name}`}
                                                            className="w-full h-100 object-cover rounded-lg"
                                                        />
                                                        <h3 className="text-2xl font-semibold text-center text-gray-700 mt-2">
                                                            {service.name}
                                                        </h3>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        onClick={handlePrev}
                                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-500 text-white rounded-full p-3 hover:bg-green-600 transition"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-500 text-white rounded-full p-3 hover:bg-green-600 transition"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}