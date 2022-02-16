//Setup
import React from 'react';

//Datas
import SECTIONS_DATA from '../../datas/sections.data';

//Components
import MenuItem from '../Menu-item/Menu-item.component';

//Interfaces
import {IProps, IState} from './Directory.interface';

//Styles
import './Directory.styles.scss';


class Directory extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = SECTIONS_DATA;
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.map(({ id, ...othersProps }) => {
          return <MenuItem key={id} {...othersProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
