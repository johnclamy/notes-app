import Link from 'next/link'


const Navbar = () => (
    <nav>
        <Link href='/'>home</Link>
        {' | '}
        <Link href='/notes'>notes</Link>
        {' | '}
        <Link href='/notes/new'>create new</Link>
    </nav>
)


export default Navbar
