import Image from "next/image";

const projects = [
  { img: "/work1.jpg", title: "Corporate Website" },
  { img: "/work2.jpg", title: "Brand Campaign" },
  { img: "/work3.jpg", title: "Landing Page Design" },
];

export default function PortfolioSection() {
  return (
    <section className="bg-[#0b0b0b] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={300}
                className="rounded-xl group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <span className="text-lg font-semibold">
                  {project.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
