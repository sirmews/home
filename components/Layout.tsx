import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: any) => {

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="my-6">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
