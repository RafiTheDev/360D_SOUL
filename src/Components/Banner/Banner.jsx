export const Banner = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 flex items-center">
            <div className="lg:pr-10 ">
              <a
                href="/"
                aria-label="Go Home"
                title="Logo"
                className="inline-block mb-5"
              >
              </a>
              <h5 className="mb-4 text-4xl font-normal leading-none flex justify-center">
                Why Choose 360D Soul Ltd. ?
              </h5>
              <p className="mb-6 text-white flex justify-center">
                Welcome to 360D Soul Ltd, your partner in holistic business strategy and operations management solutions. At 360D Soul, we believe in nurturing business from every angle, ensuring they thrive in today's dynamic market enviroment. With a comprehensive suite of services, we empower organization to unlock their full potential and achieve sustainable growth. 
              </p>
              

            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      );
  };

export default Banner;