import React from "react";

export default function About() {
  return (
    <div className="grid  grid-cols-2  my-24 gap-4">
      <div className="order-2 col-span-2 md:col-span-1  flex justify-center items-center">
        <div className="w-40 h-80 md:w-60 border border-gray-400 p-2">
          <img src="img/about-1.png" className="h-full  object-contain" />
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 md:order-2">
        <div>
          <p className="text-xl font-semibold">Instant Account Linking</p>
          <p className="mt-4 mb-8 text-gray-700">
            Our widget directly connects with utility provider and streamline
            account linking experience.
          </p>
        </div>
        <div className="flex md:flex-col  py-2  md:gap-8">
          <div className=" flex flex-col md:flex-row justify-center gap-4 items-center">
            <div className="flex flex-row  justify-center">
              <svg
                width="80"
                height="94"
                viewBox="0 0 80 114"
                fill="none"
                className="w-16 h-16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.6202 71.6624C78.4435 71.4871 78.2534 71.3338 78.0501 71.2155C75.186 69.4279 71.9198 68.5253 68.6535 68.5253C64.132 68.5253 59.6149 70.2341 56.1674 73.6516L53.0382 76.7492V35.0601C53.0382 30.2405 49.0603 26.2972 44.1985 26.2972C39.3366 26.2972 35.3588 30.2405 35.3588 35.0601V54.3383C33.7455 52.3754 31.3146 51.096 28.5611 51.096C26.6473 51.096 24.8837 51.7182 23.4385 52.7478L4.40217 63.6707C1.77236 65.1954 0 67.9952 0 71.2243V85.6347C0 101.303 12.8087 114 28.6141 114C36.2693 114 43.204 111.003 48.3355 106.149L48.3399 106.188L48.8305 105.702C48.8393 105.693 48.8482 105.684 48.8526 105.68L78.6158 76.1709C79.8755 74.9222 79.8755 72.9111 78.6202 71.6624ZM45.2858 102.972C40.7554 107.253 34.8328 109.61 28.6141 109.61C15.275 109.619 4.41985 98.8535 4.41985 85.6304V71.2199C4.41985 69.6776 5.24636 68.2799 6.63419 67.4782L26.0108 56.3099C26.5412 55.9331 27.4163 55.4775 28.5566 55.4775C30.3246 55.4775 31.4295 56.4983 31.9334 57.1073L39.7786 66.6325V35.0601C39.7786 32.6459 41.7631 30.6787 44.1985 30.6787C46.6338 30.6787 48.6183 32.6459 48.6183 35.0601V78.8611C48.6183 80.7319 49.8117 82.3005 51.478 82.9183C52.1807 83.1811 52.9719 83.0103 53.5023 82.4845L59.2878 76.7492C61.7895 74.2693 65.1132 72.9067 68.6491 72.9067C70.6424 72.9067 72.5916 73.3449 74.3684 74.1861L45.2858 102.972Z"
                  fill="#071630"
                />
                <rect
                  x="9.28052"
                  y="33"
                  width="17"
                  height="4"
                  rx="1"
                  fill="#071630"
                />
                <rect
                  x="62.2805"
                  y="33"
                  width="17"
                  height="4"
                  rx="1"
                  fill="#071630"
                />
                <rect
                  x="55.2805"
                  y="20.9854"
                  width="17"
                  height="4"
                  rx="1"
                  transform="rotate(-44.8309 55.2805 20.9854)"
                  fill="#071630"
                />
                <rect
                  x="42.2805"
                  y="17"
                  width="17"
                  height="4"
                  rx="1"
                  transform="rotate(-90 42.2805 17)"
                  fill="#071630"
                />
                <rect
                  width="17"
                  height="4"
                  rx="1"
                  transform="matrix(-0.70919 -0.705017 -0.705017 0.70919 33.1569 20.9854)"
                  fill="#071630"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center  items-center md:items-start">
              <p className="text-xl font-semibold mb-3">Easy Access</p>
              <p className="w-3/4 text-gray-600 text-center md:text-left">
                Link once and access account info and utility data as per your
                need
              </p>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row justify-center gap-4 items-center">
            <div className="flex   justify-center">
              <svg
                width="80"
                height="94"
                className="w-16 h-16"
                viewBox="0 0 80 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.1162 16.1095C65.2803 12.5924 52.3691 7.11609 40.7781 0.272632C40.1625 -0.0908775 39.3984 -0.0908775 38.7829 0.272632C26.8576 7.3127 14.6441 12.4928 1.44384 16.1095C0.591091 16.3429 0 17.118 0 18.0023V38.0538C0 58.7024 9.52578 72.3704 17.5172 80.2002C26.1204 88.6301 36.142 93.292 39.7805 93.292C43.4187 93.292 53.4403 88.6301 62.0436 80.2002C70.0348 72.3706 79.56 58.7026 79.56 38.0538V18.0021C79.56 17.118 78.9689 16.3429 78.1162 16.1095ZM75.6352 38.0536C75.6352 57.3393 66.7504 70.0931 59.2966 77.3965C50.8363 85.6862 41.7909 89.3668 39.7805 89.3668C37.7702 89.3668 28.7242 85.6862 20.2638 77.3965C12.8101 70.0929 3.92499 57.3393 3.92499 38.0536V19.4918C16.5482 15.9077 28.304 10.9059 39.7809 4.23644C50.9712 10.729 63.3136 15.9795 75.6352 19.4911V38.0536Z"
                  fill="#071630"
                />
                <path
                  d="M22.3858 19.2723C21.9886 18.2638 20.8492 17.7683 19.8405 18.1657C16.3348 19.5471 12.7365 20.8185 9.14568 21.945C8.32737 22.2019 7.77054 22.9599 7.77054 23.8174V31.3957C7.77054 32.4795 8.64934 33.3581 9.73294 33.3581C10.8166 33.3581 11.6954 32.4795 11.6954 31.3957V25.2515C14.9167 24.2093 18.1345 23.0565 21.2793 21.8172C22.2878 21.4202 22.7832 20.2808 22.3858 19.2723Z"
                  fill="#071630"
                />
                <path
                  d="M26.1137 19.6446C26.377 19.6446 26.6443 19.5915 26.9007 19.4797L26.9368 19.464C27.9296 19.0289 28.3768 17.8731 27.9416 16.8806C27.5062 15.8877 26.3438 15.4386 25.3521 15.8734L25.3204 15.887C24.327 16.3209 23.8784 17.4757 24.3122 18.4688C24.6342 19.206 25.3566 19.6446 26.1137 19.6446Z"
                  fill="#071630"
                />
                <path
                  d="M63.1616 63.2786C62.2547 62.6859 61.0386 62.9408 60.4452 63.848C58.8281 66.3232 56.9309 68.6934 54.8056 70.8921C53.0578 72.7 51.1639 74.3851 49.1766 75.9002C48.3149 76.5572 48.1491 77.7886 48.8059 78.6506C49.1924 79.157 49.7768 79.4234 50.3678 79.4234C50.7829 79.4234 51.2011 79.2924 51.5564 79.0212C53.7001 77.3866 55.7427 75.5694 57.6271 73.6202C59.925 71.2434 61.9785 68.6779 63.731 65.9948C64.3241 65.0874 64.0688 63.8713 63.1616 63.2786Z"
                  fill="#071630"
                />
                <path
                  d="M44.6192 78.9779L44.5066 79.0442C43.5687 79.5874 43.2482 80.7878 43.7912 81.7256C44.1551 82.3542 44.8138 82.7052 45.4914 82.7052C45.8249 82.7052 46.1634 82.6201 46.4726 82.4406L46.6025 82.3643C47.5378 81.8165 47.8519 80.6145 47.3042 79.6792C46.7561 78.7443 45.5539 78.4307 44.6192 78.9779Z"
                  fill="#071630"
                />
                <path
                  d="M26.4038 42.6407C25.1988 41.4356 23.5963 40.7723 21.8919 40.7723C20.1875 40.7723 18.5848 41.4358 17.3792 42.6407C14.8915 45.129 14.8915 49.1777 17.3792 51.6658L28.9671 63.2533C30.1722 64.458 31.7748 65.1215 33.4794 65.1215C35.1839 65.1215 36.7865 64.458 37.9918 63.2529L62.1823 39.0623C64.6698 36.5735 64.6698 32.5253 62.1819 30.0379C60.9767 28.8328 59.3742 28.1696 57.6694 28.1696C55.9649 28.1696 54.3623 28.833 53.157 30.0379L33.4792 49.7158L26.4038 42.6407ZM55.9324 32.8134C56.3962 32.3496 57.0133 32.0944 57.6696 32.0944C58.3263 32.0944 58.9429 32.3496 59.407 32.8134C60.3645 33.7709 60.3645 35.3295 59.4066 36.2874L35.2166 60.4777C34.7528 60.9414 34.1357 61.1967 33.4794 61.1967C32.823 61.1967 32.2059 60.9414 31.742 60.4777L20.1545 48.8905C19.1966 47.9326 19.1966 46.374 20.1541 45.4165C20.618 44.9528 21.2352 44.6971 21.8917 44.6971C22.5482 44.6971 23.165 44.9524 23.6287 45.4161L32.0915 53.8791C32.4597 54.247 32.9586 54.4538 33.4792 54.4538C33.9998 54.4538 34.4986 54.2471 34.8665 53.8791L55.9324 32.8134Z"
                  fill="#071630"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <p className="text-xl font-semibold mb-3">Security</p>
              <p className="w-3/4 text-gray-600 text-center md:text-left">
                Encryptions to protect your credentials and personal utility
                data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
