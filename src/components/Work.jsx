import SitesData from '../work.json';

export default function Work() {
    const sites = SitesData;

    return (
        <div className="as-work">
            <div className="as-description">
                <p>I do freelance website design and development. <span>I also work for other agencies and provide ongoing support for their clients.</span></p>
            </div>
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