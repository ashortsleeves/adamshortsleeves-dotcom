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
    <li>
      <button className={isSelected ? 'active' : undefined} { ...props }>
        {title}
        <div className={'as-icon-wrapper as-icon-wrapper__' + image}>
          <img 
            src={imageMap[image]}
            className={'as-icon as-icon__' + image}
            alt={title + ' icon'}
          />
        </div>
      </button>
    </li>
  );
}
