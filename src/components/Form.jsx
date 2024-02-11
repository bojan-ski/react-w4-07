import { useState } from "react"

function Form() {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setSearchTerm(e.target[0].value)
    }

    return (
        <section>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <input type="text" className="form-control" />
                </div>

                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        </section>
    )
}

export default Form