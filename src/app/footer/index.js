"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import greennew from "../images/VSFRAME.png";
import vsFrameCa from "../images/VSFRAMECA.png";
import vsFrameWork from "../images/VSFRAMEwork.png";
import "./index.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="fc-footer" role="contentinfo" aria-label="Site footer">
            <div className="fc-inner">
                {/* Left: Contact */}
                <div className="fc-col fc-contact" aria-label="Contact information">
                    <ul className="fc-list">
                        <li>
                            <span className="fc-ico" aria-hidden="true">
                                {/* phone */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z" /></svg>
                            </span>
                            <a href="tel:+16040000000" className="fc-link">(604) 000-0000</a>
                        </li>
                        <li>
                            <span className="fc-ico" aria-hidden="true">
                                {/* instagram */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 4a5 5 0 100 10 5 5 0 000-10zm4.5-.25a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z" /></svg>
                            </span>
                            <a href="https://instagram.com/VSFrameConstruction" className="fc-link" target="_blank" rel="noreferrer">@VSFrameConstruction</a>
                        </li>
                        <li>
                            <span className="fc-ico" aria-hidden="true">
                                {/* facebook */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0022 12z" /></svg>
                            </span>
                            <a href="https://facebook.com/VSFrameConstruction" className="fc-link" target="_blank" rel="noreferrer">/VSFrameConstruction</a>
                        </li>
                    </ul>
                    {/* Additional brand / certification logos */}
                    <div className="fc-logos" aria-hidden="true">
                        <div className="fc-logo-wrap fc-logo-wrap--ca">
                            <Image src={vsFrameCa} alt="VSFRAME Canada mark" width={120} height={120} className="fc-logo-img" />
                        </div>
                        <div className="fc-logo-wrapbc fc-logo-wrap--work">
                            <Image src={vsFrameWork} alt="WorkSafe BC mark" width={140} height={80} className="fc-logo-img" />
                        </div>
                    </div>
                </div>

                {/* Center: Badge + meta */}
                <div className="fc-col fc-center" aria-label="Business details">
                    <div className="fc-badge" aria-hidden="true">
                        <Image src={greennew} alt="VSFRAME logo" width={80} height={80} className="fc-badge-img" priority />
                    </div>

                    <ul className="fc-list fc-center-list">
                        <li>
                            <span className="fc-ico" aria-hidden="true">
                                {/* clock */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h5v-2h-4V6h-2v7z" /></svg>
                            </span>
                            M–F 9 am–5 pm
                        </li>
                        <li>
                            <span className="fc-ico" aria-hidden="true">
                                {/* document */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h7l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm7 1.5V8h4.5L13 3.5z" /></svg>
                            </span>
                            License #123456
                        </li>
                        <li>
                            <span className="fc-ico" aria-hidden="true">
                                {/* pin */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" /></svg>
                            </span>
                            Metro Vancouver, BC
                        </li>
                    </ul>
                </div>

                {/* Right: Quick links */}
                <nav className="fc-col fc-links" aria-label="Footer links">
                    <ul className="fc-list fc-links-list">
                        <li><Link className="fc-link" href="/service">Services</Link></li>
                        <li><Link className="fc-link" href="/insight">Projects</Link></li>
                        <li><Link className="fc-link" href="/about">Testimonials</Link></li>
                        <li><Link className="fc-link" href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="fc-bottom">
                <small>© {currentYear} VSFRAME. All rights reserved. <a href="https://www.haaditech.com/" id="haaditech" target="_blank" rel="noreferrer">Developed by Haaditech.</a></small>
            </div>
        </footer>
    );
}