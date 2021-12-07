import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'

const imagePath = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/439e9e9f-899d-4fc7-a62c-162b8fefc736/dbig4vl-750fcddf-feaa-467f-b16e-b2fe3de451a6.png/v1/fill/w_320,h_320,strp/irrawaddy_dolphin_by_salty_chiku_dbig4vl-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzIwIiwicGF0aCI6IlwvZlwvNDM5ZTllOWYtODk5ZC00ZmM3LWE2MmMtMTYyYjhmZWZjNzM2XC9kYmlnNHZsLTc1MGZjZGRmLWZlYWEtNDY3Zi1iMTZlLWIyZmUzZGU0NTFhNi5wbmciLCJ3aWR0aCI6Ijw9MzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZRJsDudJuFAmAvLaYkx-RDjQP1WWPFxaqhMg0ao6mIk"

// const logoLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

function Marketplace({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6 flex justify-between">
        <div className="flex">
          <Link href="/">
            <img src={imagePath} width="80" />
          </Link>
          <Link href="/">
            <p className="text-5xl font-bold pt-4 pl-4">Irrawady</p>   
          </Link>
          <p className="pt-9 pl-3">The NFT Marketplace You've Been Lokking For.</p>
        </div>
        <div className="flex mt-4">
          <Link href="/create-item">
            <a className="mr-6 text-blue-600 text-xl font-bold">
              Mint
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-blue-600 text-xl font-bold">
              My NFTs
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-blue-600 text-xl font-bold">
              Catalog
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace