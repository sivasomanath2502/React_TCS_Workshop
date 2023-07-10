const Header = ({name, styleVal}) => {
    return (
        <div style={styleVal}>
            <h2>{name}</h2>
        </div>
    );
}

export default Header;