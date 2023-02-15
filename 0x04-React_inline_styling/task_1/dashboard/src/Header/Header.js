import holberton from '../Holberton.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
    return (
        <>
            <div className={css(styles["App-header"])}>
                <img src={holberton} className={css(styles['App-logo'])} alt="logo" />
                <h1 className={css(styles['App-h1'])}>School dashboard</h1>
                <hr className={css(styles.hr)} />
            </div>
        </>
    )
}

const styles = StyleSheet.create({
    "App-header": {
        backgroundColor: 'white',
        height: '10vh',
        display: 'inline',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'rgb(230, 62, 62)'
    },
    "App-logo": {
        width: "200px",
        height: "200px",
    },
    hr: {
        borderTop: '3.5px solid rgb(230, 62, 62)',
    },
    "App-h1": {
        display: 'inline',
        fontWeight: '500',
        position: 'relative',
        bottom: '85px',
    }
})