import Head from "next/head"
import Link from "next/link"
const Layout = ({title,children}) => {
  return (
        <>

          <Head>
        <title>{title ? title + '- Amazon':'Amazon'}</title>
    </Head>
    <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 justify-between shadow-md items-center px-4">
            <Link href="/">
               <h1 className="text-lg font-bold">amazona</h1>
            </Link>
            <div>
              <Link href="/cart">
              <span className="p-2">Cart</span>
              </Link>
              <Link href="/login"><span className="p-2">Login</span></Link>  
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">
         {children}
        </main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
         <p>Copyrigth © 2022 Amazona </p>
        </footer>
    </div>
        </>
  )
}
export default Layout