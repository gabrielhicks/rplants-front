import React from 'react'
import {FootStyle, FootText} from './FooterStyle'
import FaLinkedin from '@meronex/icons/fa/FaLinkedin';
import FaGithub from '@meronex/icons/fa/FaGithub';

export default function Footer() {
    return (
        <>
        <FootStyle>
            <FootText>
                Made with ❤️
                <br></br>
                by Jessica Salbert <a target="blank_" href="https://www.linkedin.com/in/jessica-salbert/">
                <FaLinkedin /></a>
                <br></br>
                and
                Gabriel Hicks <a target="blank_" href="https://www.linkedin.com/in/gabrieljhicks/">
                <FaLinkedin /></a>
                <br></br>
                    Frontend: <a target="blank_" href="https://github.com/jessicasalbert/rplants-front"><FaGithub /></a> Backend: <a target="blank_" href="https://github.com/jessicasalbert/rplants-back"><FaGithub /></a>
            </FootText>
        </FootStyle>
        </>
    )
}
