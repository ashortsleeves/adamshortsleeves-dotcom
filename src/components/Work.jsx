import SitesData from '../work.json';

export default function Work() {
    const sites = SitesData;

    return (
        <div className="as-work">
            {sites.map((site, index) => (
                <a href={site.url} key={index} target='_blank' rel="noreferrer">
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