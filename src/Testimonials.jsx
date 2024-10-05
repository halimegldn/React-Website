import NavbarPage from './NavbarPage';
import Card from 'react-bootstrap/Card';
function Testimonials() {
  return (
    <>
      {/* <NavbarPage /> */}
      <div
        className="d-flex flex-column"
        style={{
          backgroundColor: '#f6f6f6',
          height: '35rem',
          marginTop: '10rem',
        }}
      >
        <div>
          <h2 className="fw-bold mt-3 mb-3">WHAT OUR CLIENTS SAY</h2>
        </div>
        <div className="row w-75 m-auto p-5">
          <Card className="align-items-center bg-transparent border-0 card col-4 mt-2">
            <div className="d-flex align-items-start">
              <Card.Img
                style={{ width: '4rem', height: '4rem', borderRadius: '100%' }}
                variant="top"
                src="https://react-landing-page-template-93ne.vercel.app/img/testimonials/01.jpg"
              />
              <Card.Body className="text-start">
                <Card.Text className="fst-italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </Card.Text>
                <Card.Text className="fw-bold">- John Doe</Card.Text>
              </Card.Body>
            </div>
          </Card>
          <Card className="align-items-center bg-transparent border-0 card col-4 mt-2">
            <div className="d-flex align-items-start">
              <Card.Img
                style={{ width: '4rem', height: '4rem', borderRadius: '100%' }}
                variant="top"
                src="https://react-landing-page-template-93ne.vercel.app/img/testimonials/02.jpg"
              />
              <Card.Body className="text-start">
                <Card.Text className="fst-italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </Card.Text>
                <Card.Text className="fw-bold">- Johnathan Doe</Card.Text>
              </Card.Body>
            </div>
          </Card>
          <Card className="align-items-center bg-transparent border-0 card col-4 mt-2">
            <div className="d-flex align-items-start">
              <Card.Img
                style={{ width: '4rem', height: '4rem', borderRadius: '100%' }}
                variant="top"
                src="https://react-landing-page-template-93ne.vercel.app/img/testimonials/03.jpg"
              />
              <Card.Body className="text-start">
                <Card.Text className="fst-italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </Card.Text>
                <Card.Text className="fw-bold">- John Doe</Card.Text>
              </Card.Body>
            </div>
          </Card>
          <Card className="align-items-center bg-transparent border-0 card col-4 mt-2">
            <div className="d-flex align-items-start">
              <Card.Img
                style={{ width: '4rem', height: '4rem', borderRadius: '100%' }}
                variant="top"
                src="https://react-landing-page-template-93ne.vercel.app/img/testimonials/04.jpg"
              />
              <Card.Body className="text-start">
                <Card.Text className="fst-italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </Card.Text>
                <Card.Text className="fw-bold">- Johnathan Doe</Card.Text>
              </Card.Body>
            </div>
          </Card>
          <Card className="align-items-center bg-transparent border-0 card col-4 mt-2">
            <div className="d-flex align-items-start">
              <Card.Img
                style={{ width: '4rem', height: '4rem', borderRadius: '100%' }}
                variant="top"
                src="https://react-landing-page-template-93ne.vercel.app/img/testimonials/05.jpg"
              />
              <Card.Body className="text-start">
                <Card.Text className="fst-italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </Card.Text>
                <Card.Text className="fw-bold">- John Doe</Card.Text>
              </Card.Body>
            </div>
          </Card>
          <Card className="align-items-center bg-transparent border-0 card col-4 mt-2">
            <div className="d-flex align-items-start">
              <Card.Img
                style={{ width: '4rem', height: '4rem', borderRadius: '100%' }}
                variant="top"
                src="https://react-landing-page-template-93ne.vercel.app/img/testimonials/06.jpg"
              />
              <Card.Body className="text-start">
                <Card.Text className="fst-italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </Card.Text>
                <Card.Text className="fw-bold">- Johnathan Doe</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
