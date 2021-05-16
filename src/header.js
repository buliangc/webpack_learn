function Header(params) {
    const dom = document.getElementById('root');
    const header = document.createElement("div");
    header.innerHTML = "header";
    dom.append(header)
}

// export default Header;
module.exports =  Header;