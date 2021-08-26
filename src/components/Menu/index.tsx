import { ReactElement, memo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { VscColorMode } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import * as actionsTheme from '../../store/modules/theme/actions';

import { Container } from './styled';
import Logo from '../../assets/icons/Logo';

import routes from '../../routes/routes';
import IRoutes from '../../interfaces/route';
import Button from '../Button';

function Menu(): ReactElement {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { pathname } = location;

  const renderIcons = (route: IRoutes) => {
    const handleNavigate = (e: any) => {
      history.push(e.target.id);
    };

    if (!route.icon) return null;

    return (
      <li>
        <Button
          id={route.path}
          type="button"
          onClick={handleNavigate}
          className={pathname.includes(route.path) ? 'active' : ''}
        >
          <route.icon />
        </Button>
      </li>
    );
  };

  const handleChangeTheme = () => {
    dispatch(actionsTheme.changeTheme());
  };

  return (
    <Container className="shadow">
      <Logo />

      <nav>
        <ul>{routes.map(renderIcons)}</ul>
      </nav>

      <Button type="button" onClick={handleChangeTheme}>
        <VscColorMode size="23" color="#8C8F94" />
      </Button>
    </Container>
  );
}

export default memo(Menu);
