/* becodeorg/pomodoro
 *
 * /pomodoro.js - Pomodoro main container
 *
 * coded by leny@BeCode
 * started at 02/12/2019
 */

import React from "react";

const styles = {
    container: {
        width: "50vw",
        height: "20vh",
        border: ".1rem solid white",
    },
};

export default () => (
    <div style={styles.container}>
        <div style={styles.timer} />
        <div style={styles.tools} />
    </div>
);
