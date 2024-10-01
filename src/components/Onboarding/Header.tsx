import { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Popover } from "antd";

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleIconClick = () => {
        setIsClicked(!isClicked);
    };

    const popoverContent = (
        <div className="">
            <p className="cursor-pointer">Equipment</p>
            <div className="bg-gray-200 w-fulll h-[1px] my-2"></div>
            <p className="cursor-pointer">Services</p>
        </div>
    );

    return (
        <div className="bg-[#555555] h-24 flex justify-between items-center px-5">
            <div className="flex items-center">
                <div className="flex">
                    <img src="/logo.svg" className="w-8 h-8" />
                    <p className="text-white text-2xl">E-commerce</p>
                </div>
                <div className="flex ml-12 text-white">
                    <p className="cursor-pointer">About</p>
                    <Popover content={popoverContent} trigger="click">
                        <p className="mx-6 cursor-pointer" onClick={handleIconClick}>
                            Listings <FontAwesomeIcon icon={isClicked ? faChevronUp : faChevronDown} />
                        </p>
                    </Popover>
                    <p className="cursor-pointer">Mission</p>
                </div>
            </div>

            <div className="flex items-center">
                <p className="text-white mr-12">Sign in</p>
                <Button size="large" className="px-14 bg-yellow-200 border-0 rounded-1">Get Started</Button>
            </div>
        </div>
    );
};

export default Header;
