interface Person {
  id: string;
  name: string;
  present: boolean | null;
}
interface SwipeModeProps {
  people: Person[];
  date: Date;
  group: string;
}
declare const SwipeMode: ({
  people,
  date,
  group,
}: SwipeModeProps) => import("react/jsx-runtime").JSX.Element;
export default SwipeMode;
