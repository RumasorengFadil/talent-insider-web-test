import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-white mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* MAIN ROW */}
                <div className="flex flex-col md:flex-row md:justify-between md:gap-10 gap-10">

                    {/* Logo and Description */}
                    <div className="flex-1">
                        <div className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#1d1a1a] text-2xl md:text-[36px] tracking-[4.32px] mb-6">
                            LOGO
                        </div>
                        <p className="font-['Open_Sans:Regular',sans-serif] text-[#1d1a1a] text-sm md:text-base leading-relaxed">
                            Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.
                        </p>
                    </div>

                    {/* Property */}
                    <div className="flex-1">
                        <h3 className="font-['Open_Sans:Bold',sans-serif] font-bold text-[#1d1a1a] text-base md:text-lg uppercase mb-4 md:mb-5">
                            PROPERTY
                        </h3>
                        <ul className="flex flex-col gap-3 font-['Open_Sans:Regular',sans-serif] text-[#1d1a1a] text-sm md:text-base">
                            <li><a href="#" className="hover:underline">Property Category</a></li>
                            <li><a href="#" className="hover:underline">Testimony</a></li>
                            <li><a href="#" className="hover:underline">Download App</a></li>
                        </ul>
                    </div>

                    {/* About */}
                    <div className="flex-1">
                        <h3 className="font-['Open_Sans:Bold',sans-serif] font-bold text-[#1d1a1a] text-base md:text-lg uppercase mb-4 md:mb-5">
                            ABOUT
                        </h3>
                        <ul className="flex flex-col gap-3 font-['Open_Sans:Regular',sans-serif] text-[#1d1a1a] text-sm md:text-base">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">News and Events</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div className="flex-1">
                        <h3 className="font-['Open_Sans:Bold',sans-serif] font-bold text-[#1d1a1a] text-base md:text-lg uppercase mb-4 md:mb-5">
                            CONTACTS
                        </h3>

                        <ul className="flex flex-col gap-3 font-['Open_Sans:Regular',sans-serif] text-[#1d1a1a] text-sm md:text-base mb-5">
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                            <li><a href="#" className="hover:underline">Send Feedback</a></li>
                            <li><a href="#" className="hover:underline">Socials</a></li>
                        </ul>

                        <div className="flex gap-4">
                            <Link href="#"
                                className="bg-black p-2 rounded-full text-white hover:bg-black/90 transition-colors">
                                <FaFacebookF size={20} />
                            </Link>
                            <Link href="#" className="bg-black p-2 rounded-full text-white hover:bg-black/90 transition-colors">
                                <FaLinkedin size={20} />
                            </Link>
                            <Link href="#"
                                className="bg-black p-2 rounded-full text-white hover:bg-black/90 transition-colors">
                                <BsTwitter size={20} />
                            </Link>
                            <Link href="#"
                                className="bg-black p-2 rounded-full text-white hover:bg-black/90 transition-colors">
                                <TiSocialInstagram size={20} />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="mt-8 pt-6 border-t border-[#efefef]">
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[#1d1a1a] text-sm">
                        © LOGO 2022
                    </p>
                </div>

            </div>
        </footer>
    );
}