const Writing = () => (
  <div className='mb-32 max-w-screen-sm mx-auto'>
    <h2 className='text-center text-h3'>A few articles I have written</h2>
    <ul className='flex until-sm:flex-col items-center justify-between mb-32'>
      <li>
        <a
          href='https://dev.to/brettblox/react-hooks-usestate-43en'
          target='_blank'
          rel='noreferrer'
          className='block until-sm:pb-4'
        >
          React useState
        </a>
      </li>
      <li>
        <a
          href='https://dev.to/brettblox/react-hooks-useeffect-36bk'
          target='_blank'
          rel='noreferrer'
          className='block until-sm:pb-4'
        >
          React useEffect
        </a>
      </li>
      <li>
        <a
          href='https://dev.to/brettblox/react-hooks-usereducer-4g3m'
          target='_blank'
          rel='noreferrer'
        >
          React useReducer
        </a>
      </li>
    </ul>
    <hr />
  </div>
)

export default Writing
