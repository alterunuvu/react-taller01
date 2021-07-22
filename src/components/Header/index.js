import "./header.css";
import img from "../../assets/img/logo.png"

export default function Header(props) {

  
    console.log(props);
    return <header>
            <span><img src={img} alt="Logo del proyecto"></img></span>
            <span>{props.contact}</span>
           </header>
}
  