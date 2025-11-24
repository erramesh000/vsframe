// ...existing code...
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./index.css";
import greennew from "../images/VSFRAME.png";

export default function About() {
    const containerRef = useRef(null);

    useEffect(() => {
        // intersection reveal
        const root = containerRef.current;
        if (!root) return;
        const items = root.querySelectorAll("[data-reveal]");
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("show");
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        items.forEach((it) => obs.observe(it));
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        // gentle mouse parallax for accent
        const el = containerRef.current;
        if (!el) return;
        const accent = el.querySelector(".about-accent");
        let raf = 0;
        const pos = { x: 0, y: 0, tx: 0, ty: 0 };
        function onMove(e) {
            const rect = el.getBoundingClientRect();
            const cx = (e.clientX ?? (e.touches && e.touches[0].clientX)) - rect.left;
            const cy = (e.clientY ?? (e.touches && e.touches[0].clientY)) - rect.top;
            pos.x = (cx / rect.width - 0.5) * 2;
            pos.y = (cy / rect.height - 0.5) * 2;
            if (!raf) raf = requestAnimationFrame(frame);
        }
        function frame() {
            pos.tx += (pos.x - pos.tx) * 0.08;
            pos.ty += (pos.y - pos.ty) * 0.08;
            if (accent) accent.style.transform = `translate3d(${pos.tx * 18}px, ${pos.ty * 12}px, 0)`;
            raf = 0;
        }
        el.addEventListener("mousemove", onMove, { passive: true });
        el.addEventListener("touchmove", onMove, { passive: true });
        return () => {
            el.removeEventListener("mousemove", onMove);
            el.removeEventListener("touchmove", onMove);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <main ref={containerRef} className="about-page">
            <div className="about-accent" aria-hidden="true" id="about" />

            <div className="about-inner">
                <div className="about-left" data-reveal>
                    <h1>About GRX</h1>

                    <h2>Our Mission</h2>
                    <p>
                        To accelerate the transition towards a sustainable future by providing strategic consulting, education, and technological solutions in renewable energy, ESG, and smart cities.

                        We aim to create measurable impact through innovation, collaboration, and capacity building—empowering businesses and communities to thrive while preserving the planet.
                    </p>

                    <h2>Our Vision</h2>
                    <p>
                        To be a global leader in driving sustainable transformation by empowering industries, governments,
                        and communities with innovative solutions for a greener, more resilient future.
                    </p>
                </div>

                <aside className="about-right" data-reveal>
                    <div className="about-card">
                        <Image src={greennew} alt="VSFRAME CANADA" width={520} height={360} className="about-hero-img" priority />
                    </div>

                    <div className="about-quick">
                        <div className="quick-item">
                            <strong>Values</strong>
                            <span>Integrity • Innovation • Impact</span>
                        </div>
                        <div className="quick-item">
                            <strong>Focus</strong>
                            <span>Renewables • ESG • Smart Cities</span>
                        </div>
                        <div className="quick-item">
                            <strong>Global Reach</strong>
                            <span>Projects & partners worldwide</span>
                        </div>
                    </div>
                </aside>
            </div>

        </main>
    );
}
// ...existing code...