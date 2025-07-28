// START:Footer
// Footer Component
const Footer = () => {
    const footerLinks = {
        "Services": [
            { name: "Ads Management", href: "/services/ads-management/" },
            { name: "Call Intelligence™", href: "/services/call-intelligence/" },
            { name: "Local Services Ads", href: "/services/local-services-ads/" },
            { name: "eCommerce", href: "/services/ecommerce/" },
            { name: "Video Marketing", href: "/services/video-marketing/" },
            { name: "Web Services", href: "/services/web-services/" }
        ],
        "About Us": [
            { name: "Achievements", href: "/achievements/" },
            { name: "Testimonials", href: "/testimonials/" },
            { name: "Join Our Team", href: "/join-our-team/" },
            { name: "About Us", href: "/about-us/" },
            { name: "Case Studies", href: "/case-studies/" }
        ],
        "Solutions": [
            { name: "Partners & Franchises", href: "/solutions/partners-franchises/" },
            { name: "Web Hosting & Maintenance", href: "/solutions/hosting/" }
        ]
    };

    return (
        <footer className="bg-white shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)] py-8 lg:py-16 text-gray-600">
            <div className="container px-4 sm:px-12 mx-auto flex flex-wrap lg:flex-nowrap justify-between gap-y-8">
                
                <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 order-1">
                    <p className="text-2xl pt-2 pb-2 text-gray-800 font-bold">Services</p>
                    <div className="flex flex-col gap-y-1">
                        {footerLinks["Services"].map(link => <a key={link.name} href={link.href} className="py-2 hover:underline">{link.name}</a>)}
                    </div>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 order-2">
                    <p className="text-2xl pt-2 pb-2 text-gray-800 font-bold">Solutions</p>
                    <div className="flex flex-col gap-y-1">
                         {footerLinks["Solutions"].map(link => <a key={link.name} href={link.href} className="py-2 hover:underline">{link.name}</a>)}
                    </div>
                     <div className="pt-4 hidden lg:block">
                        <p className="text-base font-bold text-gray-800 pb-2">Download our App</p>
                        <div className="flex gap-2">
                            <img src="https://cdn.searchkings.ca/img/footer/app-logo-f8a74c2503.svg" width="65" height="65" alt="AdsOnline App Logo" />
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <a href="https://apps.apple.com/ca/app/searchkings/id6502098946" target="_blank"><img src="https://cdn.searchkings.ca/img/footer/app-ios-6b6ad68583.svg" width="92" height="92" alt="iOS App"/></a>
                                <a href="https://play.google.com/store/search?q=Searchkings&c=apps&hl=en" target="_blank"><img src="https://cdn.searchkings.ca/img/footer/app-android-8cbe1e3d22.svg" width="92" height="92" alt="Android App"/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 order-3">
                    <p className="text-2xl pt-2 pb-2 text-gray-800 font-bold">About Us</p>
                    <div className="flex flex-col gap-y-1">
                        {footerLinks["About Us"].map(link => <a key={link.name} href={link.href} className="py-2 hover:underline">{link.name}</a>)}
                    </div>
                </div>

                <div className="w-full lg:w-1/4 xl:w-2/5 flex flex-col order-4">
                    <p className="text-2xl py-3 tracking-tight font-bold text-gray-800">Contact Us</p>
                    <div className="flex flex-col gap-4">
                        <div>
                            <p><a href="tel:1-888-335-4647">Toll-free: <span className="underline">1 (888) 335-4647</span></a></p>
                            <p><a href="tel:(416) 913-1279">Toronto: <span className="underline">(416) 913-1279</span></a></p>
                            <p><a href="tel:1 (888) 693-1279">Text Us: <span className="underline">1 (888) 693-1279</span></a></p>
                        </div>
                        <p>Toronto: 4051 Gordon Baker Rd. Unit B, <br />Scarborough, ON M1W 2P3</p>
                        <p>Vancouver: 3602 Gilmore Way, Burnaby Unit, <br />BC V5G 4W7</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-6">
                        <img className="w-[80px] shadow-lg" alt="Google Premiere Partner Badge" src="https://cdn.searchkings.ca/img/premier-google-partner-2025-82cba7b385.svg" />
                        <img className="w-[135px] shadow-lg" alt="Microsoft Badge" src="https://cdn.searchkings.ca/img/ms-elite-partner-badge-2025-0f6306e575.svg" />
                        <img className="w-[70px] shadow-lg" alt="Impact Awards Badge" src="https://cdn.searchkings.ca/img/ads-impact-awards-aa7ee6be8d.webp" />
                    </div>
                </div>
            </div>
            <small className="container px-4 sm:px-12 mx-auto block pt-8 text-left w-full text-xs">
                © AdsOnline 2025 | <a href="/terms-conditions" className="underline">Terms & Conditions</a> | <a href="/privacy-policy" className="underline">Privacy Policy</a> | <a href="https://support.google.com/adspolicy/answer/94230?hl=en" target="_blank" className="underline">Working With 3rd Parties</a> | <a href="/accessibility-plans" className="underline">Accessibility Plan</a>
            </small>
        </footer>
    );
};
export default Footer;
// END:Footer
