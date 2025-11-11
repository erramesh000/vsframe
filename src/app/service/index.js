"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import greennew from "../images/VSFRAME.png";
import vsWork from "../images/VSFRAME.png";
import vsCa from "../images/VSFRAME.png";
import "./index.css";

export default function Service() {
    const rootRef = useRef(null);

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

    return (
        <main className="service-page" ref={rootRef} aria-labelledby="services-heading">
            {/* Hero */}
            <header className="service-hero" id="services" data-reveal>
                <div className="hero-content">
                    <h2 id="services-heading">🌱 Lorem ipsum dolor sit amet</h2>
                    <p className="service-lead">
                        Fusce interdum orci sit amet bibendum pulvinar. Quisque fermentum ultricies venenatis. In massa tellus, feugiat et fringilla sed, ultrices nec lectus. Suspendisse non magna quis mi dapibus euismod. Mauris consectetur id massa in finibus. Proin dapibus elementum mauris eu fermentum. Aliquam at est venenatis,

                        ultricies sapien vulputate, vulputate turpis. Mauris facilisis neque sit amet pretium elementum. Curabitur maximus sit amet ligula et sagittis.

                        Donec vel porttitor ipsum. Morbi gravida cursus est, eu cursus quam. Aenean eget enim dui. Curabitur in nulla ipsum. Curabitur venenatis, metus a iaculis euismod, leo libero feugiat nunc, in facilisis purus risus eget sapien. Maecenas vel massa erat. Sed porttitor ex id velit egestas bibendum. Sed suscipit ut neque quis blandit. Suspendisse auctor consequat nulla. Phasellus sem odio, volutpat sed magna ac, auctor elementum nibh.
                    </p>
                </div>
                <div className="hero-media" aria-hidden="true">
                    <span className="hero-accent" />
                    <Image src={greennew} alt="GRX Services" width={520} height={340} priority className="hero-img" />
                </div>
            </header>

            {/* Quick in-page navigation */}
            <nav className="service-quicknav" aria-label="On this page" data-reveal>
                <a href="#sustainability-consulting">Donec vehicula</a>
                <a href="#esg-advisory">vitae &amp; metus</a>
                <a href="#renewable-energy">Curabitur &amp; ipsum</a>
                <a href="#water-waste">facilisis &amp; risus</a>
                <a href="#education-capacity">Quisque interdum</a>
                <a href="#innovation-research">Vestibulum &amp; accumsan</a>
            </nav>

            {/* Sections */}
            <div className="service-sections">
                <section className="service-block" id="sustainability-consulting" data-reveal>
                    <div className="service-logo" aria-hidden="true">
                        <Image src={vsWork} alt="" width={120} height={120} />
                    </div>
                    <div className="sb-title"><span className="sb-icon">🍃</span><h3>1. Fusce interdum orci sit amet bibendum</h3></div>
                    <ul className="service-list">
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                    </ul>
                </section>

                <section className="service-block" id="esg-advisory" data-reveal>
                    <div className="service-logo" aria-hidden="true">
                        <Image src={vsCa} alt="" width={120} height={120} />
                    </div>
                    <div className="sb-title"><span className="sb-icon">🛡️</span><h3>2. Lorem ipsum dolor sit amet, consectetur </h3></div>
                    <ul className="service-list">
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                    </ul>
                </section>

                <section className="service-block" id="renewable-energy" data-reveal>
                    <div className="service-logo" aria-hidden="true">
                        <Image src={vsWork} alt="" width={120} height={120} />
                    </div>
                    <div className="sb-title"><span className="sb-icon">⚡</span><h3>3. Donec vel porttitor ipsum. Morbi gravida cursus est</h3></div>
                    <ul className="service-list">
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                    </ul>
                </section>

                <section className="service-block" id="water-waste" data-reveal>
                    <div className="service-logo" aria-hidden="true">
                        <Image src={vsCa} alt="" width={120} height={120} />
                    </div>
                    <div className="sb-title"><span className="sb-icon">💧</span><h3>4. Sed et magna vitae metus vehicula aliquet</h3></div>
                    <ul className="service-list">
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                    </ul>
                </section>

                <section className="service-block" id="education-capacity" data-reveal>
                    <div className="service-logo" aria-hidden="true">
                        <Image src={vsWork} alt="" width={120} height={120} />
                    </div>
                    <div className="sb-title"><span className="sb-icon">🎓</span><h3>5. Vestibulum a est rhoncus neque posuere accumsan</h3></div>
                    <ul className="service-list">
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                    </ul>
                </section>

                <section className="service-block" id="innovation-research" data-reveal>
                    <div className="service-logo" aria-hidden="true">
                        <Image src={vsCa} alt="" width={120} height={120} />
                    </div>
                    <div className="sb-title"><span className="sb-icon">💡</span><h3>6. consequat vel dolor quis, posuere ultrices metus</h3></div>
                    <ul className="service-list">
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                        <li>Sed et magna vitae metus vehicula aliquet sit amet ut sapien.</li>
                    </ul>
                </section>

                <section className="service-block" id="grx-advantage" data-reveal>
                    <p>
                        With GRX, businesses, governments, and institutions gain not just compliance however competitive
                        advantage, resilience, and purpose-driven growth.
                    </p>
                </section>

                {/* CTA Panel */}
                <section className="service-cta-block" aria-label="Get in touch" data-reveal>
                    <div className="cta-text">
                        <h3>Ready to start your sustainability journey?</h3>
                        <p>Talk to our experts about renewable energy, ESG programs, and transformation roadmaps.</p>
                    </div>
                    <Link className="cta-button" href="/contact">Contact Us</Link>
                </section>
            </div>
        </main>
    );
}