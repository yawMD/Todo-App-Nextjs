import NavBarMeal from "./NavBarMeal";

type Props = {
  children: React.ReactNode
};
export default function Layout(props: Props){
    return (
        <>
        <div className="p-4">
         <NavBarMeal />
         </div>
        <div>{props.children}</div>
        </>
    )
}