import React, { Component } from "react";
import Particles from "react-particles-js";

import backgroundConfig from "../config/ParticleConfig";

export default class ParticleBackground extends Component {
    render() {
        return (
            <Particles params={ backgroundConfig } />
        );
    }
}
