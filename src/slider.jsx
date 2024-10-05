import Button from 'react-bootstrap/Button';
function Slider() {
  return (
    <>
      <div
        style={{
          background:
            'url(https://react-landing-page-template-93ne.vercel.app/img/intro-bg.jpg) center center no-repeat',

          width: '100%',
          height: '50rem',
        }}
      >
        <div
          className="d-block text-white"
          style={{
            paddingTop: '20rem',
            background: 'rgba(0, 0, 0, 0.2)',
            height: '50rem',
          }}
        >
          <h1 className="fw-bold">WE ARE LANDING PAGE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            dapibus leo nec ornare diam sed commodo nibh ante facilisis
            bibendum.
          </p>
          <Button variant="secondary" className="rounded-5">
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
}
export default Slider;
