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
        { href: "./services/customdeck", label: "Services" },
        { href: "/insight", label: "Our Work" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="gn-header" role="banner">
            <div className="gn-inner">
                <Link href="/" className="gn-brand" aria-label="vsframe home">
                    <Image
                        src={vsframe}
                        alt="vsframe logo"
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
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <div className="gn-accent" aria-hidden="true" />
        </header>
    );
}