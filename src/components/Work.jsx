import SitesData from '../work.json';

export default function Work() {
    const sites = SitesData;

    return (
        <div className="as-work">
            {sites.map((site, index) => (
                <a href={site.url} key={index} target='_blank'>
                    <p>{site.name}</p>
                    <img src={'/screenshots/' + site.img + '.png'}/>
                </a>
            ))}
        </div>
    )
}