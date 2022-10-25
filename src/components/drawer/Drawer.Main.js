//LIBRARYS
import React from "react";
import { Controllers } from "radium-omnibus";
import { useNavigate, useLocation } from "react-router-dom";

//COMPONENTS
import Tooltip from "../tooltip/Tooltip.Main";

//CONSTANTS
import {
  ICON_CHEVRON_DOUBLE_LEFT,
  ICON_CHEVRON_DOWN,
} from "../../utils/useIcons";

//FUNCTION
import FunctionGetHeight from "./functions/Drawer.FunctionGetHeight";

const Drawer = ({ MENU }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={` ${
        isOpen ? " w-60 " : " w-16 "
      } duration-1000 transition-all bg-radiun-omnibus-drawer h-screen relative `}
    >
      {MENU?.filter((m) => {
        return m?.show !== false && m?.hide !== true;
      })?.map((row, index) => {
        return (
          <Controllers
            key={`key-controller-${index}`}
            fields={[
              {
                type: "customs",
                name: row?.name,
                fieldCustoms: ({ value, setValue }) => {
                  return (
                    <div className=" mx-auto text-white">
                      <div
                        onClick={() => {
                          if (
                            row?.submenu?.filter((n) => {
                              return n?.show !== false && n?.hide !== true;
                            })?.length > 0
                          ) {
                            setValue(!value);
                          } else {
                            if (location?.pathname === row?.path) {
                              return;
                            } else {
                              navigate(row?.path);
                            }
                          }
                        }}
                        className={` ${
                          location?.pathname === row?.path
                            ? " bg-radiun-omnibus-select "
                            : " bg-radiun-omnibus-non-select "
                        } hover:bg-radiun-omnibus-select py-2 cursor-pointer flex justify-center  `}
                      >
                        {isOpen ? (
                          <React.Fragment>
                            <div className="flex space-x-2">
                              <div> {row?.icon}</div>
                              <div className="line-clamp-1 my-auto">
                                {row?.title}
                              </div>
                            </div>
                          </React.Fragment>
                        ) : (
                          <Tooltip mode="right" message={row?.title}>
                            {row?.icon}
                          </Tooltip>
                        )}
                        {row?.submenu?.filter((n) => {
                          return n?.show !== false && n?.hide !== true;
                        }).length > 0 && (
                          <ICON_CHEVRON_DOWN
                            className={` ${
                              value ? "" : " rotate-180 "
                            } w-5 h-5 text-white my-auto mx-2`}
                          />
                        )}
                      </div>
                      <div
                        className={`${
                          value
                            ? ` h-[${
                                FunctionGetHeight(
                                  row.submenu.filter((n) => {
                                    return (
                                      n?.show !== false && n?.hide !== true
                                    );
                                  })?.length || 0
                                ) * 40
                              }px] bg-radiun-omnibus-drawer-shadow`
                            : " h-0 "
                        }  transition-all duration-500 `}
                      >
                        {value && (
                          <div>
                            {row?.submenu
                              .filter((n) => {
                                return n?.show !== false && n?.hide !== true;
                              })
                              .map((menu, subIndex) => {
                                return (
                                  <div
                                    onClick={() => {
                                      if (location?.pathname === menu?.path) {
                                        return;
                                      } else {
                                        navigate(menu?.path);
                                      }
                                    }}
                                    key={`submenu-index-${subIndex}`}
                                    className={`${
                                      location?.pathname === menu?.path
                                        ? " bg-radiun-omnibus-background "
                                        : ""
                                    } text-center py-2 hover:bg-radiun-omnibus-background cursor-pointer `}
                                  >
                                    {isOpen ? (
                                      <div className="line-clamp-1 my-auto">
                                        {menu?.title}
                                      </div>
                                    ) : (
                                      <Tooltip
                                        mode="right"
                                        message={menu?.title}
                                      >
                                        {menu.icon}
                                      </Tooltip>
                                    )}
                                  </div>
                                );
                              })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                },
              },
            ]}
          />
        );
      })}
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="absolute bottom-0 w-full text-center py-2 text-white cursor-pointer"
      >
        <ICON_CHEVRON_DOUBLE_LEFT
          className={` ${
            isOpen ? "" : " rotate-180 "
          } text-center w-5 h-5 ml-auto mr-6 `}
        />
      </div>
    </div>
  );
};

export default Drawer;
