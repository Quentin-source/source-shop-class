//Setup
import React from 'react';

//Datas
import { SectionsDatas } from '../../datas/sections';

//Components
import MenuItem from '../menu-item/menu-item.component';

//Interfaces
import {IProps, IState} from './directory.interface';

//Styles
import './directory.styles.scss';


class Directory extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = SectionsDatas;
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...othersProps }) => {
          return <MenuItem key={id} {...othersProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
