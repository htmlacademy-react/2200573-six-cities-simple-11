import {citys} from '../../mocks/city';
import { useAppDispatch } from '../../hooks';
import { setCurrentCity, getOffers } from '../../store/action';
import NavLocation from '../nav-location/nav-location';


function NavLocations(): JSX.Element
{
  const dispatch = useAppDispatch();
  function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    const {value} = e.currentTarget;

    dispatch(setCurrentCity(value));
    dispatch(getOffers());
  }

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citys.map((item) =>
          <NavLocation key={item.key} location={item} onClick={handleClick}/>
        )}
      </ul>
    </section>
  );
}

export default NavLocations;
