import { useState } from 'react';
import ProjectsData from '../sideprojects.json';

export default function SideProjects() {
    const sites = ProjectsData;
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="as-work as-sideprojects">
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