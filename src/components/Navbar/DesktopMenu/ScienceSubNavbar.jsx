

const ScienceSubNavbar = ({ handleScienceMouseEnter, handleScienceMouseLeave, isScienceSubMenuOpen }) => {
    return (
        <div
            onMouseEnter={handleScienceMouseEnter}
            onMouseLeave={handleScienceMouseLeave}
            className={`fixed left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] bg-black text-white py-4 transition-all duration-700 ease-out z-40 ${isScienceSubMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                }`}
        >
            <div className="px-6 py-4">
                <div className="flex justify-center space-x-8">
                    <div className="group/bio">
                        <a href="#" className="block font-bold text-white hover:text-gray-300 transition-all duration-500">
                            Our biotechnology
                        </a>
                        <div className="h-0.5 bg-white transform origin-center transition-transform duration-300 ease-out opacity-0 scale-x-0 group-hover/bio:opacity-100 group-hover/bio:scale-x-100"></div>
                    </div>
                    <div className="group/safety">
                        <a href="#" className="block font-bold text-white hover:text-gray-300 transition-all duration-500">
                            Safety
                        </a>
                        <div className="h-0.5 bg-white transform origin-center transition-transform duration-300 ease-out opacity-0 scale-x-0 group-hover/safety:opacity-100 group-hover/safety:scale-x-100"></div>
                    </div>
                    <div className="group/team">
                        <a href="#" className="block font-bold text-white hover:text-gray-300 transition-all duration-500">
                            Scientific team
                        </a>
                        <div className=" h-0.5 bg-white transform origin-center transition-transform duration-300 ease-out opacity-0 scale-x-0 group-hover/team:opacity-100 group-hover/team:scale-x-100"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScienceSubNavbar