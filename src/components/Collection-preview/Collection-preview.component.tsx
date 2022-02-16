//Interface
import { CollectionPreviewProps } from './Collection-preview.interface';

//Component
import CollectionItem from '../Collection-item/Collection-item.component';

//Styles
import './Collection-preview.styles.scss';

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
