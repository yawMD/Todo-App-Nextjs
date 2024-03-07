import Link from "next/link";

function SideBar() {
    return (
      <div className=" rounded overflow-hidden bg-white">
        <ul className="p-4">
            <li className="py-2 font-medium">
                <Link href="/"> Featured Items</Link>
            </li>
            <li className="py-2 font-medium">
                <Link href="/"> Most Popular</Link>
            </li>
            <li className="py-2 font-medium">
                <Link href="/"> Combo Meals</Link>
            </li>
            <li className="py-2 font-medium">
                <Link href="/">McNuggets & Meals</Link>
            </li>
            <li className="py-2 font-medium">
                <Link href="/">Fries</Link>
            </li>
            <li className="py-2 font-medium">
                <Link href="/">Shareables</Link>
            </li>
            <li className="py-2 font-medium">
                <Link href="/">Happy Meal</Link>
            </li>
        </ul>
      </div>
    );
  }
  
  export default SideBar;
  