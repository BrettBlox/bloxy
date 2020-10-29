// @ts-check
import Image from 'next/image'
import Linkedin from 'components/svg/linkedin'
import Email from 'components/svg/email'
import Mobile from 'components/svg/mobile'
import ToggleTheme from 'components/theme/toggle-theme'
// @ts-expect-error
import styles from 'styles/heading.module.css'
import Github from 'components/svg/github'
import Resume from 'components/svg/resume'

const Heading = () => (
  <header className={styles.heading}>
    <div className={styles.image}>
      <Image
        src='/brett.jpg'
        alt='Brett Bloxom wants to work at GitLab'
        width={400}
        height={400}
      />
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
      <div className='w-full flex justify-center mt-16'>
        <ToggleTheme />
      </div>
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
      <div className='w-full mt-16 mb-8 flex justify-center'>
        <a
          href='https://github.com/BrettBlox/bloxy'
          className='flex justify-center items-center mr-16'
          target='_blank'
          rel='noreferrer'
        >
          <Github className='h-12 mr-4' />
          source code
        </a>
        <a
          href='brett-bloxom-developer-resume.pdf'
          className='flex justify-center items-center'
          target='_blank'
          rel='noreferrer'
        >
          <Resume className='h-12 mr-4' />
          resume
        </a>
      </div>
    </div>
    <hr />
  </header>
)

export default Heading
