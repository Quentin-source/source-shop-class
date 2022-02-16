//Styles
import './Collection-item.styles.scss';

//Interface
import { CollectionItemProps } from './Collection-item.interface';

const CollectionItem = ({ name, price, imageUrl }: CollectionItemProps) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
