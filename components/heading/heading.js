// @ts-check
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
        <a href='https://about.gitlab.com/job-families/marketing/marketing-frontend-engineer/'>
          Front-end Engineer - Marketing
        </a>{' '}
        @ <a href='https://about.gitlab.com/'>GitLab</a>
      </p>
    </div>
    <hr />
  </header>
)

export default Heading
