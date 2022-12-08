import React,{useRef} from "react";



const InputForm: React.FC<{submitText:(text:string)=>void}> = (props)=>{
  const InputRef = useRef<HTMLInputElement>(null)
  const submithandler = (event:React.FormEvent)=>{
    event.preventDefault();
    const enteredText = InputRef.current!.value
    console.log(enteredText)

    if(!enteredText){
      return;
    }
    props.submitText(enteredText)

  }

  return(
    <form onSubmit={submithandler} className="flex m-auto justify-center p-4">
      <input ref={InputRef} className="py-2 px-12 mx-2" type="text" placeholder="type your notes"/>
      <button className="border border-white px-4 rounded" type="submit">Add</button>
    </form>
  )
}

export default InputForm;