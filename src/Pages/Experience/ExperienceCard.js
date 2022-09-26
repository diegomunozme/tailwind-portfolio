import React from "react";

const ExperienceCard = (props) => {
  return (
    <a
      href="#"
      class="flex mx-2 col-start-2 col-span-4 gap-4 items-start bg-transparent rounded-lg border shadow-md md:flex-row md:max-w-xl hover:border-black dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="/docs/images/blog/image-4.jpg"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <h1 class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.time}
        </h1>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.responsabilities}
        </p>
      </div>
    </a>
  );
};

export default ExperienceCard;
