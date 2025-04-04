
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// React icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { user } = useContext(AuthContext);
    console.log(user);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Nav items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Blog", path: "/blog" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-10'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-sky-700" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* Logo */}
                    <Link to='/' className='text-2xl font-bold text-white  flex items-center gap-2 hover:text-sky-500'>
                        <FaBlog className='inline-block ' /> Books
                    </Link>

                    {/* Nav items for large devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-300'>
                                {link}
                            </Link>
                        ))}
                    </ul>

                    {/* Button for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-400 font-serif' /></button>
                       
                    </div>

                    {/* Menu button for mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none font-serif'>
                            {isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />}
                        </button>
                    </div>
                </div>

                {/* Nav items for small devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-sky-500 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
