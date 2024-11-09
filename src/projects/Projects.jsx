import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

const ProjectSection = () => {
  return (
    <div className="p-8">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold mb-4">Project Title</h2>
            <p className="text-lg text-gray-600 mb-4">
              Description of the project goes here. It could be about the features, technologies used, and more.
            </p>
            <p className="text-sm text-gray-500 mb-4">Tech Stack: React, Tailwind CSS, Vite</p>
            <a
              href="https://live-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-lg"
            >
              Live Link
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold mb-4">Project Title</h2>
            <p className="text-lg text-gray-600 mb-4">
              Description of the project goes here. It could be about the features, technologies used, and more.
            </p>
            <p className="text-sm text-gray-500 mb-4">Tech Stack: React, Tailwind CSS, Vite</p>
            <a
              href="https://live-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-lg"
            >
              Live Link
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <img src="project-image.jpg" alt="Project" className="w-full h-auto rounded-lg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectSection;
