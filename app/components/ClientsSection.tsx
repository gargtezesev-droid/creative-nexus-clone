import Image from "next/image";

const logos = [
  "/client1.png",
  "/client2.png",
  "/client3.png",
  "/client4.png",
];

export default function ClientsSection() {
  return (
    <section className="bg-black py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <p className="text-gray-400 text-sm mb-8">
          Trusted by leading brands
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Client logo"
              width={120}
              height={60}
              className="opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
