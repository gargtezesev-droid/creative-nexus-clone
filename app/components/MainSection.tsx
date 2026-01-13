import Image from "next/image";

export default function MainSection() {
  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We Build Digital <br /> Experiences That Convert
          </h1>

          <p className="text-gray-400 mb-8">
            Creative Nexus helps brands grow through digital marketing,
            branding and performance-driven design.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
            Get Started
          </button>
        </div>

        {/* RIGHT IMAGE (video ki jagah image) */}
        <div>
          <Image
            src="/hero.jpg"
            alt="Creative Agency"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
