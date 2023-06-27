/**
 * メニュー
 * satt李
 * 2023-06-27
 */
"use client";
import { FC, useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown,BsFillImageFill,BsPeople ,BsReverseLayoutTextSidebarReverse,BsReverseLayoutTextSideBarReverse} from "react-icons/bs";
import { AiFillEnvironment,AiOutlineBarChart ,AiOutlineFileText,AiOutlineMail,AiOutlineSetting,AiOutlineLogout,AiOutlineUser} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

interface NavigationMenuProps {}

const NavigationMenu: FC<NavigationMenuProps> = ({}) => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard" },
    { title: "Pages",icon:<AiOutlineFileText/> },
    { title: "Media", spacing: true,icon:<BsFillImageFill />  },
    {
      title: "Projects",
      icon:<BsReverseLayoutTextSideBarReverse /> ,
      submenu: true,
      submenuItems: [
        { title: "submenuItems 1" },
        { title: "submenuItems 2" },
        { title: "submenuItems 3" },
      ],
    },
    { title: "実技学科インポート" , icon:<AiOutlineBarChart />},
    { title: "ユーザー管理" , icon:<AiOutlineUser/>},
    { title: "ランキング表", spacing: true, icon:<AiOutlineMail/> },
    { title: "ログアウト", icon:<AiOutlineLogout/>  },
  ];
  return (
    <>
      {/* <div className="flex"> */}
        <div
          className={`bg-dark-purple h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-300 relative`}
        >
          <BsArrowLeftShort
            className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex">
            <AiFillEnvironment
              className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
                open && "rotate-180"
              }`}
            />
            <h1
              className={`text-white origin-left text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              ISUZU
            </h1>
          </div>
          <div
            className={`flex items-center rounded-md bg-light-white mt-6  ${
              open ? "px-4" : "px-2.5"
            }`}
          >
            <BsSearch
              className={`text-white text-lg block float-left cursor-pointer ${
                open && "mr-2"
              }`}
            />
            <input
              type={"search"}
              className={`text-base bg-transparent w-full text-white focus:outline-none ${
                !open && "hidden"
              }`}
              placeholder="Search"
            />
          </div>
          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md  ${
                    menu.spacing ? "mt-9" : "mt-2"
                  }`}

                  onClick={() => setSubmenuOpen(!submenuOpen)}
                >
                  <span className="text-2xl block float-left">
                    <RiDashboardFill />
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && (
                    <BsChevronDown className={`${submenuOpen && "rotate-180"}`}
                     
                    />
                  )}
                </li>
                {menu.submenu && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md"
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>

        <div className="p-7 bg-blue-400 w-full">
          <h1 className="text-2xl font-semibold bg-lime-50 w-full h-full">
            Home page
          </h1>
        </div>
      {/* </div> */}
    </>
  );
};

export default NavigationMenu;
