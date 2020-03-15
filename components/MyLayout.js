import Header from './Header';
import Footer from './Footer';

const layoutStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  // fontSize: '30px',
  // letterSpacing:  '15px',
  wordSpacing: '20px',
  color: '#FFFFFF',
  fontWeight: 700,
  textDecoration: 'none',
  fontStyle: 'normal',
  textTransform: 'uppercase',
} 

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;