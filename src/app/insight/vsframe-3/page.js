import Image from "next/image";

export default function Project() {
  return (
    <main className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mt-5">

      <div className="relative h-72 sm:h-96 md:h-[28rem] w-full group">
        <Image src="/images/vsframe37.jpg"
          alt="VSFRAME"
          fill
          sizes="100vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />


        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>


        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg max-w-4xl">
            Custom Pottery Studio Build in North Vancouver, BC
          </h1>
          <p className="text-amber-100 mt-3 text-lg md:text-2xl font-medium drop-shadow-md">
            Skylights, Cedar Soffits & Hardie Exterior
          </p>
        </div>
      </div>


      <div className="p-6 md:p-10 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-gray-600 text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-emerald-600 first-letter:mr-3 first-letter:float-left">
              This unique <b>pottery studio construction project in North Vancouver, British Columbia</b>, was designed to create a bright, functional, and inspiring workspace tailored for creative use. Located in the heart of the North Shore near <b>Vancouver</b>, this build combines high-quality materials with precise craftsmanship to deliver a durable and visually striking structure.
            </p>
            <p>
              The project included full <b>forming and structural framing</b>, with a focus on maximizing natural light—essential for a pottery and art studio environment. We installed large <b>4x4 skylights</b>, strategically placed to flood the interior with daylight, improving both aesthetics and usability throughout the space.
            </p>
            <p>
              For the exterior finishing, we used premium materials built to perform in the West Coast climate. The soffits were finished with beautiful <b>knotty Western Red Cedar</b>, adding warmth, texture, and a natural West Coast character. The building envelope was completed using the <b>James Hardie Architectural Collection</b>, known for its modern appearance, durability, and resistance to moisture, rot, and weathering—ideal for North Vancouver conditions.
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
                  <span className="text-gray-700 font-medium">Custom pottery studio construction in North Vancouver, BC</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Full forming and structural framing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Large 4x4 skylights for maximum natural light</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Knotty Western Red Cedar soffits for a premium finish</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Exterior cladding with James Hardie Architectural Collection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Designed for durability in Vancouver’s coastal climate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Clean, modern design with natural material accents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-10 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/vsframe37.jpg" alt="vsframe37" fill className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/vsframe40.jpg" alt="vsframe40" fill className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>



            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/vsframe44.jpg" alt="vsframe44" fill className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>


          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-gray-200">
          <div className="bg-gray-50 rounded-xl p-8 text-center max-w-3xl mx-auto shadow-inner">
            <svg className="w-10 h-10 mx-auto text-emerald-300 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            <p className="text-gray-600 italic text-lg md:text-xl font-medium">
              &quot;This project highlights our expertise in delivering <b>custom studio builds, exterior finishing, and detailed carpentry in North Vancouver and the Greater Vancouver area</b>, with a strong focus on both performance and design.&quot;
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}