import React from "react";
import HeadingSection from "../../components/HeadingSection";

const Testimonials = () => {
  return (
    <div className="bg-sky-50 max-w-screen-2xl container mx-auto py-20 px-5">
      <HeadingSection
        heading="What Our Clients Says"
        subheading="Testimonial"
      />
      {/* testimonial carousel */}
      <div>
        <div className="carousel w-full mt-6 md:mt-10">
          <div id="slide1" className="carousel-item relative w-full space-x-7 ">
            <div className="md:w-1/2 bg-white rounded-md ">
              <img
                src="/images/logos/logo1.png"
                className="size-28 mx-auto my-2 object-contain"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a
                elementum ut blandit sed pellentesque arcu. Malesuada in
                faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel
                interdum."
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <h3>John Dee</h3>
                  <p>CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-md space-x-7">
              <img
                src="/images/logos/logo2.png"
                className="size-28 mx-auto my-2 object-contain"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a
                elementum ut blandit sed pellentesque arcu. Malesuada in
                faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel
                interdum."
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <h3>John Dee</h3>
                  <p>CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full  space-x-7">
            <div className="md:w-1/2 bg-white rounded-md ">
              <img
                src="/images/logos/logo1.png"
                className="size-28 mx-auto my-2 object-contain"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a
                elementum ut blandit sed pellentesque arcu. Malesuada in
                faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel
                interdum."
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <h3>John Dee</h3>
                  <p>CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-md space-x-7">
              <img
                src="/images/logos/logo2.png"
                className="size-28 mx-auto my-2 object-contain"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a
                elementum ut blandit sed pellentesque arcu. Malesuada in
                faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel
                interdum."
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                  <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
                  <p className="text-sm text-gray-500">CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full  space-x-7">
            <div className="md:w-1/2 bg-white rounded-md ">
              <img
                src="/images/logos/logo1.png"
                className="size-28 mx-auto my-2 object-contain"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a
                elementum ut blandit sed pellentesque arcu. Malesuada in
                faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel
                interdum."
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <h3>John Dee</h3>
                  <p>CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-md space-x-7">
              <img
                src="/images/logos/logo2.png"
                className="size-28 mx-auto my-2 object-contain"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a
                elementum ut blandit sed pellentesque arcu. Malesuada in
                faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel
                interdum."
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <h3>John Dee</h3>
                  <p>CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full  space-x-7">
            <div className="md:w-1/2 bg-white rounded-md ">
              <img
                src="/images/logos/logo1.png"
                className="size-28 mx-auto my-2 object-contain"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a
                elementum ut blandit sed pellentesque arcu. Malesuada in
                faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel
                interdum."
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <h3>John Dee</h3>
                  <p>CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white rounded-md space-x-7">
              <img
                src="/images/logos/logo2.png"
                className="size-28 mx-auto my-2 object-contain"
              />
              <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a
                elementum ut blandit sed pellentesque arcu. Malesuada in
                faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel
                interdum."
              </p>
              <div className="flex flex-col items-center space-y-2">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <h3>John Dee</h3>
                  <p>CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
