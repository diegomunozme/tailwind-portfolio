import React from "react";
import { stuffAboutMe } from "../Assets/data";

const Timeline = () => {
  return (
    <span className="col-start-5 col-span-5 ">
      <ol class="items-center flex flex-wrap">
        {stuffAboutMe.map((item) => (
          <li class=" mb-6 sm:mb-0 basis-1/3 h-56">
            <div class="flex items-center">
              <div class="flex z-10 justify-center items-center w-6 h-6 bg-transparent rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 text-blue-600 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-700 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pr-8">
              <h3 class=" text-base font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.subTitle}
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                {item.info}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </span>
  );
};

export default Timeline;
