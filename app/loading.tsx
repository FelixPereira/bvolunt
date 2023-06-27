import Spinner from "./components/spinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div><Spinner color="#000" size={20}  /></div>
  )
}