export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/listening-circle.png' className='img-responsive' alt='Audiogram Speech Banana' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>What Did We Do?</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>Benefits Of Our Solution</h3>
              <div className='list-style'>
                <div className='col-lg col-sm col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li className="list-unstyled" key={`${d}-${i}`}>{d}</li>
                      ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
            <a
              // need to sub out with correct link eventually
              href='https://virtualhearingscreening.web.app/home'
              className='btn btn-custom btn-lg page-scroll about-btn'
            >
              Take Your Screening
              </a>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}
