//Setup
import React from 'react';

//interfaces
import { IState, IProps } from './shop.interface';

//Component
import CollectionPreview from '../../components/Collection-preview/Collection-preview.component';

//Datas
import SHOP_DATA from '../../datas/shop.data';

export default class ShopPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {shop : SHOP_DATA} ;
  }

  render(): React.ReactNode {
    return (
      <div className="shop-page">
        {this.state.shop.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
