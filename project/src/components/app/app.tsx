import Main from '../../pages/main/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import Room from '../../pages/room/room';
import Login from '../../pages/login/login';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { HelmetProvider } from 'react-helmet-async';
import Scroll from '../scroll/scroll';


function App(): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Scroll />
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <Main/>
            }
          />
          <Route
            path={AppRoute.RoomById}
            element={
              <Room/>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
