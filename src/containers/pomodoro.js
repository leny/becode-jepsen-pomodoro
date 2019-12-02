/* becodeorg/pomodoro
 *
 * /src/containers/pomodoro.js - Pomodoro main container
 *
 * coded by leny@BeCode
 * started at 02/12/2019
 */

import React from "react";

import Cyphers from "../components/cyphers";

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "50vw",
        height: "20vh",
        border: ".1rem solid white",
    },
    timer: {
        flex: "1 0 auto",
        textAlign: "center",
        fontSize: "12.5rem",
        fontWeight: "bold",
    },
    tools: {
        height: "5rem",
        flex: "none",
    },
};

export default () => (
    <div style={styles.container}>
        <div style={styles.timer}>
            <Cyphers value={0} />
            {":"}
            <Cyphers value={0} />
        </div>
        <div style={styles.tools} />
    </div>
);
