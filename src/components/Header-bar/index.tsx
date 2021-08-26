import { Header } from './styled';

import icon_search from '../../assets/icons/icon_search.svg';
import icon_bell from '../../assets/icons/icon_bell.svg';

export default function HeaderBarComponent({ title = '', ...rest }) {
  return (
    <Header {...rest}>
      <h1>{title}</h1>

      <div className="icons-group">
        <button className="btn-search" type="button">
          <img src={icon_search} alt="icon search" />
        </button>

        <button className="btn-bell" type="button">
          <img src={icon_bell} alt="icon bell" />
        </button>

        <span>
          <strong>R</strong>
          Rick Adam
        </span>
      </div>
    </Header>
  );
}
