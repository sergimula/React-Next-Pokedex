import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
        a {
          font-family: 'Press Start 2P', 'Arial';
          font-size: 14px;
          color: #000000;
        }
      `}</style>
    </div>
  )
}
