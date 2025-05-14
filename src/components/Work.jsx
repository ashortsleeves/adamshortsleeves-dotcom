import { useState } from 'react';
import SitesData from '../work.json';

export default function Work() {
    const sites = SitesData;
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };


    return (
        <div className="as-work">
            <div className="as-description">
                <p>Website design and development. <span>I also work for other agencies, providing ongoing support for their clients.</span></p>
            </div>
            {sites.map((site, index) => (
                <div onClick={() => handleClick(index)}>
                    <a
                        href={site.url}
                        key={index}
                        target='_blank'
                        rel="noreferrer"
                        className={activeIndex === index ? 'as-visible': ''}
                    >
                        <p>
                            {site.name}
                            <span>{site.description}</span>
                            <span className="as-view">View Site</span>
                        </p>
                        <img src={'/screenshots/' + site.img + '.png'} alt={site.name} />
                    </a>
                </div>
            ))}
        </div>
    )
}