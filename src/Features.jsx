import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ChatDots, Megaphone, People, Magic } from 'react-bootstrap-icons';
import NavbarPage from './NavbarPage';
import Slider from './slider';
function Features() {
  return (
    <>
      {/* <NavbarPage /> */}
      <Slider />
      <div
        className="d-flex flex-column mb-5"
        style={{ backgroundColor: '#f6f6f6', height: '25rem' }}
      >
        <div>
          <h2 className="mt-3 fw-bold">FEATURES</h2>
        </div>
        <div className="card-group d-flex m-auto">
          <Card
            style={{
              width: '18rem',
              background: 'transparent',
              border: 'none',
            }}
            className="d-block"
          >
            <div
              style={{
                background:
                  'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
                padding: '25px',
                width: '35%',
                borderRadius: '100%',
                margin: 'auto',
                color: 'white',
              }}
            >
              <ChatDots className="fs-1" />
            </div>

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: '18rem',
              background: 'transparent',
              border: 'none',
            }}
            className="d-block"
          >
            <div
              style={{
                background:
                  'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
                padding: '25px',
                width: '35%',
                borderRadius: '100%',
                margin: 'auto',
                color: 'white',
              }}
            >
              <Megaphone className="fs-1" />
            </div>

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: '18rem',
              background: 'transparent',
              border: 'none',
            }}
            className="d-block"
          >
            <div
              style={{
                background:
                  'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
                padding: '25px',
                width: '35%',
                borderRadius: '100%',
                margin: 'auto',
                color: 'white',
              }}
            >
              <People className="fs-1" />
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: '18rem',
              background: 'transparent',
              border: 'none',
            }}
            className="d-block"
          >
            <div
              style={{
                background:
                  'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
                padding: '25px',
                width: '35%',
                borderRadius: '100%',
                margin: 'auto',
                color: 'white',
              }}
            >
              <Magic className="fs-1" />
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
export default Features;
