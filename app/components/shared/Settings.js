"use client";
import GeneralIcon from "@/public/assets/icons/general.svg";
import GreenMenu from "@/public/assets/icons/green_menu.svg";
import LanguageIcon from "@/public/assets/icons/language.svg";
import Menu from "@/public/assets/icons/menu.svg";
import Image from "next/image";
import { useState } from "react";
const Settings = () => {
  const [openedSetting, setOpenedSetting] = useState("appearance");
  const handleSettings = (settingName) => {
    setOpenedSetting((prev) => (prev === settingName ? "" : settingName));
  };
  return (
    <div className="w-[330px] hidden lg:flex relative">
      <div className="w-[330px] h-[calc(100vh-173px)] bg-white fixed rounded-[32px] border-[0.5px] border-quaternary">
        <h1 className="text-[20px] font-bold text-center pt-[35px]">
          Settings
        </h1>
        <div className="p-[21px] flex-column gap-[15px]">
          <div>
            <button className="w-full flex-start text-secondary-300 gap-[13px] bg-secondary rounded-[5px] px-[14px] py-[8.5px]">
              <div className=" bg-tertiary-300 rounded-full flex-center p-[7px]">
                <Image src={LanguageIcon} sizes="24" alt="Language Settings" />
              </div>
              <h2>Language Settings</h2>
            </button>
          </div>
          <div>
            <button className="w-full flex-start text-secondary-300 gap-[13px] bg-secondary rounded-[5px] px-[14px] py-[8.5px]">
              <div className=" bg-tertiary-300 rounded-full flex-center p-[7px]">
                <Image src={GeneralIcon} sizes="24" alt="General Settings" />
              </div>
              <h2>General Settings</h2>
            </button>
          </div>
          <div>
            <button className="w-full flex-start text-secondary-300 gap-[13px] bg-secondary rounded-[5px] px-[14px] py-[8.5px]">
              <div className=" bg-tertiary-300 rounded-full flex-center p-[7px]">
                <Image src={Menu} sizes="24" alt="Font Settings" />
              </div>
              <h2>Font Settings</h2>
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                handleSettings("appearance");
              }}
              className={`flex-start w-full gap-[13px] bg-secondary rounded-[5px] px-[14px] py-[8.5px] border-l-4  ${
                openedSetting === "appearance"
                  ? " border-primary text-primary"
                  : "text-secondary-300 border-white"
              }`}
            >
              <div className=" bg-tertiary-300 rounded-full flex-center p-[7px]">
                <Image
                  src={openedSetting === "appearance" ? GreenMenu : Menu}
                  sizes="24"
                  alt="Appearance Settings"
                />
              </div>
              <h2
                className={` ${
                  openedSetting === "appearance"
                    ? " font-medium"
                    : "font-normal"
                }`}
              >
                Appearance Settings
              </h2>
            </button>
            {openedSetting === "appearance" && (
              <div className="overflow-hidden animate-expand">
                <div className="flex-between py-6 border border-t-0 border-quaternary px-[14px]">
                  <label className="text-secondary-300">Night Mode</label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:bg-primary transition-colors"></div>
                    <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md peer-checked:translate-x-full transition-transform"></div>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
