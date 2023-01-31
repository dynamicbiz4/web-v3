import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="container max-w-6xl overflow-x-hidden scroll-smooth my-20">
      <div className="flex items-center justify-between p-12 gap-12 bg-neutral-900 sm:flex-col sm:items-start sm:gap-6 sm:p-8">
        <h2 className="text-2xl sm:text-xl">Have a Project in mind? Reach out to us. We can make something awesome together.</h2>

        <button className="btn w-64 sm:text-base sm:w-full">
          <Link href="contact-us">Let&apos;s Get Started!</Link>
        </button>
      </div>
    </section>
  );
};

export default Contact;
