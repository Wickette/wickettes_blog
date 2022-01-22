import React from "react";
import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="header_titles">
                <span className="header_title_small">Wickette's</span>
                <span className="header_title_large">Blog</span>
            </div>
            <img className="header_image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2Flandscape-sunset-hill-nature-sunrise-evening-morning-wilderness-dusk-New-Zealand-plateau-cloud-autumn-mountain-flower-dawn-grassland-meadow-wildflower-prairie-3840x2160-px-mountainous-landforms-geographical-feature-mountain-range-556254.jpg&f=1&nofb=1" alt="" />
        </div>
    )
}