import axios from "axios"

const apiKey = import.meta.env.VITE_OMDB_API_KEY
const url = import.meta.env.VITE_OMDB_URL

function MovieDetails({ searchTerm }) {
  if(!searchTerm) return

  const search = `${url}?t=${searchTerm}&apikey=${apiKey}`

  const getData = async () => {
      try {
        const res = await axios(search)
        const movieInformation = res.data
        console.log(movieInformation);        
      } catch (error) {
        console.log(error);
      }
  } 

  getData()

  return (
    <section className="section-details">
      <h1>Movie Details</h1>
    </section>
  )
}

export default MovieDetails