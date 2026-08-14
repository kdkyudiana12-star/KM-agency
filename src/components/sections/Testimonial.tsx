import Image from "next/image";

const CLIENT_LOGOS = [
  { src: "/clients/the-den.jpg", alt: "The Den" },
  { src: "/clients/subcontinental-kitchen.jpg", alt: "Subcontinental Kitchen" },
  { src: "/clients/brie.jpg", alt: "Brie Restaurant" },
  { src: "/clients/burger-city.jpg", alt: "Burger City" },
  { src: "/clients/wm.jpg", alt: "Client logo" },
];

export default function Testimonial() {
  return (
    <section aria-label="Clients" className="overflow-hidden bg-void py-24 md:py-28">
      <p className="mb-14 text-center font-sans text-xs font-extralight uppercase tracking-[0.28em] text-ash md:mb-16">
        Trusted across the region
      </p>
      <div className="flex w-max animate-[marquee_24s_linear_infinite]">
        {[0, 1].map((loop) => (
          <div key={loop} className="flex items-center gap-14 pr-14" aria-hidden={loop === 1}>
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={`${loop}-${logo.src}`}
                className="h-20 w-20 shrink-0 overflow-hidden rounded-xl md:h-24 md:w-24"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
