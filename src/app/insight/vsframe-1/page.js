import Image from "next/image";

export default function Project() {
  return (
    <main className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mt-5">

      <div className="relative h-72 sm:h-96 md:h-[28rem] w-full group">
        <Image src="/images/vsframe-15.jpg"
          alt="VSFRAME"
          fill
          sizes="100vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />


        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>


        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg max-w-4xl">
            Custom Composite Deck Build in Burnaby, BC
          </h1>
          <p className="text-amber-100 mt-3 text-lg md:text-2xl font-medium drop-shadow-md">
            Trex Transcend Havana Gold
          </p>
        </div>
      </div>


      <div className="p-6 md:p-10 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-gray-600 text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-emerald-600 first-letter:mr-3 first-letter:float-left">
              This beautifully crafted <b>450 sq. ft. composite deck in Burnaby, British Columbia</b>, showcases a modern, low-maintenance outdoor living space designed for both style and durability. Built using premium <b>Trex Transcend® composite decking in Havana Gold</b>, this project highlights the perfect blend of functionality and contemporary design.
            </p>
            <p>
              The deck features a clean, seamless layout with integrated <b>built-in bench seating</b>, maximizing usable space while maintaining a sleek aesthetic. The rich, warm tones of Havana Gold complement the natural surroundings, creating an inviting outdoor area ideal for relaxing, entertaining, or enjoying year-round West Coast weather.
            </p>
            <p>
              Constructed to withstand the <b>coastal climate of Metro Vancouver</b>, this composite deck is resistant to moisture, mold, fading, and wear—making it an excellent long-term investment for homeowners in Burnaby and surrounding areas. Unlike traditional wood decking, Trex composite boards require minimal upkeep, eliminating the need for staining, sealing, or frequent repairs.
            </p>
          </div>


          <div className="lg:col-span-1">
            <div className="bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-100 shadow-sm h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b border-amber-200 pb-4">
                <svg className="w-6 h-6 mr-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Key Features
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">450 sq. ft. custom deck design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Premium Trex Transcend composite decking (Havana Gold)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Built-in corner bench seating for added functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Low-maintenance, eco-friendly materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Weather-resistant construction ideal for Vancouver’s climate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Clean, modern finish with hidden fasteners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="mt-12 pt-10 border-t border-gray-200">
          <div className="bg-gray-50 rounded-xl p-8 text-center max-w-3xl mx-auto shadow-inner">
            <svg className="w-10 h-10 mx-auto text-emerald-300 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            <p className="text-gray-600 italic text-lg md:text-xl font-medium">
              &quot;This project demonstrates our commitment to delivering <b>high-quality deck construction in Burnaby and the Greater Vancouver area</b>, combining expert craftsmanship with industry-leading materials.&quot;
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}