import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../const';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logout } from '../store/api-actions';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  const auth = useAppSelector((state) => state.authorizationStatus === AuthStatus.Auth);
  const email = useAppSelector((state) => state.user?.email);
  const avatarUrl = useAppSelector((state) => state.user?.avatarUrl);
  const favorites = useAppSelector((state) => state.offersList).filter((offer) => offer.isFavorite);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {auth &&
              <li className="header__nav-item user">
                <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    <img src={avatarUrl} />
                  </div>
                  <span className="header__user-name user__name">{email}</span>
                  <span className="header__favorite-count">{favorites.length}</span>
                </Link>
              </li>}
              <li className="header__nav-item">
                { auth ?
                  <Link to={AppRoute.Login} onClick={logoutHandler} className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                  :
                  <Link to={AppRoute.Login} className="header__nav-link">
                    <span className="header__signout">Sign in</span>
                  </Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
