import Image from "next/image";

const services = [
  {
    title: "Digital Marketing",
    desc: "Grow your brand visibility and reach the right audience.",
    img: "/service1.jpg",
  },
  {
    title: "Branding & Design",
    desc: "Build a strong, memorable brand identity.",
    img: "/service2.jpg",
  },
  {
    title: "Web Development",
    desc: "High-performance websites that convert visitors.",
    img: "/service3.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#121212] rounded-xl p-6 hover:bg-[#1a1a1a] transition"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
