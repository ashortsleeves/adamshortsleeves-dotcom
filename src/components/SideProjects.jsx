import ProjectsData from '../sideprojects.json';

export default function SideProjects() {
    const sites = ProjectsData;

    return (
        <div className="as-work as-sideprojects">
            {sites.map((site, index) => (
                <a href={site.url} key={index} target='_blank'>
                    <p>
                        {site.name}
                        <span>{site.description}</span>
                    </p>
                    <img src={'/screenshots/' + site.img + '.png'} alt={site.name} />
                </a>
            ))}
        </div>
    )
}