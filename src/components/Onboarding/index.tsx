import { Button } from "antd";
import Header from "./Header";
import HowEcommerceWork from "./How-it-work";

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
        </div>
    )
}

export default Onboarding;