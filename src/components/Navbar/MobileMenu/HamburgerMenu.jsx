import { useState } from 'react';
import MobileShopSubNavbar from './MobileShopSubNavbar';
import MobileScienceSubNavbar from './MobileScienceSubNavbar';
import MobileInTheLabSubNavbar from './MobileInTheLabSubNavbar';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isShopOpen, setIsShopOpen] = useState(false)
    const [isScienceOpen, setIsScienceOpen] = useState(false)
    const [isLabOpen, setIsLabOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        // Reset submenus when closing main menu
        if (isOpen) {
            setIsShopOpen(false)
            setIsScienceOpen(false)
            setIsLabOpen(false)
        }
    }

    const toggleShop = () => {
        setIsShopOpen(!isShopOpen)
    }

    const toggleScience = () => {
        setIsScienceOpen(!isScienceOpen)
    }

    const toggleLab = () => {
        setIsLabOpen(!isLabOpen)
    }

    return (
        <>
            <button
                onClick={toggleMenu}
                className="flex items-center justify-center w-8 h-8 relative z-50 cursor-pointer"
                aria-label="Toggle menu"
            >
                <div className="relative w-6 h-6">
                    <img
                        src="/hamburger.svg"
                        alt="menu"
                        className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                            }`}
                    />
                </div>
            </button>
            <div className={`fixed inset-0 bg-black bg-opacity-95 z-40 transition-opacity duration-300 ease-in-out xl:hidden overflow-y-auto ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                <div className={`min-h-full flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}>
                    <div className="flex items-center justify-between p-6 border-b border-gray-800">
                        <div className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <a href="#" className="text-white text-sm font-medium hover:text-gray-300 transition-colors cursor-pointer">
                                Sign In
                            </a>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <a href='#'>
                                <img className="max-w-[80px]" src='/logo.webp' alt='logo' />
                            </a>
                        </div>
                        <button
                            onClick={toggleMenu}
                            className="flex items-center justify-center w-8 h-8 cursor-pointer"
                            aria-label="Close menu"
                        >
                            <img
                                src="/close.svg"
                                alt="close"
                                className="w-6 h-6 transition-all duration-300 ease-in-out"
                            />
                        </button>
                    </div>
                    <div className="px-6 py-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search"
                                className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div className="px-6 py-2 flex-1">
                        <div className="space-y-1">
                            <button
                                onClick={toggleShop}
                                className="w-full flex items-center justify-between py-4 px-0 border-b border-gray-800 text-left transition-colors group cursor-pointer"
                            >
                                <span className="text-white font-medium text-lg">SHOP</span>
                                <svg
                                    className={`w-5 h-5 text-white transition-transform duration-300 ${isShopOpen ? 'rotate-90' : 'group-hover:translate-x-1'
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isShopOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="bg-black text-white py-4">
                                    <MobileShopSubNavbar />
                                </div>
                            </div>
                            <button
                                onClick={toggleScience}
                                className="w-full flex items-center justify-between py-4 px-0 border-b border-gray-800 text-left transition-colors group cursor-pointer"
                            >
                                <span className="text-white font-medium text-lg">SCIENCE</span>
                                <svg
                                    className={`w-5 h-5 text-white transition-transform duration-300 ${isScienceOpen ? 'rotate-90' : 'group-hover:translate-x-1'
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isScienceOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="bg-black text-white py-4">
                                    <MobileScienceSubNavbar />
                                </div>
                            </div>
                            <button
                                onClick={toggleLab}
                                className="w-full flex items-center justify-between py-4 px-0 border-b border-gray-800 text-left transition-colors group cursor-pointer"
                            >
                                <span className="text-white font-medium text-lg">IN THE LAB</span>
                                <svg
                                    className={`w-5 h-5 text-white transition-transform duration-300 ${isLabOpen ? 'rotate-90' : 'group-hover:translate-x-1'
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isLabOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="bg-black text-white py-4">
                                    <MobileInTheLabSubNavbar />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto px-6 py-8 border-t border-gray-800">
                        <div className="space-y-4 mb-8">
                            <a href="#" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-sm font-medium underline">Partner Locator</span>
                            </a>

                            <a href="#" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-sm font-medium underline">FAQ</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                            <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HamburgerMenu;