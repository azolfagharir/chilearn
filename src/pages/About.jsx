const About = () => {
  return (
    <div className="flex flex-wrap justify-center bg-white">
      <div className="w-72 mr-4 ml-4 mx-auto md:mr-16 lg:w-80 md:w-76 xl:w-96 md:ml-8 lg:ml-16 xl:ml-20  lg:mx-8 2xl:ml-60 mb-8 top-16">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover object-center"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
          <div className="p-6 text-center">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover object-center"
              src="/Amir-reza.jpg"
              alt="Amir Reza Dhoalfaghari"
            />
            <h2 className="text-xl font-semibold">امیر رضا ذوالفقاری</h2>
            <p className="text-gray-500">فرانتند دولوپر</p>
            <p className="mt-2 text-sm">عاشق طراحی سایت هستم به خصوص React</p>
            <div className="mt-4">
              <a
                href="https://github.com/azolfagharir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition duration-300"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-72 ml-4 mr-4 md:ml-16 md:w-76 lg:ml-60 lg:w-80 lg:mx-8 xl:w-96 xl:ml-80 2xl:ml-96 mb-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover object-center"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
          <div className="p-6 text-center">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover object-center"
              src="/Babak.jpg"
              alt="Babak Karampour"
            />
            <h2 className="text-xl font-semibold">بابک کرم پور</h2>
            <p className="text-gray-500">بکند دولوپر</p>
            <p className="mt-2 text-sm">
              عاشق برنامه‌نویسی بکند به خصوص C# هستم
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/Babak2Sk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition duration-300"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
