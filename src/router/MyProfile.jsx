import { Col, Container } from 'react-bootstrap';
import Navbar from '../components/Navbar/Navbar';
import MissionsList from '../components/Mission/ProfileMission';

const Profile = () => (
  <>
    <Navbar />
    <Container>
      <Col>
        <MissionsList />
      </Col>
    </Container>
  </>
);

export default Profile;
