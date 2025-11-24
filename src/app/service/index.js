"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import greennew from "../images/VSFRAME.png";
import "./index.css";

export default function Service() {
    const rootRef = useRef(null);
    const sliderRef = useRef(null);
    // Use existing public images for the slider (10 slides)
    const slideImages = [
        "/images/vsframe-1.jpg",
        "/images/vsframe-2.jpg",
        "/images/vsframe-3.jpg",
        "/images/vsframe-4.jpg",
        "/images/vsframe-5.jpg",
        "/images/vsframe-6.jpg",
        "/images/vsframe-7.jpg",
        "/images/vsframe-8.jpg",
        "/images/vsframe-9.jpg",
        "/images/vsframe-10.jpg",
    ];

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;
        const items = root.querySelectorAll("[data-reveal]");
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        items.forEach((it) => obs.observe(it));
        return () => obs.disconnect();
    }, []);

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;

        const tick = () => {
            const idx = Math.round(el.scrollLeft / el.clientWidth);
            const next = (idx + 1) % slideImages.length;
            el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
        };

        const id = setInterval(tick, 5000);

        // Pause on hover/touch; resume when leaving
        const pause = () => clearInterval(id);
        el.addEventListener("mouseenter", pause);
        el.addEventListener("touchstart", pause, { passive: true });

        return () => {
            clearInterval(id);
            el.removeEventListener("mouseenter", pause);
            el.removeEventListener("touchstart", pause);
        };
    }, [slideImages.length]);

    return (
        <>
            {/* Snap/scroll slider */}
            <section
                aria-label="Showcase"
                data-reveal
                style={{
                    position: "relative",
                    margin: "0 0 40px",
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                <button
                    type="button"
                    aria-label="Previous"
                    onClick={() => {
                        const c = sliderRef.current;
                        if (c) c.scrollBy({ left: -c.clientWidth, behavior: "smooth" });
                    }}
                    style={{
                        position: "absolute",
                        left: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 2,
                        border: "none",
                        background: "rgba(0,0,0,.45)",
                        color: "#fff",
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        cursor: "pointer",
                    }}
                >
                    ‹
                </button>

                <div
                    className="slides"
                    ref={sliderRef}
                    style={{
                        display: "flex",
                        overflowX: "auto",
                        scrollSnapType: "x mandatory",
                        scrollSnapStop: "always",
                        scrollBehavior: "smooth",
                        gap: 12,
                        borderRadius: 12,
                        height: 600,
                    }}
                >
                    {slideImages.map((src, idx) => (
                        <figure key={src} style={{ flex: "0 0 100%", scrollSnapAlign: "center", margin: 0 }}>
                            <Image
                                src={src}
                                alt="VSFRAME CANADA"
                                width={1280}
                                height={680}
                                priority={idx === 0}
                                style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: 12 }}
                            />
                        </figure>
                    ))}
                </div>

                <button
                    type="button"
                    aria-label="Next"
                    onClick={() => {
                        const c = sliderRef.current;
                        if (c) c.scrollBy({ left: c.clientWidth, behavior: "smooth" });
                    }}
                    style={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 2,
                        border: "none",
                        background: "rgba(0,0,0,.45)",
                        color: "#fff",
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        cursor: "pointer",
                    }}
                >
                    ›
                </button>
            </section>


            {/* Sections */}
        </>
    );
}