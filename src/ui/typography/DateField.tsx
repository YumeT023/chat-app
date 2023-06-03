import {format} from "date-fns";
import {getSuffixDay} from "@/src/lib/utils/date";

export type DateFieldProps = {
  value: Date;
  className?: string;
};

export const DateField = ({value = new Date(), className = ""}: DateFieldProps) => {
  const date = format(value, `MMM d'${getSuffixDay(value)} at' h:mm:ss a`);
  const time = format(value, "h:mm a");
  return <div title={date} className={className}>{time}</div>;
};
