"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./index.css";
import greennew from "../images/VSFRAME.png"; // decorative - can be used in cards

const cards = [
    {
        id: "blog",
        title: "Weekly Blog",
        desc:
            "Stay updated with the latest trends, insights and analysis in renewable energy, ESG and sustainable development.",
        cta: "Coming Soon →",
        icon: "📝",
    },
    {
        id: "podcast",
        title: "Monthly Podcast",
        desc:
            "Listen to expert discussions on sustainability challenges, solutions and industry trends from thought leaders.",
        cta: "Coming Soon →",
        icon: "🎙️",
    },
    {
        id: "reports",
        title: "Quarterly Reports",
        desc:
            "Comprehensive analysis on sustainability metrics, market trends and regulatory developments.",
        cta: "Coming Soon →",
        icon: "📊",
    },
];

export default function Insight() {
    const rootRef = useRef(null);

    useEffect(() => {
        const root = rootRef.current;
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

    return (
        <main
            className="insight-page"
            ref={rootRef}
            aria-labelledby="insight-heading"
        >
            <header className="insight-header" id="insight">
                <h2 id="insight-heading">Sustainability Insights</h2>
                <p className="insight-lead">
                    Research, commentary and audio from the GRX team and partners.
                </p>
            </header>

            <section className="insight-grid" role="list">
                {cards.map((c, idx) => (
                    <article
                        key={c.id}
                        className="insight-card"
                        data-reveal
                        style={{ ["--i"]: idx }}
                        role="listitem"
                        tabIndex={0}
                        aria-labelledby={`card-${c.id}-title`}
                    >
                        <div className="card-hero" aria-hidden="true">
                            <div className="card-hero-bg" />
                            <div className="card-hero-icon" aria-hidden="true">
                                <span className="emoji">{c.icon}</span>
                            </div>
                        </div>

                        <div className="card-body">
                            <h3 id={`card-${c.id}-title`} className="card-title">
                                {c.title}
                            </h3>
                            <p className="card-desc">{c.desc}</p>
                            <a className="card-cta" href={`#${c.id}`}>
                                {c.cta}
                            </a>
                        </div>
                    </article>
                ))}
            </section>


            <section className="case-studies" aria-labelledby="case-heading" data-reveal>
                <div className="case-inner">
                    <h2 id="case-heading" className="case-title">Case Studies</h2>

                    <div className="case-hero" role="note" aria-live="polite">
                        <div className="case-hero-content">
                            <h3>Success Stories Coming Soon</h3>
                            <p>
                                We are currently working on exciting sustainability projects and will be sharing our case studies and
                                success stories here. Stay tuned for real-world examples of how we are driving sustainable transformation across industries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}