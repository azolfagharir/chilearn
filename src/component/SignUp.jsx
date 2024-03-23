import Header from "./Header";
import React from "react";
import Questions from "./questions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function SignUp() {
  const [selectedOption, setSelectedOption] = useState({});

  // Handle change for a specific question
  const handleChange = (event, questionId) => {
    const option = event.target.value;
    setSelectedOption({
      ...selectedOption,
      [questionId]: option,
    });
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);
  const my_questions = [
    {
      id: "question1",
      question: "کدام یک از موارد زیر معنی 'مامان، بیا اینجا!' را می‌دهد؟",
      options: {
        option_1: "(الف) درخواست کمک",
        option_2: "(ب) بیان شادی",
        option_3: "(ج) پرسیدن سوال",
        option_4: "(د) هیچکدام",
      },
      correctAnswer: "(الف) درخواست کمک",
    },
    {
      id: "question2",
      question: "کودک شما به چه چیزی 'توپ' می‌گوید؟",
      options: {
        option_1: "(الف) به هر شیء گرد",
        option_2: "(ب) به اسباب ‌بازی مورد علاقه‌اش",
        option_3: "(ج) به چیزی که می‌تواند پرتاب کند",
        option_4: "(د) به هیچکدام",
      },
      correctAnswer: "(د) هیچکدام",
    },
    {
      id: "question3",
      question: "کدام جمله را کودک شما به درستی می‌گوید؟",
      options: {
        option_1: "(الف) 'من آب می‌خواهم'",
        option_2: "(ب) 'آب می‌خواهم من'",
        option_3: "(ج) 'من می‌خواهم آب'",
        option_4: "(د) 'آب من می‌خواهم'",
      },
      correctAnswer: "(الف) 'من آب می‌خواهم'",
    },
    {
      id: "question4",
      question: "کودک شما چند کلمه می‌تواند بگوید؟",
      options: {
        option_1: "(الف) کمتر از 10 کلمه",
        option_2: "(ب) 10 تا 20 کلمه",
        option_3: "(ج) 20 تا 50 کلمه",
        option_4: "(د) بیش از 50 کلمه",
      },
      correctAnswer: "(د) بیش از 50 کلمه",
    },
    {
      id: "question5",
      question: "کودک شما از چه جملاتی برای درخواست اسباب‌بازی استفاده می‌کند؟",
      options: {
        option_1: "(الف) اشاره به اسباب‌بازی",
        option_2: "(ب) گریه کردن",
        option_3: "(ج) گفتن 'اسباب‌بازی'",
        option_4: "(د) گفتن 'من اسباب‌بازی می‌خواهم'",
      },
      correctAnswer: "(د) گفتن 'من اسباب‌بازی می‌خواهم'",
    },
    {
      id: "question6",
      question: "کودک شما چه داستانی را می‌تواند تعریف کند؟",
      options: {
        option_1: "(الف) نام بردن اشیاء",
        option_2: "(ب) بیان یک جمله ساده",
        option_3: "(ج) تعریف یک اتفاق ساده",
        option_4: "(د) تعریف یک داستان کوتاه با جزئیات",
      },
      correctAnswer: "(ج) تعریف یک اتفاق ساده",
    },
    {
      id: "question7",
      question: "کودک شما ضمایر را به درستی به کار می‌برد؟",
      options: {
        option_1: "(الف) به ندرت",
        option_2: "(ب) گاهی اوقات",
        option_3: "(ج) بیشتر مواقع",
        option_4: "(د) همیشه",
      },
      correctAnswer: "(ج) بیشتر مواقع",
    },
    {
      id: "question8",
      question: "کودک شما از چه ساختارهایی برای جملات سوالی استفاده می‌کند؟",
      options: {
        option_1: "(الف) تغییر لحن صدا",
        option_2: "(ب) اضافه کردن 'ه' به آخر جمله",
        option_3: "(ج) استفاده از کلمات پرسشی مانند 'چه' و 'کجا'",
        option_4: "(د) هر سه مورد",
      },
      correctAnswer: "(ج) استفاده از کلمات پرسشی مانند 'چه' و 'کجا'",
    },
    {
      id: "question9",
      question: "کودک شما از چه ساختارهایی برای جملات منفی استفاده می‌کند؟",
      options: {
        option_1: "(الف) گفتن 'نه' قبل از جمله",
        option_2: "(ب) اضافه کردن 'ن' به آخر فعل",
        option_3: "(ج) استفاده از کلماتی مانند 'نمی‌توانم'",
        option_4: "الف و ب (د)",
      },
      correctAnswer: "الف و ب (د)",
    },
    {
      id: "question10",
      question: "کودک شما چه تعداد از حروف الفبا را به درستی تلفظ می‌کند؟",
      options: {
        option_1: "(الف) کمتر از 5 حرف",
        option_2: "(ب) 5 تا 10 حرف",
        option_3: "(ج) 10 تا 20 حرف",
        option_4: "(د) بیش از 20 حرف",
      },
      correctAnswer: "(د) بیش از 20 حرف",
    },
    {
      id: "question11",
      question: "کودک شما چقدر واضح و رسا صحبت می‌کند؟",
      options: {
        option_1: "(الف) به سختی قابل فهم",
        option_2: "(ب) گاهی اوقات قابل فهم",
        option_3: "(ج) بیشتر مواقع قابل فهم",
        option_4: "(د) همیشه قابل فهم",
      },
      correctAnswer: "(ج) بیشتر مواقع قابل فهم",
    },
    {
      id: "question12",
      question: "کودک شما از چه لحنی در صحبت کردن استفاده می‌کند؟",
      options: {
        option_1: "(الف) یکنواخت",
        option_2: "(ب) با تغییرات جزئی",
        option_3: "(ج) با تغییرات واضح",
        option_4: "(د) با لحن‌های مختلف برای بیان احساسات",
      },
      correctAnswer: "(ج) با تغییرات واضح",
    },
  ];
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div>
        <section className="bg-gray-50 dark:bg-gray-900 text-center mx-28 top-40 md:mx-72 xl:mx-96 ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img className="w-8 h-8 mr-2" src="/my_logo.png" alt="logo" />
              چیلرن
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  ساخت اکانت
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      ایمیل شما
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      رمز
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      تکرار رمز
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        قوانین را{" "}
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          href="#"
                        >
                          قبول می کنم
                        </a>
                      </label>
                    </div>
                  </div>
                  {my_questions.map((question, index) => (
                    <Questions
                      key={index}
                      question={question.question}
                      options={question.options}
                      selectedOption={selectedOption[question.id] || ""}
                      handleChange={(event) => handleChange(event, question.id)}
                      id={nanoid()}
                    />
                  ))}
                  <button
                    type="submit"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    ساخت اکانت
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    اکانت دارم{" "}
                    <Link
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      to="/component/Login"
                    >
                      (ورود)
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignUp;
