import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container max-w-6xl mt-6 dark:text-white">
      <div className="py-8 border-t border-gray-500 dark:border-neutral-500 flex items-start justify-between text-md sm:block sm:space-y-2 sm:text-center">
        <p>
          &copy; {new Date().getFullYear()} <span>Dynamic Biz</span>.
        </p>

        <div className="flex items-center gap-4 sm:justify-center">
          <p className="underline underline-offset-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
          <p className="underline underline-offset-4">
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
