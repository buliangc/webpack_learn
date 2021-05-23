// function Content(params) {
//     const dom = document.getElementById('root');
//     const content = document.createElement("div");
//     content.innerHTML = "content";
//     dom.append(content)
// }

// // export default Content;
// module.exports =  Content;

function Counter(params) {
    const div = document.createElement('div');
    div.setAttribute('id', 'counter');
    div.innerHTML = 1;
    div.onclick = function() {
        div.innerHTML = parseInt(div.innerHTML) + 1;
    }
    document.body.append(div);
    // const root = document.getElementById('root');
    // root.append(div)
}

export default Counter;