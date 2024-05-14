
type Props = {
    searchParams: {
        q: string;
    };
};
const Searchpage = ({ searchParams : { q }}: Props) => {
  return (
    <div> {q} </div>
  )
}

export default Searchpage