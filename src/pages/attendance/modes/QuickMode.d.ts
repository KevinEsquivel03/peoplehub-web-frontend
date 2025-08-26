interface Person {
  id: string;
  name: string;
  present: boolean | null;
}
interface QuickModeProps {
  people: Person[];
  date: Date;
  group: string;
}
declare const QuickMode: ({
  people,
  date,
  group,
}: QuickModeProps) => import("react/jsx-runtime").JSX.Element;
export default QuickMode;
