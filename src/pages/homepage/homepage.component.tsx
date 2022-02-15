//Setup
import { RouteComponentProps } from 'react-router-dom';

//Component
import Directory from '../../components/directory/directory.component';

//styles
import './homepage.styles.scss';

const Homepage = (props: RouteComponentProps) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
