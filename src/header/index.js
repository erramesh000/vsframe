"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./index.css";
import { usePathname } from "next/navigation";
import vsframe from "../app/images/VSFRAME.png";

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // close mobile menu on resize > mobile or when route changes
    useEffect(() => {
        function onResize() {
            if (window.innerWidth > 768) setOpen(false);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => setOpen(false), [pathname]);

    const menu = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About us" },
        { href: "/services/customdeck", label: "Services" },
        { href: "/insight", label: "Our Work" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="gn-header" role="banner">
            <div className="gn-inner">
                <Link href="/" className="gn-brand" aria-label="vsframe home">
                    <Image
                        src={vsframe}
                        alt="VSFRAME CANADA"
                        className="gn-logo"
                        width={200}
                        height={200}
                        priority
                    />
                </Link>

                <nav className={`gn-nav ${open ? "open" : ""}`} role="navigation">
                    {menu.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`gn-link ${isActive ? "active" : ""}`}
                                aria-current={isActive ? "page" : undefined}
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <button
                    className={`gn-burger ${open ? "open" : ""}`}
                    onClick={() => setOpen((s) => !s)}
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    type="button"
                >
                    <svg
                        className="gn-icon hamburger"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <rect x="3" y="6" width="18" height="2" rx="1" />
                        <rect x="3" y="11" width="18" height="2" rx="1" />
                        <rect x="3" y="16" width="18" height="2" rx="1" />
                    </svg>

                    <svg
                        className="gn-icon close"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <path d="M6 6 L18 18 M6 18 L18 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className="gn-accent" aria-hidden="true" />
        </header>
    );
}