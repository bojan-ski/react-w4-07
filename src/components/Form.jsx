import { useState } from "react"
import MovieDetails from "./MovieDetails"

function Form() {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setSearchTerm(e.target[0].value)
    }

    return (
        <>
            <section className="section-form w-50 mb-3">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-row mb-2">
                        <input type="text" className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </form>
            </section>

            <MovieDetails searchTerm={searchTerm} />
        </>
    )
}

export default Form