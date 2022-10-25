import React from "react";
import useWindowSize from "../../utils/useWindowSize";

const SearchMain = ({ value, setValue, placeholder }) => {
  const size = useWindowSize();

  const thisSize = {
    marginInline: size.width < 480 ? 5 : size.width / 4,
  };

  return (
    <React.Fragment>
      <div className="flex items-center justify-center  ">
        <div
          style={thisSize}
          className="container  flex flex-wrap items-center justify-between "
        >
          <div
            className={` border-4 border-englican-gray  bg-white shadow flex w-full ${
              value.length > 0 ? "rounded-none" : " rounded-full "
            } `}
          >
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
              className={` w-full  py-2 px-8 text-englican-gray font-thin focus:outline-none${
                value?.length > 0
                  ? " rounded-tl-none rounded-bl-none "
                  : " rounded-tl-full rounded-bl-full "
              } `}
            />
            <div className=" rounded-tr-full rounded-br-full  py-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchMain;
