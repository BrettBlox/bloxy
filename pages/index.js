import Head from 'next/head'
import { getAllProjects } from 'lib/api'
import Header from 'components/header'

const Home = ({ allProjects }) => {
  console.log(allProjects)
  return (
    <>
      <Head>
        <title>Brett Bloxom's Portfolio for GitLab</title>
      </Head>
      <div className='container py-32'>
        <Header />
        {allProjects.map((project) => (
          <div>
            {project.title}<br/>
            {project.description}<br/>
            {project.role}<br/>
            {/* {[...project.tags]} */}
          </div>
        ))}
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const allProjects = getAllProjects(['title', 'slug', 'description', 'role'])

  return {
    props: { allProjects },
  }
}
