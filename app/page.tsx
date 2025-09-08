import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="px-10 py-10 max-w-[1440px] w-full m-auto">
      {/* Hero Section */}
      <div className="relative w-full h-screen lg:h-96">
        <div className="absolute inset-0 bg-cover bg-center">
          <Image
            src="/hero-bg.jpg"
            alt="Solar panel field"
            fill
            priority
            className="object-cover rounded-lg"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl w-full lg:text-5xl font-bold mb-4">
            Powering a Brighter Future with Solar Energy
          </h1>
          <p className="text-md lg:text-lg max-w-2xl mb-8">
            Harness the sun&apos;s energy to reduce your carbon footprint and
            save on electricity bills. We offer customized solar solutions for
            homes and businesses.
          </p>
          <Link
            href="/products"
            className="bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us?</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We are committed to providing high-quality solar solutions tailored to
          your needs. Our experienced team ensures a seamless installation
          process and ongoing support.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Sustainable Energy</h3>
            <p className="text-gray-600">
              Reduce your environmental impact with clean, renewable energy.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Customized Solutions</h3>
            <p className="text-gray-600">
              We design solar systems to fit your specific energy requirements.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Reliable Performance</h3>
            <p className="text-gray-600">
              Our solar panels are built to last, providing consistent power for
              years to come.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We offer a range of solar services to meet your energy needs, from
            residential installations to large-scale commercial projects.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Residential Solar */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIcEs8FsmCM1fmp2O2Y2K9INu82I--20a27GAP67rf-YDTVg7-4YsGUcPz6kzF4ZkzIGXUcnLSR7Z6dh-XWDnGooa-M2DSkb-KBM2lPyPo9XA0HW0D82OrSH_GXymEEq82oIBKtW_Uj31o2KoM0Ms-VK3U2WNCA2tTrilcHzfG0yy09X-C42tlwZ9sZbAKgQmM6_K_96Tw4msQvFBq7B2CSArsYwMSG3wRY_sc9paikLcfILPgjI7t_KOaflVSKb8ys_QIKjLRdTw"
                  alt="Residential solar panels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Residential Solar</h3>
                <p className="text-gray-600">
                  Power your home with clean energy and reduce your electricity
                  costs.
                </p>
              </div>
            </div>

            {/* Commercial Solar */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXQDrPuFJSKOYaznSpz9sAzakY9TiEmTOZCxmkjUtzsEQnlN_Druq4ld71XkNHNHIA-zt_yBm8HMPx-cDYfYcwh8RYvqq_nywUNTHcX8yjpm9_dQAWbZ8Hn4hJur-g1ZLeZD5cbfuy3zH4NkD2qTl1dRe2jSJZbS7bV3Bdhm6LmmhCwB-gcyVoyHBqESWaG0t3hPZmlMFCykY5CTDPVwwYunmwbWPRLrI_TPnxxVBhZqChb0zFZTubgSqNAiMBPmRG2VVfPF2NE4w"
                  alt="Commercial solar panels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Commercial Solar</h3>
                <p className="text-gray-600">
                  Optimize your business&apos;s energy consumption with our
                  commercial solar solutions.
                </p>
              </div>
            </div>

            {/* Solar Farms */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ3KajZsX0YiUbfK2M1cb1d1kx-B0lLC4T_dFJyECDDStz44vdUC7a-RnA2LLkFuaQpBQzSX3Xwbi-33YJsjEEWEO6fKafI3erYGjPZ8vbe0U3HBNkx4uwMjpgB3Tk1yadwhIZlxyyKPSyQ918L9S-a-4UwOhfNj1WGRsUiz77F2Avxk_OkcO0EA_Mip6NVnCq-72PejA6x7UPpCSS1N4gxt3Ir6LgRERYk_ybQr4QdIpQnUUSLxO1wyWf49AuFnOqOCac9d004tE"
                  alt="Large solar farm"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Solar Farms</h3>
                <p className="text-gray-600">
                  Invest in large-scale solar energy production with our solar
                  farm expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
