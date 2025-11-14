"use client";

import React from "react";
import Image from "next/image";
import "./index.css";

export default function Insight() {
    const items = [
        {
            src: "/images/vsframe-3.jpg",
            alt: "Isometric mini-house concept with floating elements",
            caption: "Framing Service",
        },
        {
            src: "/images/vsframe-4.jpg",
            alt: "Sleek phone screen mockup with soft gradients",
            caption: "Drywall Service",
        },
        {
            src: "/images/vsframe-5.jpg",
            alt: "Person in VR headset with particles and teal background",
            caption: "Handyman Service",
        },
        {
            src: "/images/vsframe-1.jpg",
            alt: "Abstract bubbles composition in soft blue and purple",
            caption: "Custom Decks",
        },
        {
            src: "/images/vsframe-6.jpg",
            alt: "Mobile UX mockup with charts and cards",
            caption: "Renovations & Additions",
        },
        {
            src: "/images/vsframe-7.jpg",
            alt: "Profile of woman with yellow sculptural paper",
            caption: "Exterior Siding & Cladding",
        },
        {
            src: "/images/vsframe-2.jpg",
            alt: "Portrait with sculptural white fabric against dark background",
            caption: "Interior Painting",
        },
        {
            src: "/images/vsframe-8.jpg",
            alt: "Abstract composition of circular forms and device edges",
            caption: "Flooring & Finishes",
        },
    ];

    return (
        <section className="ig-page" aria-label="Featured case studies">
            <div className="ig-inner">
                <header className="ig-header">
                    <h2 className="ig-title">Our Services</h2>
                    <p className="ig-sub">Quality craftsmanship across framing, drywall, decks, renovations, and more.</p>
                </header>
                <div className="ig-grid">
                    {items.map((item, i) => (
                        <figure key={i} className="ig-card">
                            <div className="ig-media">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 900px) 100vw, 50vw"
                                    className="ig-img"
                                    priority={i < 2}
                                />
                            </div>
                            <figcaption className="ig-caption">{item.caption}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}