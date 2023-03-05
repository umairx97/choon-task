import { Link, useLoaderData } from 'react-router-dom'

function Header () {
  const data = useLoaderData()
  return (
    <div>
      {data?.map((chapter) => (
        <Link
          key={chapter.id}
          to={`chapter/${chapter.id}`}
          className='font-bold mx-4 underline'
        >
          {chapter.title}
        </Link>
      ))}
    </div>
  )
}

export default Header
