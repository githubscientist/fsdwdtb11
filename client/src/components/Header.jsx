const Header = ({ sendMessage }) => {

    const msg = 'Apple is a fruit';

    sendMessage(msg);

    return <h1>Hello World!</h1>;
}

export default Header;