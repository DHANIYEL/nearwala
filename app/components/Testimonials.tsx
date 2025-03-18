import Image from "next/image";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <div id="testimonials" className=" padding-y padding-x max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center">
        {/* Left side with background shape and phone image */}
        <div className="relative flex justify-center md:justify-start">
          {/* Background and image container */}
          <div className="relative w-full max-w-md aspect-square">
            {/* Background shape */}
            <Image
              src="/assets/bg-shape.png"
              alt="Background shape"
              fill
              className="object-contain"
            />

            {/* Image positioned at the bottom and slightly bigger */}
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="relative w-[110%] h-[110%] max-sm:w-[120%] max-sm:h-[120%]">
                {" "}
                {/* Slightly bigger than the background */}
                <img
                  src="/assets/testimonial-img.png"
                  alt="App screenshot"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Reviewers badge */}
          <div className="absolute bottom-0 -right-12 max-lg:-bottom-10 bg-white rounded-lg px-4 py-2 shadow-lg flex items-center gap-2">
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-sm font-medium">Our Reviewers</span>
              </div>
              <div className="flex -space-x-2">
                <Image
                  src="/assets/person-1.png"
                  alt="Reviewer"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/assets/person-2.png"
                  alt="Reviewer"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/assets/person-3.png"
                  alt="Reviewer"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <div className="flex items-center bg-red-500 text-white rounded-full w-10 h-10 justify-center text-xs font-bold">
                  12+
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with testimonial content */}
        <div className="space-y-6">
          <div className="uppercase text-red-500 font-medium tracking-wider text-sm">
            What they say
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customers Say About Us
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 space-y-4">
            <p className="text-gray-700 italic">
              "Nearwala is the best! Besides the amazing discounts, the app is
              so easy to use, and the savings are instant. I highly recommend
              Nearwala to anyone looking to save money while shopping locally."
            </p>

            <div className="flex items-center gap-4">
              <Image
                src="/assets/person-3.png"
                alt="Theresa Jordan"
                width={50}
                height={50}
                className="rounded-full"
              />

              <div>
                <div className="font-medium text-gray-900">Theresa Jordan</div>
                <div className="text-sm text-gray-500">Savvy Shopper</div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <Star className="w-5 h-5 fill-gray-200 text-gray-200" />
              <span className="ml-2 text-sm text-gray-500">4.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
