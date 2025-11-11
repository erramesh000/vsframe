"use client";

import React, { useRef, useEffect } from "react";
import "./index.css";
export default function SlideSession() {
    const containerRef = useRef(null);
    const layersRef = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let rafId = null;
        const layers = layersRef.current;
        const pointer = { x: 0, y: 0 };
        const current = { x: 0, y: 0 };

        function onMove(e) {
            const rect = container.getBoundingClientRect();
            const clientX = (e.touches ? e.touches[0].clientX : e.clientX);
            const clientY = (e.touches ? e.touches[0].clientY : e.clientY);
            const nx = (clientX - rect.left) / rect.width - 0.5;
            const ny = (clientY - rect.top) / rect.height - 0.5;
            pointer.x = nx;
            pointer.y = ny;
        }

        function onLeave() {
            pointer.x = 0;
            pointer.y = 0;
        }

        function animate() {
            // smooth interpolation
            current.x += (pointer.x - current.x) * 0.12;
            current.y += (pointer.y - current.y) * 0.12;

            layers.forEach((el, i) => {
                if (!el) return;
                // depth: farther layers move less
                const depth = (i + 1) / layers.length;
                const tx = current.x * (18 + depth * 36) * (1 - depth * 0.6);
                const ty = current.y * (12 + depth * 24) * (1 - depth * 0.6);
                el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${1 + depth * 0.02})`;
            });

            rafId = requestAnimationFrame(animate);
        }

        // events
        container.addEventListener("mousemove", onMove, { passive: true });
        container.addEventListener("touchmove", onMove, { passive: true });
        container.addEventListener("mouseleave", onLeave);
        container.addEventListener("touchend", onLeave);

        animate();

        return () => {
            cancelAnimationFrame(rafId);
            container.removeEventListener("mousemove", onMove);
            container.removeEventListener("touchmove", onMove);
            container.removeEventListener("mouseleave", onLeave);
            container.removeEventListener("touchend", onLeave);
        };
    }, []);

    return (
        <section ref={containerRef} className="slide-session" role="region" aria-label="Hero">
            <div className="bokeh">
                <div ref={(el) => (layersRef.current[0] = el)} className="bokeh__layer layer--1" />
                <div ref={(el) => (layersRef.current[1] = el)} className="bokeh__layer layer--2" />
                <div ref={(el) => (layersRef.current[2] = el)} className="bokeh__layer layer--3" />
                <div ref={(el) => (layersRef.current[3] = el)} className="bokeh__layer layer--4" />
                <div ref={(el) => (layersRef.current[4] = el)} className="bokeh__layer layer--5" />
            </div>

            <div className="slide-content">
                <h1>Sustainable Solutions for a Greener Future</h1>
                <p>
                    Empowering industries, governments, and communities with innovative renewable energy,
                    ESG, and smart city solutions for a more resilient tomorrow.
                </p>
                <a className="cta" href="/contact">Get Started Today</a>
            </div>
        </section>
    );
}