import Link from "next/link";

function NavBar() {
    return (  
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/users">Users</Link></li>
        </ul>
    );
}

export default NavBar;