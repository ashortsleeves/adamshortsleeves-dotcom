import folder from '../icons/folder.svg';
import fork from '../icons/fork.svg';
import letter from '../icons/letter.svg';
import linkedin from '../icons/linkedin.svg';
import github from '../icons/github.svg';

const imageMap = {
  folder,
  fork,
  letter,
  linkedin,
  github,
};

export default function TabButton({ title, isSelected, image, ...props }) {
  return (
      <button className={isSelected ? 'active' : undefined} { ...props }>
        {title}
        <div className={'as-icon-wrapper as-icon-wrapper__' + image}>
          <img 
            src={imageMap[image]}
            className={'as-icon as-icon__' + image}
            alt={title + ' icon'}
          />
          {image === 'fork' && (
            <>
              <span className="node node-1"></span>
              <span className="node node-2"></span>
              <span className="node node-3"></span>
              <span className="node node-4"></span>
              <span className="node node-5"></span>
              <span className="node node-6"></span>
              <span className="node node-7"></span>
              <span className="node node-8"></span>
            </>
          )}
        </div>
      </button>
  );
}
