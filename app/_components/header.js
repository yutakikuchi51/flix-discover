import './header.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
            <div className='header-container'>
                <div className='movie'>
                <Link href="./">
                <Image
                    src="/_images/movie.png"
                    alt="movie icon"
                    width={30}
                    height={10}
                    layout="fixed"/>
                </Link>
                </div>
                <div className="header">Flix Discover</div>
                <div className='search'>
                <Link href="search">
                <Image
                    src="/_images/search.png"
                    alt="search icon"
                    width={30}
                    height={10}
                    layout="fixed"/>
                </Link>
                </div>
            </div>
    )
}