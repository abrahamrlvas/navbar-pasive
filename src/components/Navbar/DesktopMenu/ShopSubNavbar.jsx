
const ShopSubNavbar = ({ handleShopMouseEnter, handleShopMouseLeave, isShopSubMenuOpen }) => {
    return (
        <div
            onMouseEnter={handleShopMouseEnter}
            onMouseLeave={handleShopMouseLeave}
            className={`fixed left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] bg-black text-white py-4 transition-all duration-700 ease-out z-40 ${isShopSubMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                }`}
        >
            <div className="px-6 py-4 grid grid-cols-4 gap-8 h-full">
                <div className="flex flex-col">
                    <ul className="flex-1">
                        <li className="mb-2">
                            <a href="#" className="relative inline-block font-bold text-white hover:text-gray-300 transition-all duration-500 group">
                                Skincare
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="relative inline-block font-bold text-white hover:text-gray-300 transition-all duration-500 group">
                                Bundles
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="relative inline-block font-bold text-white hover:text-gray-300 transition-all duration-500 group">
                                Refills
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="relative inline-block font-bold text-white hover:text-gray-300 transition-all duration-500 group">
                                UV Camera
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                            </a>
                        </li>
                    </ul>
                    <div>
                        <button className="border border-white mb-4 px-6 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer">SHOP ALL</button>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-3 gap-4">
                        <a className="p-4 rounded-lg group cursor-pointer">
                            <div className="relative rounded-lg overflow-hidden mb-4">
                                <img src="/shop-1.webp" alt="Dynamic Age Defense" className="rounded-lg w-full transition-all duration-500 ease-in-out group-hover:opacity-0" />
                                <img src="/shop2.webp" alt="Dynamic Age Defense Hover" className="absolute top-0 left-0 rounded-lg w-full opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100" />
                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <button className="w-full text-white border bg-black border-white text-black py-3 font-bold hover:bg-white hover:border-black hover:text-black transition-colors duration-300 cursor-pointer">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <p className="text-white font-bold">DYNAMIC AGE DEFENSE</p>
                        </a>
                        <a className="p-4 rounded-lg group cursor-pointer">
                            <div className="relative rounded-lg overflow-hidden mb-4">
                                <img src="/shop-3.webp" alt="Bioadaptive Stress Repair" className="rounded-lg w-full transition-all duration-500 ease-in-out group-hover:opacity-0" />
                                <img src="/shop-4.webp" alt="Bioadaptive Stress Repair Hover" className="absolute top-0 left-0 rounded-lg w-full opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100" />
                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <button className="w-full text-white border bg-black border-white text-black py-3 font-bold hover:bg-white hover:border-black hover:text-black transition-colors duration-300 cursor-pointer">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <p className="text-white font-bold">BIOADAPTIVE STRESS REPAIR</p>
                        </a>
                        <a className="p-4 rounded-lg group cursor-pointer">
                            <div className="relative rounded-lg overflow-hidden mb-4">
                                <img src="/shop-5.webp" alt="Precision Eye Lift" className="rounded-lg w-full transition-all duration-500 ease-in-out group-hover:opacity-0" />
                                <img src="/shop-6.webp" alt="Precision Eye Lift Hover" className="absolute top-0 left-0 rounded-lg w-full opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100" />
                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <button className="w-full text-white border bg-black border-white text-black py-3 font-bold hover:bg-white hover:border-black hover:text-black transition-colors duration-300 cursor-pointer">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <p className="text-white font-bold">PRECISION EYE LIFT</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopSubNavbar