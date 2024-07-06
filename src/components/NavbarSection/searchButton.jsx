import { MagnifyingGlass } from "@phosphor-icons/react"

const SearchButton = ({ search }) => {
    return(
        <button className="" onClick={search}>
          <MagnifyingGlass size={24} />
        </button>
    )
}

export default SearchButton