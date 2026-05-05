import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServiceSidebar() {
  const pathname = usePathname();
  const linkClass = (href) =>
    `block py-4 px-4 font-medium text-gray-700 ${pathname === href
      ? "bg-emerald-100 text-emerald-700 rounded-r-lg shadow-inner"
      : "hover:bg-emerald-50 hover:pl-8 transition"
    }`;
  return (
    <aside className="md:w-1/3 w-full md:sticky md:top-50 h-fit">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Our Services</h2>
        </div>
        <ul className="divide-y">
          <li>
            <Link href="/services/customdeck" className={linkClass("/services/customdeck")}>
              Custom Deck
            </Link>
          </li>
          <li>
            <Link href="/services/framing" className={linkClass("/services/framing")}>
              Framing Service
            </Link>
          </li>
          <li>
            <Link href="/services/drywall" className={linkClass("/services/drywall")}>
              Drywall Service
            </Link>
          </li>
          <li>
            <Link href="/services/handyman" className={linkClass("/services/handyman")}>
              Handyman Service
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}