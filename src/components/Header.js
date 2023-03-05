import { Link, useNavigate } from 'react-router-dom'

function Header ({ data }) {
  const navigate = useNavigate()
  return (
    <div>
      {data?.map((chapter) => (
        <Link
          key={chapter.id}
          to={`/table/${chapter.id}`}
          className='font-bold mx-4 underline'
          onClick={() => navigate(`/table/${chapter.id}`)}
        >
          {chapter.title}
        </Link>
      ))}
    </div>
  )
}

export default Header
