import type { ResultCardProps } from './ResultCard'
import ResultCard from './ResultCard'

interface ResultsGridProps {
  items: ResultCardProps[]
  annotation?: string
}

const ResultsGrid = ({ items, annotation = 'Results' }: ResultsGridProps) => (
  <div className="flex flex-wrap my-2 py-2 lg:my-12 lg:py-12 text-center lg:text-left">
    {annotation && (
      <div className="w-full">
        <h6 className="hidden md:block sub">{annotation}</h6>
      </div>
    )}
    {items.map((item) => (
      <div key={item.title} className="w-full lg:w-1/3">
        <ResultCard {...item} />
      </div>
    ))}
  </div>
)

export default ResultsGrid
