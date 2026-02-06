import Link from "next/link";



type Book={
  
  id:number;
  title:string;
  body:string
}

export default async function book(){

  const res=await fetch("https://jsonplaceholder.typicode.com/posts");

  const data:Book[]=await res.json();

  return (
    <div>
    <ul>
      {data.map((item)=>(
        <li key={item.id}>
          <Link href={`book/${item.id}`}>{item.title}</Link>
        </li>

      ))}
    </ul>
    </div>
  )

}