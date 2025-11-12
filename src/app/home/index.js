"use client";
import "./index.css";
import { useState } from "react";
export default function Home() {
    const images = [
        "../images/IMG-20251111-WA0016.jpg",
        "../images/IMG-20251111-WA0018.jpg",
        "../images/IMG-20251111-WA0019.jpg",
        "../images/IMG-20251111-WA0020.jpg",
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
            <div className="absolute inset-0 backdrop-invert backdrop-opacity-30 flex items-center justify-center text-center">
                <div className="text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Deck, Framing & Interior Contractor
                    </h1>
                    {/* <p className="text-lg md:text-xl mb-6">Custom deck construction that's built to a moral code</p> */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
                            Get a Free Consultation
                        </button>
                        <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                            Call Us Today
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <section className="w-full bg-white mt-5 p-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 text-center w-full">Why Choose Us?</h1>
                <div className="max-w-full mx-auto flex flex-col md:flex-row items-stretch">
            <div className="md:w-1/2 md:h-auto p-6 m-2 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                </svg>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Communication</h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Sharing the right information with the right people at the right time to make sure the project runs smoothly.</p>
            </div>
            <div className="md:w-1/2 md:h-auto p-6 m-2 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                </svg>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Craftsmanship</h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Doing construction work with skill, care, and pride so that the final result looks good and lasts long.</p>
            </div>
            <div className="md:w-1/2 md:h-auto p-6 m-2 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                </svg>
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
            
        <section className="w-full bg-white mt-5 p-2">
            <div className="max-w-full mx-auto flex flex-col md:flex-row justify-center items-center">
                <div className="md:w-1/2 w-full h-64 md:h-auto">
                    <img
                    src="../images/IMG-20251111-WA0024.jpg"
                    alt="Test"
                    className="h-auto max-w-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 w-full flex items-center mt-5">
                    <div className="p-8 md:p-12 lg:p-16">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">VSFRAME CONSTRUCTION</h1>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Metro Vancouver’s Trusted Deck, Framing & Drywall Contractor</h3>
                        <p className="text-gray-700 mb-6">                                
                            At VSFRAME Construction, we specialize in custom deck building, framing, and drywall services for custom homes and multifamily projects across Metro Vancouver. Our goal is to bring lasting quality and craftsmanship to every project — enhancing each property’s strength, functionality, and aesthetic appeal.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-white mt-5 p-2">
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
            {images.map((image, index) => (
                <div key={index} className="min-w-full flex justify-center gap-4">
                    <div className="w-1/2 flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-100 object-cover rounded-lg"
                        />
                        <h3 className="text-2xl font-semibold text-center text-gray-700 mt-2">
                            {index === 0
                                ? "Custom Decks"
                                : index === 1
                                ? "Framing Services"
                                : index === 2
                                ? "Drywall Services"
                                : "Handyman Services"
                                }
                        </h3>
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