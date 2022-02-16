//Setup
import { RouteComponentProps } from 'react-router-dom';

//Component
import Directory from '../../components/Directory/Directory.component';

//styles
import './homepage.styles.scss';

const HomePage = (props: RouteComponentProps) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
