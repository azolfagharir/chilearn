import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import Header from "../component/Header";
const Home = () => {
  return (
    <>
      <div className="grid container  ">
        <div className="flex flex-col justify-center items-center min-h-screen ">
          <div className="absolute top-24 flex justify-center items-center">
            <img
              className="w-80 h-80 rounded-full"
              src="/my_increased.png"
              alt=""
            />
          </div>
          <div className="absolute mt-4 top-96  inset-0 flex flex-col justify-center items-center text-center md:mx-50 xl:mx-96">
            <h1 className="text-4xl" dir="rtl">
              صحبت کردن آسان شد!
            </h1>
            <br />
            <p>اولین پلتفرم آموزش فارسی به کودکان زیر 5 سال</p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="top-96   absolute min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-myFavorite text-center">رایگان، باحال</h1>
            <h1 className="text-myFavorite text-center">تاثیر گذار</h1>

            <ul className="mt-8 2xl:mb-8">
              <li className="mb-4">
                <Link
                  className="bg-myFavorite my_button text-white text-center block w-96 py-2"
                  to={PathConstants.SignUp}
                >
                  ثبت نام
                </Link>
              </li>
              <li>
                <Link
                  className="bg-myFavorite my_button text-white text-center block w-96 py-2"
                  to={PathConstants.Login}
                >
                  ورود
                </Link>
              </li>
            </ul>
          </div>
          <br className="hidden md:inline-block" />
          <br className="hidden md:inline-block" />
          <br className="hidden md:inline-block" />
          <br className="hidden 2xl:inline-block" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="text-myParagraph top-96 mx-8 text-center xl:mx-96 md:items-center md:mr-4 md:end-0 ">
            {" "}
            سایت چیلرن با ارائه ی محتوای جذاب و سرگرم کننده، به کودکان 2 تا 5
            سال کمک می کند تا{" "}
            <span className="text-myColorText">
              زبان فارسی را به طور طبیعی و آسان یاد بگیرند.
            </span>
          </p>
          <br />
          <div className="flex justify-center items-center h-full	">
            <img
              className="w-80 h-80 rounded-full "
              src="/image_forscience (1).png"
              alt="hello"
            />
          </div>
          <br />
          <p className="text-myParagraph mx-8 text-center">
            با ترانه های شاد، بازی های آموزنده و داستان های شیرین، فرزند شما در
            دنیای رنگارنگ زبان فارسی غرق خواهد شد و به طور ناخودآگاه مهارت های
            زبانی خود را تقویت خواهد کرد.
          </p>
          <br />
          <br />
          <div className="flex justify-center items-center h-full	">
            <img
              className="w-80 h-80 rounded-full "
              src="/image_formusicmain.png"
              alt="hello"
            />
          </div>
          <br />
          <p className="text-myParagraph mx-8 text-center">
            چیلرن همراهی مطمئن برای شما در مسیر آموزش زبان فارسی به فرزندتان
            است.
          </p>
          <br />
          <div className="block">
            <div className="flex justify-center items-center h-full w-full	">
              <img
                className="w-80 h-80 rounded-full block"
                src="/image_forprents.jpg"
                alt="hello"
              />
            </div>
          </div>
          <div className="container mx-auto flex justify-between items-center top-0 absolute w-full"></div>{" "}
        </div>
      </div>
    </>
  );
};

export default Home;
