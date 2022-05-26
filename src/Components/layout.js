
import classes from "./layout.module.css";
const Layout=(props)=>{
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
    
}

export default Layout;