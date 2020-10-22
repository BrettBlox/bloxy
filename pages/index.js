// @ts-check
import Head from 'next/head'
import { getAllProjects } from 'lib/api'
import Heading from 'components/heading/heading'
import Writing from 'components/writing/writing'
import ProjectGrid from 'components/project-grid/project-grid'

const Home = ({ allProjects }) => (
  <>
    <Head>
      <title>Brett Bloxom's Portfolio for GitLab</title>
    </Head>
    <div className='bg-background '>
      <div className='container py-32'>
        <Heading />
        <Writing />
        <ProjectGrid projects={allProjects} />
      </div>
    </div>
  </>
)

export default Home

export async function getStaticProps() {
  const allProjects = getAllProjects([
    'title',
    'slug',
    'employer',
    'description',
    'link',
    'role',
    'tools',
    'order',
  ])

  return {
    props: { allProjects },
  }
}
