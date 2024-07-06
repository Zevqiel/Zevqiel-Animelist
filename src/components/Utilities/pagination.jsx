const Pagination = ({ dataPage, lastPage, setPage }) => {
    const scrollTop = () =>{
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState -1)
        scrollTop()
    }

    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-slate-200 text-2xl">
            {
                dataPage <= 1 ? null : 
                <button className="transition-all hover:text-blue-500" onClick={handlePrevPage}>Prev</button>
            }
            <p>{dataPage} of {lastPage}</p>
            {
                dataPage >= lastPage ? null :
                <button className="transition-all hover:text-blue-500" onClick={handleNextPage}>Next</button>
            }
        </div>
    )
}

export default Pagination