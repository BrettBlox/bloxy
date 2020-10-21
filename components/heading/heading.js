// @ts-check
import Linkedin from 'components/svg/linkedin'
import Email from 'components/svg/email'
import Mobile from 'components/svg/mobile'
// @ts-expect-error
import styles from 'styles/heading.module.css'

const Heading = () => (
  <header className={styles.heading}>
    <div className={styles.image}>
      <img src='/brett.jpg' alt='Brett Bloxom wants to work at GitLab' />
    </div>
    <div>
      <h1 className={styles.title}>Brett Bloxom</h1>
      <h2 className={styles.jobTitle}>Front-end Engineer</h2>
      <p className={styles.intent}>
        Applying for the role of{' '}
        <a href='job-description.pdf' target='_blank' rel='noreferrer'>
          Front-end Engineer - Marketing
        </a>{' '}
        @{' '}
        <a href='https://about.gitlab.com/' target='_blank' rel='noreferrer'>
          GitLab
        </a>
      </p>
      <div className={styles.contact}>
        <a
          href='https://www.linkedin.com/in/brettblox/'
          target='_blank'
          rel='noreferrer'
        >
          <span>Click here to navigate to my linkedin profile</span>
          <Linkedin className='h-12' />
        </a>
        <a href='mailto:brettbloxom@gmail.com'>
          <span>Click here to email me at brettbloxom@gmail.com</span>
          <Email className='h-12' />
        </a>
        <a href='tel:9187285875'>
          <span>Click here to call me at 9187285875</span>
          <Mobile className='h-12' />
        </a>
      </div>
    </div>
    <hr />
  </header>
)

export default Heading
