import Head from "next/head";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import { Navigation } from "swiper";
import { useEffect } from "react";

const ContactPage = () => {
  const swiper = useSwiper();

  return (
    <>
      <Head>
        <title>Contact Us | Dynamic Biz</title>
      </Head>

      <main>
        <section className="container max-w-6xl text-lg my-28 space-y-10">
          <h2 className="text-7xl text-white font-bold sm:text-6xl">Let&apos;s Work Together</h2>
          <div className="mb-8 flex gap-10 md:flex-col-reverse">
            <div className="w-1/3 md:w-full">
              <h4 className="text-lg sm:text-md mb-1">Phone</h4>
              <p className="font-semibold w-fit">
                <a href="tel:+94767881256">+94 76 788 1256</a>
              </p>

              <h4 className="text-lg sm:text-md mt-4 mb-1">Email</h4>
              <p className="font-semibold w-fit">
                <a href="mailto:connect@hellodynamicbiz.com">connect@hellodynamicbiz.com</a>
              </p>

              <h4 className="text-lg sm:text-md mt-4 mb-1">Find Us On</h4>
              <ul className="flex items-center gap-4">
                <li>
                  <a href="https://www.facebook.com/dynamicbiz4" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-7 fill-white">
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/NewsDynamicbiz" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-7 fill-white">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@dynamicbiz4207" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-7 fill-white">
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dynamic.biz/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7 fill-white">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/82634231/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7 fill-white">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </a>
                </li>
              </ul>

              <h4 className="text-lg sm:text-md mt-4 mb-1">or Book a Meeting</h4>

              <a href="https://calendly.com/dynamicbiz/30min" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 261 63" className="h-8 mt-2">
                  <defs>
                    <path
                      id="reuse-0"
                      fill="#0AE8F0"
                      d="M47.879 22.867a12.19 12.19 0 0 1-1.96.166c-4.298 0-5.911-1.432-7.778-3.087-1.802-1.599-4.045-3.585-8.125-3.585h-2.439c-2.95 0-5.632 1.072-7.552 3.014-1.876 1.9-2.908 4.498-2.908 7.32v3.335c0 2.821 1.032 5.419 2.908 7.319 1.92 1.942 4.602 3.013 7.552 3.013h2.439c4.08 0 6.323-1.987 8.125-3.584 1.867-1.647 3.48-3.085 7.779-3.085.656 0 1.312.052 1.959.156.372-.927.648-1.89.824-2.874v-.05c-.92-.17-1.855-.255-2.791-.255-9.881 0-9.364 6.672-15.905 6.672h-2.438c-4.49 0-7.438-3.208-7.438-7.312v-3.343c0-4.102 2.949-7.31 7.438-7.31h2.438c6.54 0 6.027 6.67 15.905 6.67.936 0 1.87-.085 2.79-.257v-.045a14.842 14.842 0 0 0-.823-2.878Z"
                    />
                  </defs>
                  <path
                    fill="#006BFF"
                    d="M162.649 40.505c-1.374 2.141-4.028 3.788-7.663 3.788-5.009 0-8.832-2.745-9.747-7.592h22.562c.109-.695.164-1.396.165-2.1 0-7.537-5.269-14.216-13.408-14.216-8.4 0-14.107 6.193-14.107 14.164 0 8.07 5.763 14.163 14.43 14.163 5.385 0 9.477-2.425 11.845-6.094l-4.077-2.113ZM154.554 24.8c4.039 0 7.861 2.47 8.669 7.808h-17.984c.754-4.684 4.255-7.808 9.315-7.808ZM133.549 8.7h4.684v39.31h-4.684V8.7ZM194.028 31.479v16.53h-4.686V31.746c0-4.415-2.529-6.892-6.676-6.892-4.308 0-7.808 2.532-7.808 8.885v14.268h-4.685V21.09h4.685v3.876c1.992-3.177 4.955-4.576 8.73-4.576 6.298 0 10.445 4.2 10.445 11.092M224.543 8.7v39.31h-4.684v-4.633c-2.155 3.294-5.6 5.333-10.178 5.333-7.485 0-13.622-6.193-13.622-14.164 0-7.968 6.137-14.163 13.622-14.163 4.576 0 8.023 2.046 10.178 5.331V8.701h4.684Zm-4.684 25.846c0-5.492-4.147-9.639-9.584-9.639-5.386 0-9.532 4.147-9.532 9.639 0 5.492 4.146 9.64 9.532 9.64 5.433 0 9.584-4.148 9.584-9.64ZM228.321 8.7h4.684v39.31h-4.684V8.7ZM129.885 21.089v26.92H125.2v-4.632c-2.155 3.294-5.6 5.333-10.176 5.333-7.486 0-13.626-6.193-13.626-14.164 0-7.968 6.14-14.162 13.626-14.162 4.576 0 8.021 2.045 10.176 5.33V21.09h4.685ZM125.2 34.546c0-5.492-4.146-9.639-9.586-9.639-5.384 0-9.53 4.147-9.53 9.64 0 5.491 4.146 9.64 9.53 9.64 5.435 0 9.586-4.149 9.586-9.64Z"
                  />
                  <path
                    fill="#006BFF"
                    d="M94.451 42.828c-7.555 2.788-15.939-1.078-18.725-8.632-2.788-7.554 1.076-15.938 8.63-18.726a14.582 14.582 0 0 1 14.311 2.42 14.375 14.375 0 0 1 2.22 2.292l4.053-2.964C98.355 8.61 86.036 6.97 77.427 13.554c-8.608 6.586-10.25 18.903-3.664 27.512 6.585 8.61 18.904 10.25 27.513 3.664l.087-.066-2.697-4.266a14.758 14.758 0 0 1-4.215 2.43ZM255.616 21.089v15.279c0 4.942-2.873 8.07-7.26 8.07-4.388 0-7.565-3.128-7.565-8.07v-15.28h-4.74v14.823c0 7.766 4.841 12.808 12.305 12.808 6.455 0 7.463-4.084 7.463-4.186v5.498c0 5.447-2.37 8.522-7.312 8.522a7.278 7.278 0 0 1-7.247-6.29l-4.236 1.482a11.78 11.78 0 0 0 11.491 9.096c7.665 0 11.857-5.046 11.857-12.81V21.09h-4.756ZM38.14 36.772c-1.8 1.597-4.049 3.584-8.125 3.584h-2.437c-2.95 0-5.633-1.07-7.552-3.014-1.876-1.9-2.91-4.498-2.91-7.32v-3.334c0-2.822 1.034-5.42 2.91-7.319 1.919-1.943 4.603-3.013 7.552-3.013h2.437c4.082 0 6.324 1.985 8.124 3.582 1.87 1.648 3.482 3.087 7.782 3.087.656 0 1.31-.052 1.958-.156l-.016-.039a14.635 14.635 0 0 0-.902-1.857l-2.875-4.979a14.764 14.764 0 0 0-12.785-7.38h-5.75a14.764 14.764 0 0 0-12.786 7.38l-2.875 4.98a14.773 14.773 0 0 0 0 14.764l2.875 4.978a14.764 14.764 0 0 0 12.786 7.381h5.75a14.764 14.764 0 0 0 12.785-7.381l2.875-4.97c.344-.598.646-1.218.902-1.858l.016-.035a11.913 11.913 0 0 0-1.958-.165c-4.3 0-5.912 1.43-7.782 3.085"
                  />
                  <path
                    fill="#006BFF"
                    d="M30.016 19.377h-2.437c-4.49 0-7.44 3.207-7.44 7.31v3.336c0 4.105 2.95 7.31 7.44 7.31h2.437c6.541 0 6.028-6.67 15.905-6.67a15.05 15.05 0 0 1 2.79.257c.3-1.696.3-3.432 0-5.13-.92.171-1.854.258-2.79.257-9.881 0-9.364-6.67-15.905-6.67Z"
                  />
                  <path
                    fill="#006BFF"
                    d="M54.386 33.358a13.782 13.782 0 0 0-5.673-2.439v.05a14.842 14.842 0 0 1-.824 2.873c1.694.262 3.302.925 4.69 1.932 0 .013-.008.029-.013.045-4.121 13.344-18.283 20.823-31.628 16.701C7.593 48.4.114 34.238 4.237 20.892 8.358 7.547 22.518.068 35.863 4.191a25.289 25.289 0 0 1 16.703 16.701c0 .015.008.032.013.046a10.791 10.791 0 0 1-4.69 1.929c.37.93.646 1.893.824 2.877a.26.26 0 0 0 0 .047 13.798 13.798 0 0 0 5.673-2.437c1.617-1.198 1.304-2.551 1.059-3.351C50.83 5.042 34.965-3.347 20.003 1.266 5.043 5.879-3.347 21.747 1.266 36.708c4.613 14.96 20.481 23.348 35.441 18.736a28.35 28.35 0 0 0 18.738-18.736c.245-.801.558-2.153-1.059-3.35Z"
                  />
                  <use href="#reuse-0" />
                  <use href="#reuse-0" />
                </svg>
              </a>
            </div>

            <form className="w-2/3 md:w-full h-full space-y-12 text-base" action="https://formspree.io/f/mkneaplp" method="POST">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                <div className="flex mb-6 space-x-3">
                  <div className="w-full md:w-1/2 md:mb-0">
                    <label htmlFor="firstName">First Name*</label>
                    <input className="appearance-none block w-full border-b bg-inherit py-2 outline-none" id="grid-first-name" type="text" name="firstName" placeholder="Bruce" required />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label htmlFor="lastName">Last Name*</label>
                    <input className="appearance-none block w-full border-b bg-inherit py-2 outline-none" id="grid-last-name" type="text" name="lastName" placeholder="Wayne" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label htmlFor="email">Email*</label>
                    <input className="appearance-none block w-full border-b bg-inherit py-2 outline-none" id="email" type="email" name="mail" placeholder="bruce@waynecorp.com" required />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="text-xl font-semibold" htmlFor="service">
                  Which services do you need?*
                </label>

                <div className="space-y-1 mt-4">
                  <div className="flex items-center pl-4 border">
                    <input id="landing-page" type="radio" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                    <label for="landing-page" className="w-full py-2 ml-2">
                      Landing Page
                    </label>
                  </div>
                  <div className="flex items-center pl-4 border">
                    <input id="business-web" type="radio" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                    <label for="business-web" className="w-full py-2 ml-2">
                      Business Website
                    </label>
                  </div>
                  <div className="flex items-center pl-4 border">
                    <input id="ecommerce-web" type="radio" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                    <label for="ecommerce-web" className="w-full py-2 ml-2">
                      eCommerce Website
                    </label>
                  </div>
                  <div className="flex items-center pl-4 border">
                    <input id="custom-solution" type="radio" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                    <label for="custom-solution" className="w-full py-2 ml-2">
                      Custom Solution
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="deadline" className="text-xl font-semibold mb-4">
                  And when do you need this for?*
                </label>
                <p className="text-sm">(Minimum of 2 weeks is needed for development.)</p>
                <input type="date" className="block bg-inherit border-b py-2 w-fit outline-none" for="deadline" />
              </div>

              <div>
                <label htmlFor="budget" className="text-xl font-semibold mb-4">
                  What is the budget range for your project?*
                </label>
                <div className="mt-4">
                  <input type="number" className="bg-inherit py-2 border-b w-28 outline-none" for="budget" min={35000} placeholder="35000" />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="text-xl font-semibold mb-4" htmlFor="description">
                      Anything else to share about the project?
                    </label>
                    <textarea
                      className="h-auto block w-full border-b bg-inherit py-2 outline-none"
                      id="description"
                      name="message"
                      placeholder="I would like to ask you..."
                      rows={6}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="md:flex md:items-center">
                  <div className="md:w-1/3">
                    <button className="mt-8 bg-gradient-to-r from-orange-600 to-red-600 px-6 pt-3 pb-2 text-xl font-semibold" type="submit">
                      Send
                    </button>
                  </div>
                  <div className="md:w-2/3"></div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
