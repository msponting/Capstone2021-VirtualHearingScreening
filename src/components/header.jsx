export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-md-offset-2 intro-text'>
              <h1>
                {props.data ? props.data.title : 'Loading'}
                
              </h1>
              <p>{props.data ? props.data.paragraph : 'Loading'}</p>
              <a
                // need to sub out with correct link eventually
                href='https://virtualhearingscreening.web.app/home'
                className='btn btn-custom btn-lg page-scroll'
              >
                Take Your Screening
                </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
