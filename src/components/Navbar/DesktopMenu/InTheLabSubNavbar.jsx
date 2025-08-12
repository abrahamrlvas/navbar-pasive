
export const InTheLabSubNavbar = ({ isLabSubMenuOpen, handleLabMouseEnter, handleLabMouseLeave }) => {


    return (
        <div
            onMouseEnter={handleLabMouseEnter}
            onMouseLeave={handleLabMouseLeave}
            className={`fixed left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] bg-black text-white py-4 transition-all duration-700 ease-out z-40 ${isLabSubMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                }`}
        >
            <div className="px-6 py-4 flex justify-center items-start h-full">
                <div className="flex items-start gap-12 h-full relative">
                    <div className="flex flex-col h-80 w-auto min-w-max">
                        <h3 className="font-bold text-lg mb-4">Browse by Category</h3>
                        <ul className="flex-1">
                            <li className="mb-2 group/ros">
                                <a href="#" className="relative hover:text-gray-300 transition-colors duration-100 whitespace-nowrap">
                                    ROS & Skin Aging
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-100 origin-right transition-transform duration-300 ease-out group-hover/ros:scale-x-0"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out delay-300 group-hover/ros:scale-x-100"></span>
                                </a>
                            </li>
                            <li className="mb-2 group/science">
                                <a href="#" className="relative hover:text-gray-300 transition-colors duration-100 whitespace-nowrap">
                                    Science & Technology
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-100 origin-right transition-transform duration-300 ease-out group-hover/science:scale-x-0"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out delay-300 group-hover/science:scale-x-100"></span>
                                </a>
                            </li>
                            <li className="mb-2 group/industry">
                                <a href="#" className="relative hover:text-gray-300 transition-colors duration-100 whitespace-nowrap">
                                    Industry Guidelines & Regulations
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-100 origin-right transition-transform duration-300 ease-out group-hover/industry:scale-x-0"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out delay-300 group-hover/industry:scale-x-100"></span>
                                </a>
                            </li>

                        </ul>
                        <div className="mt-auto pt-4">
                            <button className="border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer">Read all articles</button>
                        </div>
                    </div>
                    <div className="w-px bg-white h-80"></div>
                    <div className="w-auto">
                        <h3 className="font-bold text-lg mb-4">Highlights</h3>
                        <div className="flex gap-4">
                            <div className='relative group max-w-[240px]'>
                                <div className="relative rounded-lg overflow-hidden">
                                    <img src="/in-the-lab-1.webp" alt="Rosacea" className="h-[172px] object-cover w-full" />
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                                        <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer text-white text-sm font-bold bg-black bg-opacity-50">
                                            Read More
                                        </button>
                                    </div>
                                    <span className="absolute top-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
                                    <span className="absolute top-0 right-0 w-0.5 h-full bg-white transform scale-y-0 origin-top transition-transform duration-200 ease-out delay-200 group-hover:scale-y-100"></span>
                                    <span className="absolute bottom-0 right-0 w-full h-0.5 bg-white transform scale-x-0 origin-right transition-transform duration-200 ease-out delay-400 group-hover:scale-x-100"></span>
                                    <span className="absolute bottom-0 left-0 w-0.5 h-full bg-white transform scale-y-0 origin-bottom transition-transform duration-200 ease-out delay-600 group-hover:scale-y-100"></span>
                                </div>
                                <p className="text-base font-bold mt-3 leading-[140%]">UNDERSTANDING ROSACEA: CAUSES, SYMPTOMS, AND BREAKTHROUGH TREATMENTS</p>
                            </div>
                            <div className='relative group max-w-[240px]'>
                                <div className="relative rounded-lg overflow-hidden">
                                    <img src="/in-the-lab-2.webp" alt="Hormonal Shifts" className="h-[172px] object-cover w-full" />
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                                        <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer text-white text-sm font-bold bg-black bg-opacity-50">
                                            Read More
                                        </button>
                                    </div>
                                    <span className="absolute top-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
                                    <span className="absolute top-0 right-0 w-0.5 h-full bg-white transform scale-y-0 origin-top transition-transform duration-200 ease-out delay-200 group-hover:scale-y-100"></span>
                                    <span className="absolute bottom-0 right-0 w-full h-0.5 bg-white transform scale-x-0 origin-right transition-transform duration-200 ease-out delay-400 group-hover:scale-x-100"></span>
                                    <span className="absolute bottom-0 left-0 w-0.5 h-full bg-white transform scale-y-0 origin-bottom transition-transform duration-200 ease-out delay-600 group-hover:scale-y-100"></span>
                                </div>
                                <p className="text-base font-bold mt-3 leading-[140%]">HORMONAL SHIFTS AND SKIN AGING: UNDERSTANDING MENOPAUSE'S IMPACT ON THE SKIN</p>
                            </div>
                            <div className='relative group max-w-[240px]'>
                                <div className="relative rounded-lg overflow-hidden">
                                    <img src="/in-the-lab-3.webp" alt="Diabetes" className="h-[172px] object-cover w-full" />
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                                        <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer text-white text-sm font-bold bg-black bg-opacity-50">
                                            Read More
                                        </button>
                                    </div>
                                    <span className="absolute top-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
                                    <span className="absolute top-0 right-0 w-0.5 h-full bg-white transform scale-y-0 origin-top transition-transform duration-200 ease-out delay-200 group-hover:scale-y-100"></span>
                                    <span className="absolute bottom-0 right-0 w-full h-0.5 bg-white transform scale-x-0 origin-right transition-transform duration-200 ease-out delay-400 group-hover:scale-x-100"></span>
                                    <span className="absolute bottom-0 left-0 w-0.5 h-full bg-white transform scale-y-0 origin-bottom transition-transform duration-200 ease-out delay-600 group-hover:scale-y-100"></span>
                                </div>
                                <p className="text-base font-bold mt-3 leading-[140%]">THE MOLECULAR INTERSECTION OF DIABETES AND SKIN RESILIENCE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
