import { useState } from "react";

const HowEcommerceWork = () => {
    const [tabs, setTabs] = useState('users');

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-5xl font-medium">How E-commerce Work</h1>

            {/* Tab Headers */}
            <div className="grid min-w-[800px] grid-cols-3 text-center my-7">
                <h2
                    className={`${tabs === "users" ? "p2-medium border-b-4 border-b-yellow-400" : "p2 border-b border-yellow-200 text-gray-400"} h-9 cursor-pointer md:h-12 text-xl`}
                    onClick={() => setTabs('users')}
                >
                    For users
                </h2>

                <h2
                    className={`${tabs === "sellers" ? "p2-medium border-b-4 border-b-yellow-400" : "p2 border-b border-yellow-200 text-gray-400"} h-9 cursor-pointer md:h-12 text-xl`}
                    onClick={() => setTabs('sellers')}
                >
                    For sellers
                </h2>

                <h2
                    className={`${tabs === "admin" ? "p2-medium border-b-4 border-b-yellow-400" : "p2 border-b border-yellow-200 text-gray-400"} h-9 cursor-pointer md:h-12 text-xl`}
                    onClick={() => setTabs('admin')}
                >
                    For administrators
                </h2>
            </div>

            {/* Tab Content */}
            <div className="w-2/3 h-[350px] text-center">
                {tabs === 'users' && (
                    <div className="flex w-full h-full">
                        <img src="../../../public/users.png" className="w-1/2 h-1/2 rounded-lg"/>
                        <div className="flex flex-col text-left w-1/2 ml-24">
                            <h1 className="text-3xl font-medium">For users to use E-commerce</h1>
                            <p className="text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                )}

                {tabs === 'sellers' && (
                    <div className="flex justify-between w-full h-full">
                        <img src="../../../public/sellers.png" className="w-1/2 h-1/2 rounded-lg"/>
                        <div className="flex flex-col text-left w-1/2 ml-24">
                            <h1 className="text-3xl font-medium">For seller to business E-commerce</h1>
                            <p className="text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>                    
                    </div>
                )}

                {tabs === 'admin' && (
                    <div className="flex justify-between w-full h-full">
                        <img src="../../../public/admin.png" className="w-1/2 h-1/2 rounded-lg"/>
                        <div className="flex flex-col text-left w-1/2 ml-24">
                            <h1 className="text-3xl font-medium">For admin to manager E-commerce</h1>
                            <p className="text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HowEcommerceWork;
