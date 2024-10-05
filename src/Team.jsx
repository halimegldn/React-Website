import NavbarPage from './NavbarPage';

function Team() {
  return (
    <>
      {/* <NavbarPage /> */}
      <div className="d-block">
        <div className="d-block m-5">
          <h2 className="fw-bold">MEET THE TEAM</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="m-auto row" style={{ width: '65%' }}>
          <div className="col-3">
            <img src="https://react-landing-page-template-93ne.vercel.app/img/team/01.jpg" />
            <div>
              <h4>John Doe</h4>
              <p>Director</p>
            </div>
          </div>
          <div className="col-3">
            <img src="https://react-landing-page-template-93ne.vercel.app/img/team/02.jpg" />
            <div>
              <h4>Mike Doe</h4>
              <p>Senior Designer</p>
            </div>
          </div>
          <div className="col-3">
            <img src="https://react-landing-page-template-93ne.vercel.app/img/team/03.jpg" />
            <div>
              <h4>Jane Doe</h4>
              <p>Senior Designer</p>
            </div>
          </div>
          <div className="col-3">
            <img src="https://react-landing-page-template-93ne.vercel.app/img/team/04.jpg" />
            <div>
              <h4>Karen Doe</h4>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Team;
