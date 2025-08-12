import  { useState, useRef, useEffect } from 'react';

const MobileShopSubNavbar = () => {
    const scrollContainerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const totalImages = 6;

    const getCardWidth = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) { 
            return screenWidth; 
        } else if (screenWidth < 768) { 
            return 320; 
        } else {
            return 288;
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleTouchMovePassive = (e) => {
            if (isDragging) {
                e.preventDefault();
                handleMove(e.touches[0].clientX);
            }
        };

        container.addEventListener('touchmove', handleTouchMovePassive, { passive: false });

        return () => {
            container.removeEventListener('touchmove', handleTouchMovePassive);
        };
    }, [isDragging]);

    const goToPrevious = () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : totalImages - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
        setCurrentIndex(newIndex);
    };

    const handleStart = (clientX) => {
        setIsDragging(true);
        setStartX(clientX);
        setDragOffset(0);
    };

    const handleMove = (clientX) => {
        if (!isDragging) return;
        
        const deltaX = clientX - startX;
        
        if (currentIndex === 0 && deltaX > 0) {
            setDragOffset(deltaX * 0.3);
            return;
        }
        
        if (currentIndex === totalImages - 1 && deltaX < 0) {
            setDragOffset(deltaX * 0.3);
            return;
        }
        
        setDragOffset(deltaX);
    };

    const handleEnd = () => {
        if (!isDragging) return;
        
        setIsDragging(false);
        
        const cardWidth = getCardWidth();
        const threshold = cardWidth * 0.25;
        if (dragOffset > threshold && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (dragOffset < -threshold && currentIndex < totalImages - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        
        setDragOffset(0);
        setStartX(null);
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        handleStart(e.clientX);
    };

    const handleMouseMove = (e) => {
        handleMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleEnd();
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            handleEnd();
        }
    };

    const handleTouchStart = (e) => {
        handleStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleEnd();
    };

    const progressPercentage = ((currentIndex + 1) / totalImages) * 100;

    return (
        <div className="w-full">
            <div className="relative">
                <div
                    className="relative w-full bg-transparent text-white py-4"
                >
                    <div className="py-4">
                        <div className="mb-6">
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="relative inline-block font-bold text-white hover:text-gray-300 transition-all duration-500 group">
                                        Skincare
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="relative inline-block font-bold text-white hover:text-gray-300 transition-all duration-500 group">
                                        Bundles
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="relative inline-block font-bold text-white hover:text-gray-300 transition-all duration-500 group">
                                        Refills
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="relative inline-block font-bold text-white hover:text-gray-300 transition-all duration-500 group">
                                        UV Camera
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div
                                ref={scrollContainerRef}
                                className={`navigation-container overflow-hidden select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseLeave}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div
                                    className={`product-grid flex pb-6 w-max ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'}`}
                                    style={{ '--transform-x': `${-currentIndex * getCardWidth() + dragOffset}px` }}
                                >
                                    <a
                                        className="flex-none group product-card px-4 w-screen sm:w-80 md:w-72"
                                    >
                                        <div className="relative rounded-lg overflow-hidden mb-4 max-w-sm">
                                            <img src="/shop-1.webp" alt="Dynamic Age Defense" className="rounded-lg w-full transition-all duration-500 ease-in-out group-hover:opacity-0" />
                                            <img src="/shop2.webp" alt="Dynamic Age Defense Hover" className="absolute top-0 left-0 rounded-lg w-full opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100" />
                                        </div>
                                        <p className="text-white font-bold text-center">DYNAMIC AGE DEFENSE</p>
                                    </a>

                                    <a
                                        className="flex-none group product-card px-4 w-screen sm:w-80 md:w-72"
                                    >
                                        <div className="relative rounded-lg overflow-hidden mb-4 max-w-sm">
                                            <img src="/shop-3.webp" alt="Bioadaptive Stress Repair" className="rounded-lg w-full transition-all duration-500 ease-in-out group-hover:opacity-0" />
                                            <img src="/shop-4.webp" alt="Bioadaptive Stress Repair Hover" className="absolute top-0 left-0 rounded-lg w-full opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100" />
                                        </div>
                                        <p className="text-white font-bold text-center">BIOADAPTIVE STRESS REPAIR</p>
                                    </a>

                                    <a
                                        className="flex-none group product-card px-4 w-screen sm:w-80 md:w-72"
                                    >
                                        <div className="relative rounded-lg overflow-hidden mb-4 max-w-sm">
                                            <img src="/shop-5.webp" alt="Precision Eye Lift" className="rounded-lg w-full transition-all duration-500 ease-in-out group-hover:opacity-0" />
                                            <img src="/shop-6.webp" alt="Precision Eye Lift Hover" className="absolute top-0 left-0 rounded-lg w-full opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100" />
                                        </div>
                                        <p className="text-white font-bold text-center">PRECISION EYE LIFT</p>
                                    </a>
                                    <a
                                        className="flex-none group product-card px-4 w-screen sm:w-80 md:w-72"
                                    >
                                        <div className="relative rounded-lg overflow-hidden mb-4 max-w-sm">
                                            <img src="/shop-5.webp" alt="Precision Eye Lift" className="rounded-lg w-full transition-all duration-500 ease-in-out group-hover:opacity-0" />
                                            <img src="/shop-6.webp" alt="Precision Eye Lift Hover" className="absolute top-0 left-0 rounded-lg w-full opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100" />
                                        </div>
                                        <p className="text-white font-bold text-center">LIFT</p>
                                    </a>
                                    <a
                                        className="flex-none group product-card px-4 w-screen sm:w-80 md:w-72"
                                    >
                                        <div className="relative rounded-lg overflow-hidden mb-4 max-w-sm">
                                            <img src="/shop-5.webp" alt="Precision Eye Lift" className="rounded-lg w-full transition-all duration-500 ease-in-out group-hover:opacity-0" />
                                            <img src="/shop-6.webp" alt="Precision Eye Lift Hover" className="absolute top-0 left-0 rounded-lg w-full opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100" />
                                        </div>
                                        <p className="text-white font-bold text-center">PRECISION</p>
                                    </a>
                                    <a
                                        className="flex-none group product-card px-4 w-screen sm:w-80 md:w-72"
                                    >
                                        <div className="relative rounded-lg overflow-hidden mb-4 max-w-sm">
                                            <img src="/shop-5.webp" alt="Precision Eye Lift" className="rounded-lg w-full transition-all duration-500 ease-in-out group-hover:opacity-0" />
                                            <img src="/shop-6.webp" alt="Precision Eye Lift Hover" className="absolute top-0 left-0 rounded-lg w-full opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100" />
                                        </div>
                                        <p className="text-white font-bold text-center">EYE</p>
                                    </a>
                                </div>
                            </div>
                            <div className="mt-4 px-2">
                                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-white/60 rounded-full transition-all duration-300 ease-out progress-bar"
                                        style={{ '--progress-width': `${progressPercentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer w-full">
                                SHOP ALL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileShopSubNavbar;