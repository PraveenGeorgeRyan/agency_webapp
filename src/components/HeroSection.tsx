// START:HeroSection
// Hero Section Component
import React from 'react';
import MaterialIcon from './MaterialIcon';
const HeroSection = () => {
    const features = [
        { icon: 'layers_clear', title: 'No Contracts', description: 'We work month-to-month with all clients.' },
        { icon: 'account_balance_wallet', title: 'Flexible Budgets', description: 'Adjust your budget and generate leads when you need.' },
        { icon: 'money_off', title: 'Flat-rate Fee', description: 'Creating scalable pricing structures so you pay less.' },
        { icon: 'auto_awesome', title: 'Call Intelligence™', description: 'We show you what’s working and what’s not.' }
    ];

    return (
        <section className="hero-banner overflow-hidden relative bg-white">
            {/* Background Shape */}
            <div className="hidden lg:block w-full h-full absolute -top-20 lg:scale-[1.5] xl:scale-[1.8] z-0 left-1/2 -translate-x-1/2" style={{backgroundImage: 'url(https://cdn.searchkings.ca/img/home/bg-hero-circle-70a6436575.svg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', backgroundSize: 'cover'}}></div>

            {/* Hero Top */}
            <div className="container px-4 sm:px-12 lg:px-16 pb-12 md:pb-20 mx-auto relative flex flex-col items-start xl:min-h-[550px]">
                <div className="relative z-10 flex flex-col justify-center w-full mx-auto h-full mt-0 mb-0 items-center pt-24 md:pt-40">
                    <div className="w-full lg:w-4/5 flex lg:justify-center flex-col">
                        <h1 className="mb-0 mt-0 pb-0 w-full mx-auto text-4xl tracking-tight md:text-5xl xl:text-6xl lg:text-center font-bold !leading-tight text-gray-800">
                            Helping you win with<br /> Google & Microsoft Ads
                        </h1>
                        <div className="pt-0 flex md:items-center lg:justify-center w-full flex-col md:flex-row gap-0 md:gap-4 mt-4">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <img 
                                        key={i} 
                                        src="/images/star.png" 
                                        alt="star" 
                                        className="w-6 h-6"
                                    />
                                ))}
                            </div>
                            <span className="text-base lg:text-xl font-light text-gray-600">
                                1,800+ Google Customer Reviews <span className="hidden md:inline">|</span> <br className="md:hidden" />Trusted by 5,000+ customers
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-4 lg:justify-center mt-6">
                            <a href="tel:+1-437-432-674" className="shrink-0 w-max block no-underline shadow-xl rounded-full overflow-hidden">
                                <div className="group md:text-lg text-base text-white font-bold bg-gradient-to-r from-red-600 to-red-500 h-full hover:from-black hover:to-black px-7 py-3 flex items-center gap-2 transition-all duration-300">
                                    <img src="https://cdn.searchkings.ca/img/icons/call-50d0164ee7.svg" width="24" height="24" alt="call Icon" className="invert group-hover:invert" />
                                    <span className="tracking-tight">Call Us</span>
                                </div>
                            </a>
                            <a href="#" className="shrink-0 w-max block no-underline shadow-xl rounded-full overflow-hidden border-2 border-black">
                                <div className="group md:text-lg text-base text-black font-bold bg-white h-full hover:text-white hover:bg-black px-7 py-3 flex items-center gap-2 transition-all duration-300">
                                    <img src="https://cdn.searchkings.ca/img/icons/forum-30619bb514.svg" width="24" height="24" alt="forum Icon" className="group-hover:invert" />
                                    <span className="tracking-tight">Chat with Us</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Bottom */}
            <div className="py-8 md:py-12 px-4 sm:px-12 lg:px-16">
                <div className="container mx-auto relative z-10 justify-center items-stretch flex flex-col lg:flex-row bg-gray-50 rounded-2xl p-4 md:p-8">
                    <div className="lg:w-1/2 px-4 lg:pl-8 py-4 flex items-center gap-6 md:gap-12">
                        <img src="https://cdn.searchkings.ca/img/home/google-awards-7ec79bc37f.webp" className="w-[60px] lg:w-auto" alt="Google Awards" width="94" height="328" />
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 font-bold text-gray-800">2025 Google Ads <br />Ai Excellence Award&nbsp;Winner</h2>
                            <p className="leading-relaxed sm:text-lg font-light text-gray-600">AdsOnline wins the Google Ads Impact Award for using Ai to deliver better results for our customers.</p>
                            <a className="leading-snug text-sm sm:text-base mt-4 block group text-gray-800 font-medium" href="#">
                                <span className="border-black pb-1 group-hover:border-b transition-all">Learn more about our award-winning Call Intelligence™</span>
                                <MaterialIcon className="text-sm sm:text-lg leading-none align-middle">arrow_outward</MaterialIcon>
                            </a>
                        </div>
                    </div>
                    <div className="flex-col justify-center lg:w-1/2 xl:rounded-3xl flex bg-white/60 p-4 rounded-xl mt-6 lg:mt-0">
                        <div className="flex flex-wrap">
                            {features.map(feature => (
                                <div key={feature.title} className="w-1/2 p-2 md:p-4 lg:p-6 flex gap-3 items-start flex-col">
                                    <img 
                                        src="/images/star.png" 
                                        alt={feature.title} 
                                        className="w-10 h-10 text-red-600"
                                    />
                                    <div>
                                        <p className="text-base md:text-lg lg:text-xl font-bold text-gray-800">{feature.title}</p>
                                        <p className="text-xs sm:text-base font-light text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
// END:HeroSection
