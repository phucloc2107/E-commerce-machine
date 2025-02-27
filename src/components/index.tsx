import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faComment, faEye, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import listItems from "../assets/display1/quan_ngon_quan_5.json";
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

    const [selectedCategory, setSelectedCategory] = useState("Deal hôm nay");
    const [showComments, setShowComments] = useState<{ [key: string]: boolean }>({});

    const formatNumber = (num: number) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num;
      };

    const toggleComments = (id: string) => {
        setShowComments((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return(
        <div className="w-full min-h-screen">
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
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    {listItems.map((item) => (
                        <div key={item.frames[0]} className="bg-white rounded-lg shadow-md">
                            <img src={item.frames[0]} alt='' className="w-full h-48 object-cover rounded-t-lg" />
                            <p className="-mt-8 ml-1 py-1 text-white bg-gray-700 w-[13%] text-sm text-center">
                                <FontAwesomeIcon icon={faEye} className="mr-1" />
                                {formatNumber(item.views)}
                            </p>
                            <div className="border-b border-gray-300 flex flex-col justify-center p-2 mb-2">
                                <p className="text-xl font-bold truncate w-full">{item.eat_name}</p>
                                <p className="text-gray-400 font-bold truncate w-full my-1">{item.eat_addr}</p>
                                <p className="text-gray-400 font-bold truncate w-full my-1">{item.open_time}</p>
                                <div className="flex flex-row justify-between">
                                    <p>
                                        <FontAwesomeIcon icon={faHeart} className="mr-1 text-red-500" />
                                        {formatNumber(item.likes)}
                                    </p>
                                    <p className="cursor-pointer" onClick={() => toggleComments(item.frames[0])}>
                                        <FontAwesomeIcon icon={faComment} className="mr-1 text-blue-500" />
                                        {formatNumber(item.comments)}
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faShare} className="mr-1 text-green-500" />
                                        {formatNumber(item.shares)}
                                    </p>
                                </div>
                                {showComments[item.frames[0]] && (
                                        <div className="mt-2 pt-2 border-t">
                                            <p className="text-gray-600">"Comment 1: Món ăn rất ngon!"</p>
                                            <p className="text-gray-600">"Comment 2: Quán phục vụ rất tốt!"</p>
                                        </div>
                                )}
                            </div>
                            <div className="ml-2 my-3 flex flex-row items-center">
                                <p className="text-gray-400 font-bold">By: {item.channel.name}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onboarding;