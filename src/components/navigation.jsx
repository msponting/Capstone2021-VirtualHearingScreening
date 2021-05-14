export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll nav-logo' href='#page-top'>
            <img src="img/logo.png" height="50" alt="sound sustainability logo" />
          </a>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                How It Works
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Who Is It For?
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                What Did We Do?
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Our Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
