import Header from './Header';
import Footer from './Footer';

const headerSpacer = {
        marginTop: '60px' 
}

const Layout = props => (<>
    <Header />
    <div style={headerSpacer}>
        {props.children}
    </div>
    <Footer />
</>);

export default Layout;