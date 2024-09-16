import { ChevronDown } from "./chevronDown";
import { ChevronUp } from "./chevronUp";

interface RateProps {
  isIncrement: boolean;
  rate: string;
}

const styles = {
  rate: `rate flex items-center`,
  red: `ml-2 text-[#EA3943]`, // Red color for negative rate
  green: `ml-2 text-[#17C784]`, // Green color for positive rate
};

export const Rate: React.FC<RateProps> = ({ isIncrement, rate }) => {
  return (
    <div className={styles.rate}>
      {isIncrement ? (
        <ChevronUp fill="#17C784" />
      ) : (
        <ChevronDown fill="#EA3943" />
      )}
      <p className={isIncrement ? styles.green : styles.red}>{rate}</p>
    </div>
  );
};
