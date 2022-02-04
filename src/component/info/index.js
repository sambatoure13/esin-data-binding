import styles from "./index.module.css"

export function Info(props) {
    const { info } =props;
    
    return <div className = {styles.padding}> { info}</div>
}