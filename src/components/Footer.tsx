import React from "react";

function Footer() {
  return (
    <div className="mt-4 flex items-center justify-between bg-gray-800 px-4 py-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          target="_parent"
          href="https://tailwindcss.com/"
          className="pointer text-white hover:text-teal-500"
        >
          <svg
            className="fill-current h-6 w-6"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
        </a>
      </div>
      <div className="flex items-center">
        <span className="flex justify-center mr-2 text-white font-normal text-xs">
          with
          <svg
            className="h-4 w-4 mx-1 inline-block text-teal-500 fill-current stroke-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.90831 3.5783 8.50903 2.9987 7.05 2.9987C5.59097 2.9987 4.19169 3.5783 3.16 4.60999C2.12831 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.12831 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          by impulse
        </span>
        <a
          target="_parent"
          href="https://github.com/impulse/tailwindcss-figma-plugin"
          className="pointer text-white hover:text-teal-500"
        >
          <svg
            className="stroke-current fill-current h-4 w-4"
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 19C3 20.5 3 16.5 1 16M15 22V18.13C15.0375 17.6532 14.9731 17.1738 14.811 16.7238C14.6489 16.2738 14.3929 15.8634 14.06 15.52C17.2 15.17 20.5 13.98 20.5 8.52C20.4997 7.12383 19.9627 5.7812 19 4.77C19.4559 3.54851 19.4236 2.19835 18.91 0.999999C18.91 0.999999 17.73 0.649999 15 2.48C12.708 1.85882 10.292 1.85882 8 2.48C5.27 0.649999 4.09 0.999999 4.09 0.999999C3.57638 2.19835 3.54414 3.54851 4 4.77C3.03013 5.7887 2.49252 7.14346 2.5 8.55C2.5 13.97 5.8 15.16 8.94 15.55C8.611 15.89 8.35726 16.2954 8.19531 16.7399C8.03335 17.1844 7.96681 17.6581 8 18.13V22"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Footer;
