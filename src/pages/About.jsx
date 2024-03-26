const About = () => {
  return (
    <>
      <div className=" top-20 absolute w-72 ml-4 md:w-80 lg:w-96 lg:ml-16 md:ml-8   2xl:ml-60 2xl:absolute bg-white shadow-xl rounded-lg text-gray-900   ">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32 "
            src="/Babak.jpg"
            alt="Woman looking front"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">بابک کرم پور</h2>
          <p className="text-gray-500">بکند دولوپر</p>
        </div>
        <div>
          <p className="text-center" dir="rtl">
            عاشق برنامه نویسی بکند به خصوص c# هستم
          </p>
        </div>
        <div className="p-4 border-t mx-8 mt-2">
          <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
            <a target="_blank" href="https://github.com/Babak2Sk">
              visit
            </a>
          </button>
        </div>
      </div>

      <div className="top-20 absolute  w-72 mr-4 md:w-80 md:mr-8 lg:w-96 lg:mr-16 xl:mr-32 bg-white shadow-xl rounded-lg text-gray-900 end-0 2xl:mr-60">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32"
            src="/Amir-reza.jpg"
            alt="Woman looking front"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">امیر رضا ذوالفقاری</h2>
          <p className="text-gray-500">فرانتند دولوپر</p>
        </div>
        <div>
          <p className="text-center">عاشق طراحی سایت هستم به خصوص react</p>
        </div>
        <div className="p-4 border-t mx-8 mt-2">
          <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
            <a target="_blank" href="https://github.com/azolfagharir">
              visit
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
export default About;
