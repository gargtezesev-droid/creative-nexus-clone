export default function ContactSection() {
  return (
    <section id="contact" className="bg-black py-20 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Work Together
        </h2>

        <p className="text-gray-400 mb-10">
          Have a project in mind? Let’s talk.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="TEZESEV GARG"
            className="w-full p-3 rounded-md bg-[#121212] border border-gray-700 text-sm md:text-base"

          />
          <input
            type="email"
            placeholder="GARGTEZESEV@GMAIL.COM"
            className="w-full p-3 rounded-md bg-[#121212] border border-gray-700 text-sm md:text-base"

          />
          <textarea
            placeholder="SAP ABAP CONSULTANT"
            rows={4}
            className="w-full p-3 rounded-md bg-[#121212] border border-gray-700 text-sm md:text-base"

          />
          <button className="w-full bg-white text-black py-3 rounded-md font-semibold">
            Send Message
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-10">
          © 2026 Creative Nexus. All rights reserved.
        </p>

      </div>
    </section>
  );
}
