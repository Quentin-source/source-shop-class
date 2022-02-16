//Setup
import { withRouter, RouteComponentProps } from 'react-router-dom';

//Interface
import { MenuItemProps } from './Menu-item.interface';

//styles
import './Menu-item.styles.scss';

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}: MenuItemProps & RouteComponentProps) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);