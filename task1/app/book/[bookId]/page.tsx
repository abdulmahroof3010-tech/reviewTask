
type Book={
  id:number;
  title:string;
  body:string
}

export default async function bookDetails({params}:{
    
    params:{bookId:Promise<number>}
    
}){
``
  
      const bookId= (await params).bookId;
     
     
    const res =await fetch(`https://jsonplaceholder.typicode.com/posts?id=${bookId}`)
             
    const data:Book[]=await res.json();
    console.log(data)

  

    return (
        <div>
        <ul>
            {data.map((item)=>(
                
              <div>

               <li key={item.id}>{item.title}</li>
               <li >{item.body}</li>
              
              </div>
               

            ))}
        </ul>
        </div>
    )


}

