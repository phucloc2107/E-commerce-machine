import { Button, Input } from "antd";
import Header from "./Header";
import HowEcommerceWork from "./How-it-work";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSearch } from "@fortawesome/free-solid-svg-icons";
import listItems from "../../assets/data";

const Onboarding = () => {
    return(
        <div className="w-screen h-screen">
            <Header />
            
            <div className="w-full h-[686px] flex justify-center items-center">
                <div className="w-2/3 h-1/2 flex flex-row justify-between">
                    <div className="w-1/2 h-full">
                        <h1 className="text-5xl font-medium">Provide a platform for buying, selling and trading products</h1>
                        <h1 className="text-5xl text-yellow-400 font-medium">convenient and fast</h1>
                        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Button className="text-center px-40 py-6 bg-black text-white mt-8" size="large">Get Started</Button>
                    </div>

                    <img src="../../../public/picture.png"  className="h-full w-[45%]"/>
                </div>
            </div>

            <HowEcommerceWork />

            <div className="w-full h-auto flex justify-center items-center">
                <div className="w-2/3 flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-medium">Reserve your products or service today</h2>
                    <Input 
                        className="my-5 w-1/2 p-3 border-black flex flex-row-reverse" 
                        size="large" 
                        placeholder="Search for products and services" 
                        prefix={
                            <FontAwesomeIcon icon={faSearch} />
                        }
                    />

            <div className="grid grid-cols-4 gap-6 mt-10">
                {listItems.map((item) => (
                    <div key={item.id} className="border p-4 cursor-pointer rounded-xl">
                        <img
                        src={item.img}
                        alt={item.itemName}
                        className="h-36 w-full object-cover rounded-xl"
                        />
                        <p className="relative top-[-130px] left-2 bg-gray-200 inline text-sm p-2">{item.name}</p>
                        <h3 className="text-xl font-medium mt-2">{item.itemName}</h3>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-2xl text-green-800 font-bold mt-2">From {item.price}</p>
                        <div className="border border-yellow-600 my-4"></div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-black font-medium">Distance:</p>
                            <p className="text-sm bg-gray-200 text-black py-2">{item.far} miles <FontAwesomeIcon icon={faPaperPlane} /></p>
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