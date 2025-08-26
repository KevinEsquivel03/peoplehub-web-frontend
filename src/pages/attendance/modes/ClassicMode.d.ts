interface Person {
  id: string;
  name: string;
  present: boolean | null;
}
interface ClassicModeProps {
  people: Person[];
  date: Date;
  group: string;
}
declare const ClassicMode: ({
  people,
  date,
  group,
}: ClassicModeProps) => import("react/jsx-runtime").JSX.Element;
export default ClassicMode;
