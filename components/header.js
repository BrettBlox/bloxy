import styles from 'styles/heading.module.css'

const Header = () => (
  <header className={styles.heading}>
    <div className={styles.image}>
      <img src='/brett.jpg' alt='Brett Bloxom wants to work at GitLab' />
    </div>
    <div>
      <h1>Brett Bloxom</h1>
      <h2 className='text-gray-700'>Front-end Engineer</h2>
      <p className='mb-16'>
        Applying for the role of{' '}
        <a href='https://about.gitlab.com/job-families/marketing/marketing-frontend-engineer/'>
          Front-end Engineer - Marketing
        </a>{' '}
        @ <a href='https://about.gitlab.com/'>GitLab</a>
      </p>
    </div>
    <hr />
  </header>
)

export default Header
