import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import "./Widgets.css"
function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{ subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <Info/>
            </div>
            {newsArticle("PAPA React is back", "Top news - 999 readers")}
            {newsArticle("Coronavirus: BD Updates", "Top news - 886 readers")}
            {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
            {newsArticle("Bitcoin Breakers $22k", "Crypto - 8000 readers")}
            {newsArticle("Is Redux too good?", "Code - 123 readers")}
            {newsArticle("When PAPA React will launch course?", "Top news - 2500 readers")}
        </div>
    )
}

export default Widgets
