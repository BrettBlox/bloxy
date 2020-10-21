// @ts-check
import Head from 'next/head'
import { getAllProjects } from 'lib/api'
import Heading from 'components/heading/heading'
import ProjectGrid from 'components/project-grid/project-grid'

const Home = ({ allProjects }) => {
  console.log(allProjects)
  return (
    <>
      <Head>
        <title>Brett Bloxom's Portfolio for GitLab</title>
      </Head>
      <div className='container py-32'>
        <Heading />
        <ProjectGrid projects={allProjects} />
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const allProjects = getAllProjects([
    'title',
    'slug',
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
