import React from "react";

export default function Footer() {
  return (
    <footer className=" py-8 text-gray-50">
      <section className="container flex flex-col md:flex-row justify-between items-center px-12">
        <div className="flex flex-col gap-4  justify-between">
          <div className="md:w-44">
            <img src="/img/white-logo.png" alt="footer-logo" />
          </div>
          <div className="flex justify-evenly gap-8">
            <div>
              <svg
                width="36"
                height="30"
                className="w-7 h-7"
                viewBox="0 0 36 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.1342 2.01263C32.6919 3.02494 31.0951 3.79919 29.4051 4.30557C28.498 3.26777 27.2925 2.5322 25.9516 2.19835C24.6107 1.8645 23.1992 1.94848 21.9078 2.43893C20.6165 2.92937 19.5076 3.80263 18.7313 4.94058C17.955 6.07853 17.5486 7.42628 17.5671 8.80154V10.3002C14.9203 10.3685 12.2977 9.78438 9.9327 8.59989C7.56772 7.4154 5.53384 5.66731 4.0122 3.51129C4.0122 3.51129 -2.0122 16.9992 11.5427 22.9938C8.44093 25.0889 4.74591 26.1394 1 25.9911C14.5549 33.4844 31.122 25.9911 31.122 8.75658C31.1206 8.33914 31.0803 7.92272 31.0015 7.5127C32.5387 6.00429 33.6234 4.09983 34.1342 2.01263V2.01263Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div>
              <svg
                width="19"
                height="32"
                viewBox="0 0 19 32"
                className="w-7 h-7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5671 1H13.0488C11.0516 1 9.13615 1.78948 7.72392 3.19475C6.31168 4.60003 5.51829 6.506 5.51829 8.49336V12.9894H1V18.9841H5.51829V30.9734H11.5427V18.9841H16.061L17.5671 12.9894H11.5427V8.49336C11.5427 8.09589 11.7014 7.71469 11.9838 7.43364C12.2662 7.15258 12.6493 6.99469 13.0488 6.99469H17.5671V1Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div>
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                className="w-7 h-7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5915 1H8.53049C4.37151 1 1 4.35489 1 8.49336V23.4801C1 27.6185 4.37151 30.9734 8.53049 30.9734H23.5915C27.7504 30.9734 31.122 27.6185 31.122 23.4801V8.49336C31.122 4.35489 27.7504 1 23.5915 1Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.0853 15.0425C22.2712 16.2898 22.0571 17.5636 21.4735 18.6827C20.8899 19.8019 19.9665 20.7095 18.8346 21.2764C17.7027 21.8433 16.4201 22.0406 15.169 21.8403C13.918 21.6399 12.7622 21.0522 11.8662 20.1606C10.9702 19.269 10.3795 18.119 10.1782 16.8742C9.97692 15.6293 10.1752 14.353 10.7449 13.2267C11.3146 12.1005 12.2267 11.1816 13.3514 10.6009C14.4762 10.0202 15.7563 9.80714 17.0098 9.99209C18.2883 10.1807 19.472 10.7736 20.386 11.683C21.2999 12.5925 21.8957 13.7703 22.0853 15.0425Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.3446 7.74414H24.5155"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div>
              <svg
                width="33"
                height="31"
                viewBox="0 0 33 31"
                className="w-7 h-7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0855 9.99207C24.4821 9.99207 26.7806 10.9394 28.4753 12.6258C30.17 14.3121 31.1221 16.5992 31.1221 18.984V29.4747H25.0977V18.984C25.0977 18.1891 24.7803 17.4267 24.2154 16.8646C23.6505 16.3025 22.8844 15.9867 22.0855 15.9867C21.2866 15.9867 20.5204 16.3025 19.9555 16.8646C19.3906 17.4267 19.0733 18.1891 19.0733 18.984V29.4747H13.0489V18.984C13.0489 16.5992 14.001 14.3121 15.6956 12.6258C17.3903 10.9394 19.6888 9.99207 22.0855 9.99207V9.99207Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.02449 11.4907H1.00006V29.4747H7.02449V11.4907Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.01221 6.99467C5.67581 6.99467 7.02443 5.65272 7.02443 3.99733C7.02443 2.34195 5.67581 1 4.01221 1C2.34861 1 1 2.34195 1 3.99733C1 5.65272 2.34861 6.99467 4.01221 6.99467Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-between ">
          <div className="hidden md:flex">
            <form>
              <input
                type="text"
                className="p-2 md:w-80 focus:outline-none"
                placeholder="Your email here"
              />
              <button className="btn-primary px-3 py-2 ml-2 ">Subscribe</button>
            </form>
          </div>
          <div className="flex justify-around text-xs md:text-md mt-2 gap-8">
            <a href="/contact">Contact</a>
            <a href="/faqs">Faqs</a>
            <a href="/resources">Resources</a>
            <a href="/demo">Schedule Demo</a>
          </div>
        </div>
      </section>
      <section className="container px-12">
        <div className="mt-4 ">
          {" "}
          <hr className="text-gray-400" />
        </div>
      </section>
    </footer>
  );
}
