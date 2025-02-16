import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center border mr-2 w-[620px]">
        <div className="flex items-center justify-between w-full">
            <Input style={{borderWidth: 0}} size="large" placeholder="Địa điểm, món ăn, loại hình..." className="focus:outline-none focus:ring-0"/>
            <span className="flex flex-row items-center justify-center w-32">
                <FontAwesomeIcon icon={faSliders} className="text-base"/>
                <p className="ml-1 mr-1 mt-[-5px] text-xl">Bộ lọc</p>
            </span>
        </div>
        <div className="bg-gray-200 h-full flex justify-center items-center w-12">
            <FontAwesomeIcon icon={faSearch} />
        </div>
    </div>
  )
}

export default SearchBar

