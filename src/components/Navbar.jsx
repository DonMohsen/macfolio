import dayjs from "dayjs";
import { navIcons, navLinks } from "../constants";
import useWindowStore from "../store/window";

const Navbar = () => {
    const {openWindow}=useWindowStore()
    const links= navLinks;
  return <nav>
    <div>

    <img src="/images/logo.svg" alt="logo"/>
    <p className="font-bold">Portfolio</p>
    <ul>
    {links.map(({id,name,type})=>(
        <li key={id} onClick={()=>openWindow(type)}>
            {name}
        </li>
    ))}
    </ul>
    </div>
    <div>
        <ul>
            {navIcons.map(({id,img})=>(
                <li key={id}>
                    <img className="icon-hover" src={img} alt={`icon-${id}`} />
                </li>
            ))}
        </ul>
        <time >{dayjs().format('ddd MMM D h:mm A')}</time>
    </div>
  </nav>;
};

export default Navbar;
