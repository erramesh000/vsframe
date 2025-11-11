"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import greennew from "../images/VSFRAME.png";
import vsWork from "../images/VSFRAMEwork.png";
import vsCa from "../images/VSFRAMECA.png";
import "./index.css";

let currentYear = new Date().getFullYear();

const cols = {
    Services: [
        { href: "/services/renewable", label: "consectetur adipiscing" },
        { href: "/services/esg", label: "consectetur adipiscing" },
        { href: "/services/smart-cities", label: "consectetur adipiscing" },
        { href: "/services/climate", label: "consectetur adipiscing" },
        { href: "/services/supply-chain", label: "consectetur adipiscing" },
    ],
    Ourwork: [
        { href: "/blog", label: "consectetur adipiscing" },
        { href: "/podcast", label: "consectetur adipiscing" },
        { href: "/reports", label: "consectetur adipiscing" },
        { href: "/case-studies", label: "consectetur adipiscing" },
        { href: "/faq", label: "consectetur adipiscing" },
    ],
    Company: [
        { href: "/about", label: "consectetur adipiscing" },
        { href: "/team", label: "consectetur adipiscing" },
        { href: "/careers", label: "consectetur adipiscing" },
        { href: "/media", label: "consectetur adipiscing" },
        { href: "/contact", label: "consectetur adipiscing" },
    ],
};

export default function Footer() {
    return (
        <footer className="gn-footer" role="contentinfo" aria-label="Site footer">
            <div className="gn-footer-wave" aria-hidden="true" />

            <div className="gn-footer-inner">
                <div className="gn-foot-brand" tabIndex={-1}>
                    <Image src={greennew} alt="GreenNew logo" width={88} height={88} className="gn-foot-logo" priority />
                    <div>
                        <h3 className="gn-foot-title">VSFRAME CONSTRUCTION</h3>
                        <p className="gn-foot-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a facilisis magna.Praesent rhoncus nulla quis ex commodo vestibulum. Pellentesque vel egestas turpis. Donec laoreet orci a ex facilisis rhoncus
                        </p>

                        <div className="gn-social" aria-hidden="false" role="navigation" aria-label="Social links">
                            <a
                                href="https://www.instagram.com"
                                className="gn-social-link"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>

                            <a href="#" className="gn-social-link" aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v11H3zM9 9h3.8v1.5h.1c.5-.9 1.7-1.8 3.5-1.8C20.5 8.7 21 12 21 15.6V20h-4v-4.1c0-1-.03-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.3V20H9z" fill="currentColor" /></svg>
                            </a>
                        </div>

                        <div className="gn-accent-images" aria-hidden="true">
                            <Image src={vsWork} id="work" alt="VSFRAME Work emblem" className="gn-accent-image gn-accent-left" priority />
                            <Image src={vsCa} alt="VSFRAME CA emblem" width={120} height={120} className="gn-accent-image gn-accent-right" priority />
                        </div>
                    </div>
                </div>

                <div className="gn-foot-links" role="menu">
                    {Object.entries(cols).map(([heading, items], idx) => (
                        <div className="gn-foot-col" key={heading} style={{ ["--i"]: idx }}>
                            <h4 className="gn-foot-heading">{heading}</h4>
                            <ul>
                                {items.map((it) => (
                                    <li key={it.href}>
                                        <Link href={it.href} className="gn-foot-link">
                                            {it.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="gn-foot-bottom">
                <div className="gn-foot-bottom-inner">
                    <small>© {currentYear} VSFRAME. All rights reserved. <a href="https://www.haaditech.com/" id="haaditech" target="_blank">Developed by Haaditech.</a></small>
                    {/* <nav className="gn-foot-legal">
                        <Link href="/privacy" className="gn-foot-legal-link">Privacy Policy</Link>
                        <Link href="/terms" className="gn-foot-legal-link">Terms of Service</Link>
                        <Link href="/cookie" className="gn-foot-legal-link">Cookie Policy</Link>
                    </nav> */}
                </div>
            </div>
        </footer>
    );
}