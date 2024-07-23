// components/Navbar.js
import Image from 'next/image';
import Link from 'next/link';
import NavbarClient from './NavbarClient ';


const GradientAppBar = ({ children }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(90deg, #1954a8, #5F2477, #BA3966, #d02C45, #d67824)',
    padding: '10px 20px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  }}>
    {children}
  </div>
);

const LogoContainer = ({ children }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  }}>
    {children}
  </div>
);

export default function Navbar() {
  const imageSrc = 'https://dt-paintpros.myshopify.com/cdn/shop/files/logo_a162f414-bff7-4279-b3f9-f69a785e16df.png';

  return (
    <GradientAppBar>
      <Link href="/" passHref>
        <LogoContainer>
          <Image
            src={imageSrc}
            alt="SnS Paint"
            width={170}
            height={70}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </LogoContainer>
      </Link>

      <NavbarClient />
    </GradientAppBar>
  );
}