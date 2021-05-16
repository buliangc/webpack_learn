function Sidebar(params) {
    const dom = document.getElementById('root');
    const sidebar = document.createElement("div");
    sidebar.innerHTML = "sidebar";
    dom.append(sidebar)
}

// export default Sidebar;
module.exports = Sidebar;