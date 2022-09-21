export const Search =({search, searchODA}) => {
    return  (
        <div className="search">
            <input 
                name='search'
                type='text'
                value={search}
                placeholder='Pesquise aqui'
                onChange={searchODA}
            />
        </div>
    )
}
export default Search;