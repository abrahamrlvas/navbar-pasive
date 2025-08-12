const MobileScienceSubNavbar = () => {
    return (
        <div className="w-full bg-black text-white py-4">
            <div className="px-6">
                <div className="flex flex-col space-y-6">
                    <div className="group/bio w-fit">
                        <a href="#" className="block font-bold text-white hover:text-gray-300 transition-all duration-500">
                            Our biotechnology
                        </a>
                        <div className="h-0.5 bg-white transform origin-center transition-transform duration-300 ease-out opacity-0 scale-x-0 group-hover/bio:opacity-100 group-hover/bio:scale-x-100"></div>
                    </div>
                    <div className="group/safety w-fit">
                        <a href="#" className="block font-bold text-white hover:text-gray-300 transition-all duration-500">
                            Safety
                        </a>
                        <div className="h-0.5 bg-white transform origin-center transition-transform duration-300 ease-out opacity-0 scale-x-0 group-hover/safety:opacity-100 group-hover/safety:scale-x-100"></div>
                    </div>
                    <div className="group/team w-fit">
                        <a href="#" className="block font-bold text-white hover:text-gray-300 transition-all duration-500">
                            Scientific team
                        </a>
                        <div className="h-0.5 bg-white transform origin-center transition-transform duration-300 ease-out opacity-0 scale-x-0 group-hover/team:opacity-100 group-hover/team:scale-x-100"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileScienceSubNavbar;