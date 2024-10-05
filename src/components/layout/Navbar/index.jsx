import { useState } from "react";
import { LuMenu, LuShoppingBasket, LuX } from "react-icons/lu";
import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import Button from "../../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="py-3 md:py-6 border-b border-slate-300">
        <nav className="container flex flex-row justify-between items-center">
        <Logo/>
        <NavbarMenu isOpen={isOpen} />
            <Button className={'fixed right-14 z-[1] text-black !bg-white !p-0 md:px-5 md:py-2'} text={'Cart'} onClick={() => {}} icon={<LuShoppingBasket/>}/>
            <button onClick={handleMenuToggle}  className="fixed right-4 top-4 z-[1] flex text-2xl md:static md:hidden">
              {isOpen ? <LuX/> : <LuMenu/>}
            </button>
        </nav>
    </header>
  )
}