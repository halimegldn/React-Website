import NavbarPage from './NavbarPage';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {
  Wordpress,
  ShopWindow,
  CloudDownload,
  Globe,
  Airplane,
  PieChart,
} from 'react-bootstrap-icons';
function Services() {
  return (
    <>
      {/* <NavbarPage /> */}
      <div
        style={{
          height: '50rem',
          marginTop: '10rem',
          background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%) ',
        }}
      >
        <div className="d-flex justify-content-center w-75 flex-column text-white m-auto">
          <h2 className="mt-3">SERVICES</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
          <div className="row w-75 m-auto p-5">
            <Card className="align-items-center bg-transparent border-0 card col-4 text-white mt-2">
              <div
                className=""
                style={{
                  borderRadius: '100%',
                  boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.05)',
                  padding: '2rem',
                }}
              >
                <Wordpress className="fs-1" />
              </div>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="align-items-center bg-transparent border-0 card col-4 text-white mt-2">
              <div
                className=""
                style={{
                  borderRadius: '100%',
                  boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.05)',
                  padding: '2rem',
                }}
              >
                <ShopWindow className="fs-1" />
              </div>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="align-items-center bg-transparent border-0 card col-4 text-white mt-2">
              <div
                className=""
                style={{
                  borderRadius: '100%',
                  boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.05)',
                  padding: '2rem',
                }}
              >
                <CloudDownload className="fs-1" />
              </div>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="align-items-center bg-transparent border-0 card col-4 text-white mt-3">
              <div
                className=""
                style={{
                  borderRadius: '100%',
                  boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.05)',
                  padding: '2rem',
                }}
              >
                <Globe className="fs-1" />
              </div>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="align-items-center bg-transparent border-0 card col-4 text-white mt-3">
              <div
                className=""
                style={{
                  borderRadius: '100%',
                  boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.05)',
                  padding: '2rem',
                }}
              >
                <Airplane className="fs-1" />
              </div>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="align-items-center bg-transparent border-0 card col-4 text-white mt-3">
              <div
                className=""
                style={{
                  borderRadius: '100%',
                  boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.05)',
                  padding: '2rem',
                }}
              >
                <PieChart className="fs-1" />
              </div>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
