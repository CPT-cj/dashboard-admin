import { generateSummaries } from "../../utils/home";
import SummaryCard from "./components/summaryCard";

const summaries = ({ productsLength, usersLength }) => {
  const summaries = generateSummaries(productsLength, usersLength, 42, 2);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-6">
      {summaries.map((summary) => (
        <SummaryCard key={summary.id} {...summary} />
      ))}
    </div>
  );
};
export default summaries;
