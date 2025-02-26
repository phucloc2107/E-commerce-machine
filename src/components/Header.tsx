import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import SearchBar from "./SearchBar";
import { faBars, faBell, faGlobe, faMobileScreen, faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    return (
        <div className="bg-white h-16 flex justify-between items-center px-5">
            {/* Nav place left */}
            <div className="flex items-center">
                {/* Logo */}            
                <p className="text-red-700 text-2xl mr-5">Foody.vn</p>
                <div className="flex flex-row">
                    {/* Location */}
                    <Button label={'TP. HCM'}/>

                    {/* Servicee */}
                    <Button label={'Ăn uống'}/>

                    {/* SearchBar */}
                    <SearchBar />

                    {/* Menu icon */}
                    <div className="flex justify-center items-center border px-4 py-2 mr-2 ml-2">
                        <span className="text-black">
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                    </div>

                    {/* Mobile App icon */}
                    <div className="flex justify-center items-center border px-6 py-2 mr-2">
                        <span className="text-black flex flex-row justify-center items-center">
                            <FontAwesomeIcon icon={faMobileScreen} />
                            <p className="ml-1">Apps</p>
                        </span>
                    </div>
                </div>
            </div>

            {/* Nav place right */}
            <div className="flex items-center">
                <p className="text-gray-700 text-xl mr-3">Đăng nhập</p>
                <span className="mr-2 bg-gray-200 text-2xl p-3 rounded-full flex">
                    <FontAwesomeIcon icon={faBell} className="text-lg text-gray-600"/>
                </span>
                <span className="mr-2 bg-gray-200 text-2xl p-3 rounded-full flex">
                    <FontAwesomeIcon icon={faPlus} className="text-lg text-gray-600"/>
                </span>
                <span className="mr-2 bg-gray-200 text-2xl p-3 flex">
                    <FontAwesomeIcon icon={faGlobe} className="text-lg text-red-500"/>
                </span>
            </div>
        </div>
    );
};

export default Header;
