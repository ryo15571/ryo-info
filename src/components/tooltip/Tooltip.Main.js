const TooltipMain = ({ children, message = "message" }) => {
  return (
    <div className=" relative group ">
      {children}
      <div className="absolute left-0 ml-16 -mt-6 hidden  group-hover:flex">
        <span className="relative z-10  p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">
          {message}
        </span>
      </div>
    </div>
  );
};

export default TooltipMain;
