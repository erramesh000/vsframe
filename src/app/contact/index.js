"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import greennew from "../images/VSFRAME.png";
import "./index.css";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle|sending|success|error
    const cardRef = useRef(null);
    const toastRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
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
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (status === "success" && toastRef.current) {
            toastRef.current.classList.add("visible");
            const t = setTimeout(() => toastRef.current.classList.remove("visible"), 2400);
            return () => clearTimeout(t);
        }
    }, [status]);

    function onChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 2200);
            return;
        }
        setStatus("sending");
        try {
            // TODO: replace with real API call
            await new Promise((r) => setTimeout(r, 900));
            setStatus("success");
            setForm({ name: "", email: "", company: "", message: "" });
            setTimeout(() => setStatus("idle"), 2400);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 2200);
        }
    }

    return (
        <div className="contactbg" id="contact">
            <main className="contact-page alt-two" aria-label="Contact">
                <div className="contact-bg-anim" aria-hidden="true" />

                <div className="contact-inner">
                    <section ref={cardRef} className="contact-card" aria-labelledby="contact-heading">
                        <h2 id="contact-heading">Start Your Sustainability Journey</h2>

                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            {/* <div className="row"> */}
                            <label className={`field ${form.name ? "filled" : ""}`}>
                                <span>Name</span>
                                <input name="name" value={form.name} onChange={onChange} type="text" autoComplete="name" />
                            </label>

                            <label className={`field ${form.email ? "filled" : ""}`}>
                                <span>Email</span>
                                <input name="email" value={form.email} onChange={onChange} type="email" autoComplete="email" />
                            </label>
                            {/* </div> */}

                            <label className={`field ${form.company ? "filled" : ""}`}>
                                <span>Company</span>
                                <input name="company" value={form.company} onChange={onChange} type="text" autoComplete="organization" />
                            </label>

                            <label className={`field ${form.message ? "filled" : ""}`}>
                                <span>Message</span>
                                <textarea name="message" value={form.message} onChange={onChange} rows={5} />
                            </label>

                            <div className="form-actions">
                                <button type="submit" className={`btn ${status === "sending" ? "loading" : ""}`} aria-live="polite">
                                    {status === "sending" ? "Sending…" : status === "success" ? "Sent" : "Send Message"}
                                </button>

                                <div className={`status ${status}`} role="status" aria-hidden={status === "idle"}>
                                    {status === "error" && <span className="err">Please complete required fields</span>}
                                </div>
                            </div>
                        </form>
                    </section>

                    <aside className="contact-info" aria-labelledby="contact-info-heading">
                        <div className="info-card">
                            <h3 id="contact-info-heading">Reach out to VSFrame today</h3>

                            <p>
                                <b>VSFrame</b> your trusted partner for framing, drywall, and composite decking solutions. We look forward to hearing from you and turning your vision into reality.
                            </p>
                            <p>
                                If you have questions about our services, want a customized quote, or need expert advice for your upcoming project, we encourage you to contact us today.
                            </p>
                            <p> VSFrame takes pride in understanding your vision and providing honest, reliable guidance tailored to your goals. We make communication easy, respond quickly, and handled with care and professionalism.
                            </p>
                            <div className="contact-card-brand" aria-hidden="true">
                                <Image src={greennew} alt="VSFRAME CANADA" width={160} className="brand-img" priority />
                            </div>
                        </div>
                    </aside>
                </div>

                <div ref={toastRef} className="contact-toast" aria-hidden={status !== "success"}>
                    {/* <strong>Thanks — we received your message</strong>
                    <span>We’ll get back to you within 2 business days.</span> */}
                </div>

                {/* Brand logos strip */}
                <div className="contact-logos" aria-hidden="true">
                    <Image src="/images/VSFRAMECA.png" alt="VSFRAME CANADA" width={120} height={120} className="brand-logo brand-logo--ca" />
                    <Image src="/images/VSFRAMEwork.png" alt="VSFRAME CANADA" width={140} height={140} className="brand-logo brand-logo--work" />
                </div>
            </main>
        </div>
    );
}