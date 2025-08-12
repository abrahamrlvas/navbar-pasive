import { useRef, useState } from "react";
import ShopSubNavbar from "./DesktopMenu/ShopSubNavbar";
import ScienceSubNavbar from "./DesktopMenu/ScienceSubNavbar";
import { InTheLabSubNavbar } from "./DesktopMenu/InTheLabSubNavbar";
import HamburgerMenu from "./MobileMenu/HamburgerMenu";
import { dataLinks, dataLinksRight } from "./utils/data";

const Navbar = () => {

    const [isScienceSubMenuOpen, setIsScienceSubMenuOpen] = useState(false);
    const [isLabSubMenuOpen, setIsLabSubMenuOpen] = useState(false);
    const [isShopSubMenuOpen, setIsShopSubMenuOpen] = useState(false);
    let scienceLeaveTimeout = useRef(null);
    let labLeaveTimeout = useRef(null);
    let shopLeaveTimeout = useRef(null);


    const handleScienceMouseEnter = () => {
        clearTimeout(scienceLeaveTimeout.current);
        setIsLabSubMenuOpen(false);
        setIsShopSubMenuOpen(false);
        setIsScienceSubMenuOpen(true);
    };

    const handleScienceMouseLeave = () => {
        scienceLeaveTimeout.current = setTimeout(() => {
            setIsScienceSubMenuOpen(false);
        }, 200);
    };

    const handleLabMouseEnter = () => {
        clearTimeout(labLeaveTimeout.current);
        setIsScienceSubMenuOpen(false);
        setIsShopSubMenuOpen(false);
        setIsLabSubMenuOpen(true);
    };

    const handleLabMouseLeave = () => {
        labLeaveTimeout.current = setTimeout(() => {
            setIsLabSubMenuOpen(false);
        }, 200);
    };

    const handleShopMouseEnter = () => {
        clearTimeout(shopLeaveTimeout.current);
        setIsScienceSubMenuOpen(false);
        setIsLabSubMenuOpen(false);
        setIsShopSubMenuOpen(true);
    };

    const handleShopMouseLeave = () => {
        shopLeaveTimeout.current = setTimeout(() => {
            setIsShopSubMenuOpen(false);
        }, 200);
    };


    return (
        <>
            <nav className="bg-black text-white p-6 relative z-50">
                <div className="flex justify-between items-center max-w-[1400px] mx-auto px-4">
                    {/* Desktop Navigation - Hidden on mobile */}
                    <ul className="hidden xl:flex">
                        {
                            dataLinks.map(({ name, link }, index) => {
                                return (
                                    <li key={index} onMouseEnter={name === 'SHOP' ? handleShopMouseEnter : name === 'SCIENCE' ? handleScienceMouseEnter : handleLabMouseEnter} onMouseLeave={name === 'SHOP' ? handleShopMouseLeave : name === 'SCIENCE' ? handleScienceMouseLeave : handleLabMouseLeave} className="group">
                                        <a href={link} className="relative px-2 py-2 text-sm font-bold text-white hover:text-gray-300 flex items-center gap-1">
                                            {name}
                                            <div className="relative w-4 h-4">
                                                <img
                                                    src="/down.svg"
                                                    alt="down arrow"
                                                    className="absolute inset-0 w-4 h-4 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:-translate-y-1"
                                                />
                                                <img
                                                    src="/up.svg"
                                                    alt="up arrow"
                                                    className="absolute inset-0 w-4 h-4 transition-all duration-300 ease-in-out opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
                                                />
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    {/* Hamburger Menu - Visible on mobile */}
                    <div className="xl:hidden">
                        <HamburgerMenu />
                    </div>

                    {/* Logo - Always visible and centered on mobile */}
                    <div className="xl:static absolute left-1/2 transform -translate-x-1/2 xl:transform-none xl:left-auto">
                        <a href='#'>
                            <img className="max-w-[93px]" src='/logo.webp' alt='logo' />
                        </a>
                    </div>

                    {/* Desktop Right Navigation - Hidden on mobile */}
                    <ul className="hidden xl:flex space-x-6 items-center">
                        { dataLinksRight.map( ({ name, link }, index) => {
                            return (
                                <li key={index} className="group">
                                    <a href={link} className="relative py-2 text-sm font-bold text-white hover:text-gray-300">
                                        {name}
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100" />
                                    </a>
                                </li>
                            )
                        }) }
                    </ul>

                    {/* Mobile Cart - Only CART(0) visible on mobile */}
                    <div className="xl:hidden">
                        <a href="#" className="relative py-2 text-sm font-bold text-white hover:text-gray-300 group">
                            CART(0)
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100" />
                        </a>
                    </div>
                </div>
            </nav>

            <ShopSubNavbar handleShopMouseEnter={handleShopMouseEnter} handleShopMouseLeave={handleShopMouseLeave} isShopSubMenuOpen={isShopSubMenuOpen} />
            <ScienceSubNavbar handleScienceMouseEnter={handleScienceMouseEnter} handleScienceMouseLeave={handleScienceMouseLeave} isScienceSubMenuOpen={isScienceSubMenuOpen} />
            <InTheLabSubNavbar handleLabMouseEnter={handleLabMouseEnter} handleLabMouseLeave={handleLabMouseLeave} isLabSubMenuOpen={isLabSubMenuOpen} />


        </>
    )
}

export default Navbar