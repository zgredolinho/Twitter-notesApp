import React from "react";
import styles from './RadioBtn.module.scss';

const RadioBtn = ({id,checked,changeFn,children}) => (
<label className={styles.wrapper}>

    <input
        type="radio"
        id= {id}
        checked = {checked}
        onChange = {changeFn}
        />
    <div className={styles.radioButton} />
    {children}
</label>
);

export default RadioBtn;