import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faStarOfDavid, faTag } from "@fortawesome/free-solid-svg-icons";
import listItems from '../assets/data';
import { useState } from "react";

const categories = [
    { id: 1, name: "Deal hôm nay" },
    { id: 2, name: "Tất cả" },
    { id: 3, name: "Đồ ăn" },
    { id: 4, name: "Đồ uống" },
    { id: 5, name: "Đồ chay" },
    { id: 6, name: "Bánh kem" },
    { id: 7, name: "Tráng miệng" },
];

const Onboarding = () => {

    const [selectedCategory, setSelectedCategory] = useState("Deal hôm nay"); // Default selection

    return(
        <div className="w-full h-full">
            <Header />
            
            <div className="h-full w-full bg-gray-300 flex flex-col px-5 border border-gray-400">
                <div className="bg-white h-20 border border-x-gray-400 px-5 py-2 flex flex-row items-center">
                    <img src="/logo.svg" className="w-10 h-10" />
                    <b className="mx-4 text-2xl">Giao tận nơi</b>
                    {categories.map((category) => (
                        <p
                            key={category.id}
                            className={`px-4 text-xl cursor-pointer ${
                                selectedCategory === category.name ? "text-red-500 border-b-2 border-red-500 pb-1" : ""
                            }`}
                            onClick={() => setSelectedCategory(category.name)}
                        >
                            {category.name}
                        </p>
                    ))}
                    <span className="flex flex-row items-baseline">
                        <p className="text-xl mr-1">Xem thêm</p>
                        <FontAwesomeIcon icon={faChevronDown} style={{fontSize:12}} />
                    </span>
                </div>

                <div className="flex-grow border border-x-gray-400 p-5 overflow-y-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {listItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-md">
                                <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                                <div className="border-b border-gray-300 flex flex-col justify-center p-2 mb-2">
                                    <div className="flex flex-row items-center">
                                        {item.rate === "yes" && (
                                            <FontAwesomeIcon icon={faStarOfDavid} className="w-6 h-6 mr-1 text-yellow-500" />
                                        )}
                                        <p className="text-xl font-bold truncate w-full">{item.name}</p>
                                    </div>
                                    <p className="text-gray-400 font-bold truncate w-full my-1">{item.description}</p>
                                </div>
                                <div className="ml-2 mt-3 mb-14 flex flex-row items-center">
                                    <FontAwesomeIcon icon={faTag} className="text-red-500 mr-2" />
                                    <p className="text-black font-bold">{item.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="absolute right-[1.2%] top-1/2 text-3xl text-gray-400" />

            </div>
        </div>
    )
}

export default Onboarding;