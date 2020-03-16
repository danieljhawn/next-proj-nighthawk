import Header from './Header';
import Footer from './Footer';

const headerSpacer = {
        marginTop: '50px',
        marginBottom: '50px' 
}

const Layout = props => (<>
    <Header />
    <div style={headerSpacer}>
        {props.children}
    </div>
    <Footer />
</>);

export default Layout;