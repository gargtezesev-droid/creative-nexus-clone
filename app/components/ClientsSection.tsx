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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">

          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Client logo"
              width={120}
              height={60}
              className="mx-auto max-h-12 object-contain opacity-70 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
