import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
type props = {
    title: string;
    className?:string;
    image?:string;
}
const GridOption = ({ title, className, image } : props) => {
  return (
    <Link href={
        {
            pathname: "/search",
            query: { q: title},
        }}
        className={cn("grid-option relative", className)}>
    <h2 className="text-xl font-bold">{title}</h2>
    {
        image && (
            <Image src={image} 
            alt={title} layout="fill"
             className="object-cover opacity-20 rounded-md" />
        )
    }
    </Link>
  )
}

export default GridOption