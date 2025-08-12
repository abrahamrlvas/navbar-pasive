import { useState, useRef, useEffect } from 'react';

const MobileInTheLabSubNavbar = () => {
    const scrollContainerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const totalImages = 3;
    useEffect(() => {
        const updateContainerWidth = () => {
            if (scrollContainerRef.current) {
                const containerRect = scrollContainerRef.current.getBoundingClientRect();
                setContainerWidth(containerRect.width);
            }
        };

        updateContainerWidth();
        window.addEventListener('resize', updateContainerWidth);

        return () => window.removeEventListener('resize', updateContainerWidth);
    }, []);

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
        setDragOffset(deltaX);
    };

    const handleEnd = () => {
        if (!isDragging) return;
        const threshold = 50
        if (dragOffset > threshold) {
            goToPrevious();
        } else if (dragOffset < -threshold) {
            goToNext();
        }

        setIsDragging(false);
        setDragOffset(0);
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

    const handleTouchEnd = () => {
        handleEnd();
    };

    const progressPercentage = ((currentIndex + 1) / totalImages) * 100;

    return (
        <div className="w-full">
            <div className="relative">
                <div className="relative w-full bg-transparent text-white py-4">
                    <div className="py-4">
                        <div className="mb-6">
                            <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer w-full">
                                Read all articles
                            </button>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-4">Browse by Category</h3>
                            <ul className="space-y-3">
                                <li className="group/ros">
                                    <a href="#" className="relative inline-block  text-white hover:text-gray-300 transition-all duration-500 group mb-2">
                                        ROS & Skin Aging
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-100 origin-right transition-transform duration-300 ease-out group-hover:scale-x-0"></span>
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out delay-300 group-hover:scale-x-100"></span>
                                    </a>
                                </li>
                                <li className="group/science">
                                    <a href="#" className="relative inline-block text-white hover:text-gray-300 transition-all duration-500 group mb-2">
                                        Science & Technology
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-100 origin-right transition-transform duration-300 ease-out group-hover:scale-x-0"></span>
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out delay-300 group-hover:scale-x-100"></span>
                                    </a>
                                </li>
                                <li className="group/industry">
                                    <a href="#" className="relative inline-block text-white hover:text-gray-300 transition-all duration-500 group mb-2">
                                        Industry Guidelines & Regulations
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-100 origin-right transition-transform duration-300 ease-out group-hover:scale-x-0"></span>
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out delay-300 group-hover:scale-x-100"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-4">Highlights</h3>
                            <div className="relative">
                                <div
                                    ref={scrollContainerRef}
                                    className={`navigation-container overflow-hidden select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={handleMouseLeave}
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <div
                                        className="article-grid flex pb-6 transition-transform duration-300 ease-out"
                                        style={{
                                            '--transform-x': `${-currentIndex * containerWidth + dragOffset}px`,
                                            '--grid-width': `${totalImages * containerWidth}px`
                                        }}
                                    >
                                        <div
                                            className="flex-none group article-card px-4"
                                            style={{ '--article-width': `${containerWidth}px` }}
                                        >
                                            <div className="relative rounded-lg overflow-hidden mb-4">
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
                                            <p className="text-base font-bold text-center leading-[140%]">UNDERSTANDING ROSACEA: CAUSES, SYMPTOMS, AND BREAKTHROUGH TREATMENTS</p>
                                        </div>
                                        <div
                                            className="flex-none group article-card px-4"
                                            style={{ '--article-width': `${containerWidth}px` }}
                                        >
                                            <div className="relative rounded-lg overflow-hidden mb-4">
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
                                            <p className="text-base font-bold text-center leading-[140%]">HORMONAL SHIFTS AND SKIN AGING: UNDERSTANDING MENOPAUSE'S IMPACT ON THE SKIN</p>
                                        </div>
                                        <div
                                            className="flex-none group article-card px-4"
                                            style={{ '--article-width': `${containerWidth}px` }}
                                        >
                                            <div className="relative rounded-lg overflow-hidden mb-4">
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
                                            <p className="text-base font-bold text-center leading-[140%]">THE MOLECULAR INTERSECTION OF DIABETES AND SKIN RESILIENCE</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 px-2">
                                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-white/60 rounded-full transition-all duration-300 ease-out"
                                            style={{ '--progress-width': `${progressPercentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileInTheLabSubNavbar;