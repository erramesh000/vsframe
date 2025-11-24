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
                    <h1>About VSFrame</h1>
                    <p>
                        VSFrame is a trusted name in the construction industry, led by a highly skilled Red Seal Carpenter with years of hands-on experience in framing, drywall, and composite decking. We take pride in transforming residential and commercial spaces with craftsmanship that reflects precision, durability, and a genuine passion for building.
                    </p>
                    <p>
                        At VSFrame, every project begins with understanding the client’s needs, vision, and long-term goals. From structural framing that forms the backbone of a building to flawless drywall finishing that brings a room to life, our work is rooted in high standards and attention to detail. We believe that a project is not just about construction—it’s about creating a space that feels strong, functional, and visually appealing.
                    </p>
                    <p>
                        Our expertise extends to composite decking, where we design and build outdoor spaces that are both beautiful and built to last. Using advanced materials, we create decks that resist weather, wear, and time, giving homeowners and businesses long-lasting value with minimal maintenance.
                    </p>
                    <p>
                        Whether the project is a new home build, a renovation, or a commercial improvement, VSFrame approaches each task with professionalism, transparency, and a commitment to excellence. We understand deadlines, respect budgets, and maintain clear communication throughout the entire process, ensuring clients always know what to expect.
                    </p>
                    <p>
                        What sets VSFrame apart is not only technical expertise but also a genuine dedication to customer satisfaction. We believe that high-quality workmanship should be supported by honesty, reliability, and a strong work ethic. Every nail, cut, and finish is completed with pride, knowing our work becomes a lasting part of someone’s home or business.
                    </p>
                    <p>
                        When clients choose VSFrame, they’re choosing a partner who values their investment and treats their project as if it were our own. Whether it’s framing the structure of a future living space, installing smooth and seamless drywall, or crafting a modern composite deck, VSFrame delivers results that stand the test of time.
                    </p>
                    <p>
                        If you’re looking for craftsmanship backed by skill, experience, and integrity, VSFrame is ready to help bring your vision to life.
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