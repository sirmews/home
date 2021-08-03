import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: any) => {

  return (
    <div className="bg-gray-900 text-gray-300">
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;
