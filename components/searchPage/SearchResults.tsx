import SelectThree from 'components/SelectThree'
import SelectTwo from 'components/SelectTwo'
import ResultCard from './ResultCard'

const SearchResults = () => {
  return (
    <div className="h-full w-full max-w-[36.25rem] rounded-[0.9375rem] bg-white px-3 py-6 ">
      <div className="flex w-full items-center justify-between border-b px-12 pb-4 ">
        <h3 className="text-lg font-medium text-[#010101]">Results 1255+</h3>
        <div>
          <h3 className="flex items-center text-lg font-medium text-[#010101]">
            <span>Sort by: </span>
            <SelectTwo options={options} />
          </h3>
        </div>
      </div>
      <div className="pt-[1.3125rem]">
        <ResultCard />
        <div className="px-12">
          <hr />
        </div>
        <ResultCard />
        <div className="px-12">
          <hr />
        </div>
        <ResultCard />
        <div className="px-12">
          <hr />
        </div>
        <ResultCard />
        <div className="px-12 pb-6">
          <hr />
        </div>
        <div className="flex px-12 pb-6 text-sm font-medium text-[#4168C5]">
          <button className="ml-auto h-[2.4375rem] w-[7.75rem] rounded-lg border-2 border-[#4168C5]">
            Load more
          </button>
        </div>
      </div>
    </div>
  )
}
const options = [
  { id: 1, name: 'Recomended' },
  { id: 2, name: 'Relevant' },
  { id: 3, name: 'Oldest first' },
]
export default SearchResults
