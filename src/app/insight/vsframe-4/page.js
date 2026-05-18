import Image from "next/image";

export default function Project() {
  return (
    <main className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mt-5">

      <div className="relative h-72 sm:h-96 md:h-[28rem] w-full group">
        <Image src="/images/vsframe30.jpg"
          alt="VSFRAME"
          fill
          sizes="100vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />


        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>


        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg max-w-4xl">
            Triple Garage with Laneway Home in Coquitlam, BC
          </h1>
          <p className="text-amber-100 mt-3 text-lg md:text-2xl font-medium drop-shadow-md">
            Full Structural Build
          </p>
        </div>
      </div>


      <div className="p-6 md:p-10 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-gray-600 text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-emerald-600 first-letter:mr-3 first-letter:float-left">
              This <b>1,400 sq. ft. triple garage with a laneway home in Coquitlam, British Columbia</b>, is a complete structural build designed for functionality, rental potential, and modern living. Located within the Greater <b>Vancouver</b> area, this project highlights our expertise in full-scope construction—from groundwork to framing.
            </p>
            <p>
              We handled all <b>forming, waterproofing, and draintile installation</b>, ensuring a solid and moisture-resistant foundation built to perform in the West Coast climate. Proper drainage and waterproofing are critical in <b>Coquitlam’s wet conditions</b>, and this build was executed with long-term durability in mind.
            </p>
            <p>
              The structure was framed to support both a spacious triple garage and a well-designed <b>laneway home above</b>, maximizing property value and usability. The upper living space includes:
            </p>
            <ul className="list-disc list-inside mb-2 text-gray-700">
              <li><b>Two bedrooms</b></li>
              <li><b>One full bathroom</b></li>
              <li><b>Fully functional kitchen</b></li>
              <li><b>Open-concept living room</b></li>
              <li><b>Private side access with dedicated staircase</b></li>
              <li><b>Outdoor balcony for added living space</b></li>
            </ul>
            <p>
              The thoughtful layout provides a comfortable, self-contained living unit—ideal for extended family or rental income—while maintaining full functionality of the garage below.
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
                  <span className="text-gray-700 font-medium">1,400 sq. ft. triple garage with laneway home</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Full forming, waterproofing, and draintile system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Structural framing for garage and residential space</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">2-bedroom, 1-bathroom laneway suite</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Kitchen, living room, and private entry access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Exterior balcony for additional outdoor space</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1 text-xl leading-none">•</span>
                  <span className="text-gray-700 font-medium">Built for durability in Coquitlam and Vancouver climate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-10 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/vsframe30.jpg" alt="vsframe15" fill className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/vsframe31.jpg" alt="vsframe16" fill className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/vsframe35.jpg" alt="vsframe17" fill className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/vsframe36.jpg" alt="vsframe18" fill className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>



          </div>
        </div>


        <div className="mt-12 pt-10 border-t border-gray-200">
          <div className="bg-gray-50 rounded-xl p-8 text-center max-w-3xl mx-auto shadow-inner">
            <svg className="w-10 h-10 mx-auto text-emerald-300 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            <p className="text-gray-600 italic text-lg md:text-xl font-medium">
              &quot;This project showcases our ability to deliver <b>laneway homes and garage builds in Coquitlam and the Greater Vancouver area</b>, combining structural integrity with smart, livable design.&quot;
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}