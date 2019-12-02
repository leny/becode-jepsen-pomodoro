/* becodeorg/pomodoro
 *
 * /src/components/cyphers.js - Cyphers components
 *
 * coded by leny@BeCode
 * started at 02/12/2019
 */

import React from "react";
import PropTypes from "prop-types";

const cyphers = ({value}) => <span>{`${value}`.padStart(2, "0")}</span>;

cyphers.propTypes = {
    value: PropTypes.number.isRequired,
};

export default cyphers;
