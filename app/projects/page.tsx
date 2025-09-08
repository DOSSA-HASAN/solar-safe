import Link from "next/link";
import Image from "next/image";
import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Residential Roof Installation – Nairobi",
      description: "10kW solar system installed for off-grid use",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBdJH4CYrXD_Tzle7EeW2ejDIw7hdObCGRX4_7mQfZrwN5YhxPb4w-HgIv7IMTfmYfQ-7uvRtcan5gFLyW5wy2CES8KruQNMXRbGHy3YC9WW49qFFcQYvJyJqWCZRnCBf5ntt1_oJEzs1RX0OHw81ibeDp7wzKbIaNHa7XtpbZlVBCoJe88o7JYg95oqMi0Qx9W08QTkxf8Jgr9Yjii4OfXZT0JVntliBonm1yd6D2BWSXBqbkiuJx4mU4HUxnZkzPddAeeSFhLay_6",
      alt: "Residential Roof Installation in Nairobi",
    },
    {
      title: "Commercial Solar System – Mombasa",
      description: "50kW solar system for business",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDT3GrtNyMVcy2chBINrLAYPPCwwZ4kZ3zJY8VKtKrbwZ6NNGLSzMHaC_2pcqxTy2wK9ve3eHG5iQ20gTadCu1xaTk3weJ6o2QEx4gGhkJ8qMj5lckvAzkTUC1gcm-yOLHrUTAUv4s8pYsJkXBQMLZQlr8-iMHIr5gBgQlKSx_2DXnVsnHamDhc0CyG_81lWfbap4kHA4tcI6sNmHKBDWjsgwRR6Pb8lFGAi83HwqfKOKns0P170rPRMoriwwxYcaP1vKSa3sxbk5UD",
      alt: "Commercial Solar System in Mombasa",
    },
    {
      title: "Off-grid Solar Power – Rural Area",
      description: "5kW system for remote home",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAm99XWDbEJRY6r38F5554SRcYfLGU3bnrVNFLaQRmHiylFaGMhNW-9EFYIhBGLhIMxkOkA419eUaj327moD6F0v960P9akXX-QjEeGBa3yOGDEptFiU2OfPWllg2FQDu6g0pJSnfoCG_-1jP083RE0s88SNg7mu8MVJKSWPnrhb37rp8y5hzdmc-xLyKQmeIDO30LPtlr1XBvCtTCdTLxzxxSe13Ke3XuO677Yfsu8MK4Sz2jc1PHfojj4aaRboU0iOAFEwC_dCR1m",
      alt: "Off-grid Solar Power in Rural Area",
    },
    {
      title: "Hybrid Solar Solution – Urban Home",
      description: "15kW system with battery backup",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAUlDEJEy6-ZmVcF7mqJdpqY-wFteiJmlx8Yp0KGBQFqxRYi35fcEntSX8ptBTqdOPs9-WWHVfEnWz_28GD-tXyn7x20-P-FPKzr9dz7ZABjTfEZur2GOpv0beA7mSVOJz6GYX2Iax89m-bGmtqg3t2T6rRPUdPDH6lmzHhoO3_Fq8vHujpfQi5Yl8HNMAHIoUbDt8xKA3g3CwBKC9izlzNuBb8JVLL3YFyUXy48ypUUKogcyXeQaUuYNcnHPrt_WeCiQrQntblVisQ",
      alt: "Hybrid Solar Solution in Urban Home",
    },
    {
      title: "Solar Water Heating – Resort",
      description: "20kW system for hot water",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDkh7R1RwxEuyZz0jKJPjkHiXr78R0x4bzy9GSxWvXiT1-KtW345hZ3zfs-sguCCET2l8Xy0sffD36fRQtQC-wAXMLJ1UQGQKDzOw719OoAsj1vMxG6h2EacHc_QyJfLaiWLrfnVzBRaDU0eNPdqOz2DP8a2q3GyUwOKtFyNDjvbpJtyLzhpXvF8jwou2pFktgvUmS3ZOlkRDo1Ha7tRWIsqqHszg8XuXgFeDGQE0AuumUhB8jjcMOXfHYSeGXs6QDjAtJEUzTLKC-U",
      alt: "Solar Water Heating at a Resort",
    },
  ];

  return (
    <div className="bg-gray-50 font-poppins">
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore our successful solar installations across various sectors.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {projectData.map((project, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden">
              <div className="relative w-full h-40">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-gray-50 py-20 text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Want to be our next success story?
        </h2>
        <Link
          href={"/contact"}
          className="mt-15 px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        >
          Get in touch today
        </Link>
      </section>
    </div>
  );
};

export default Projects;
