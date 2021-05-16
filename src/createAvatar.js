import picture from '../assets/my_word.jpg' 
import style from './style.css'

function CreateAvatar(params) {
    const img = new Image();
    img.src = picture;
    img.alt = "未正确加载...";
    img.classList.add(style.avatar)
    
    var root = document.getElementById("root");
    root.append(img);
}

export default CreateAvatar;