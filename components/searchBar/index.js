import Filter from '@icons/filter.svg'
import Search from '@icons/search.svg'
export  function SearchBar() {
  return (
    <div className='flex border rounded-lg items-center gap-2 justify-between px-3 w-full lg:rounded-3xl lg:px-4'>
        <Search />
        <input type="text" className='w-[240px] xs:w-[400px] h-12 px-2 outline-none' placeholder='Search something here' />
        <Filter />
    </div>
  )
}
