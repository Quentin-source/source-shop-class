//Setup
import { withRouter, RouteComponentProps } from 'react-router-dom';

//styles
import './menu-item-styles.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

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
