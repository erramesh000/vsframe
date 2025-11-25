"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./index.css";

export default function Insight() {
    const items = [
        {
            src: "/images/vsframe-3.jpg",
            alt: "VSFRAME ",
        },
        {
            src: "/images/vsframe-4.jpg",
            alt: "VSFRAME",
        },
        {
            src: "/images/vsframe-5.jpg",
            alt: "VSFRAME",
        },
        {
            src: "/images/vsframe-1.jpg",
            alt: "VSFRAME",
        },
        {
            src: "/images/vsframe-6.jpg",
            alt: "VSFRAME",
        },
        {
            src: "/images/vsframe-7.jpg",
            alt: "VSFRAME",
        },
        {
            src: "/images/vsframe-2.jpg",
            alt: "VSFRAME",
        },
        {
            src: "/images/vsframe-8.jpg",
            alt: "VSFRAME",
        },
    ];

    const [zoom, setZoom] = useState(null);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") setZoom(null);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <section className="ig-page" aria-label="Featured case studies">
            <div className="ig-inner">
                <header className="ig-header">
                    <h2 className="ig-title">Our Work</h2>
                    <p className="ig-sub">Quality craftsmanship across framing, drywall, decks, renovations, and more.</p>
                </header>
                <div className="ig-grid">
                    {items.map((item, i) => (
                        <figure key={i} className="ig-card">
                            <div className="ig-media">
                                <div
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => setZoom(item)}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setZoom(item); }}
                                    style={{ width: '100%', height: '100%', cursor: 'zoom-in' }}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt || 'VSFrame image'}
                                        fill
                                        sizes="(max-width: 900px) 100vw, 50vw"
                                        className="ig-img"
                                        priority={i < 2}
                                    />
                                </div>
                            </div>
                            {/* captions removed per request */}
                        </figure>
                    ))}
                </div>
            </div>

            {zoom && (
                <div className="ig-lightbox" role="dialog" aria-modal="true" onClick={() => setZoom(null)}>
                    <div className="ig-lightbox-inner" onClick={(e) => e.stopPropagation()}>
                        <button className="ig-lightbox-close" onClick={() => setZoom(null)} aria-label="Close image">×</button>
                        <img src={zoom.src} alt={zoom.alt || 'VSFrame image'} className="ig-lightbox-img" />
                    </div>
                </div>
            )}
        </section>
    );
}