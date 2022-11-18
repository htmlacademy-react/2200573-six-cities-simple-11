import { useAppSelector } from '../../hooks';
import {City} from '../../types/city';

type NavLocationProp = {
  location: City;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function NavLocation({location, onClick}:NavLocationProp): JSX.Element
{
  const city = useAppSelector((state) => state.city);
  const isActive = city && location.key === city.key;
  const styleActive = {border: 'none'};
  const styleNotActive = {backgroundColor: 'transparent', border: 'none'};
  return(
    <li className="locations__item">
      <button style={isActive ? styleActive : styleNotActive} onClick={(event) => {onClick(event);}} className={isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} value={location.key}>
        <span>{location.title}</span>
      </button>
    </li>
  );
}

export default NavLocation;