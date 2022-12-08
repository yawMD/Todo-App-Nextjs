import InputForm from "../components/InputForm";
import Todos from "../components/Todos"


export default function Home({}) {
  const submithandler = async(enteredText:string) =>{
    console.log(enteredText)
    // You have to put in the full path of the URL
    const response = await fetch('http://localhost:3000/api/hello',{
      method:'POST',
      body: JSON.stringify(enteredText),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data)
  }
  return (
    <div className="text-sm">
      <InputForm submitText={submithandler}/>
      <Todos />
    </div>
  )
}
