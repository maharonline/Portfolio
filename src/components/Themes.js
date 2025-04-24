import React from 'react'
import ThemesItem from './ThemesItem'
import "./Themes.css"
import { FaCog } from 'react-icons/fa'
import { BsMoon } from 'react-icons/bs'
import { themes } from '../data'

export default function Themes() {
    return (
        <div>
            <div className="style_switcher">
                <div className="style_switcher_toggler">
                    <FaCog />
                </div>
                <div className="theme_toggler">
                    <BsMoon />
                </div>
                <h3 className="style_switcher_title">Style Switcher</h3>
                <div className="style_switcher-items">
                    {themes.map((theme, index) => {
                        return <ThemesItem key={index} {...theme} />
                    })}
                </div>

                <div className="style_switcher_close">&time;</div>
            </div>
        </div>
    )
}
