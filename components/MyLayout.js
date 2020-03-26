import Header from './Header';
import Footer from './Footer';

const headerSpacer = {
        marginTop: '50px',
        marginBottom: '50px',
        backgroundColor: '#122336',
        height: '100vh'
}

// .color-primary-0 { color: #303B49 }	/* Main Primary color */
// .color-primary-1 { color: #A6ADB6 }
// .color-primary-2 { color: #5E6A79 }
// .color-primary-3 { color: #122336 }
// .color-primary-4 { color: #020B16 }

const Layout = props => (<>
    <Header />
    <div style={headerSpacer}>
        {props.children}
    </div>
    <Footer />
    
</>);

export default Layout;

<style jsx>{`
body {
   
  }
`}</style>
