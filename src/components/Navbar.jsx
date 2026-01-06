import NavLinks from "./NavLinks";
import SearchInput from "./SearchInput";
import ButtonContainer from "./ButtonContainer";
import ProfileBtn from "./ProfileBtn";

const Navbar = () => {
  return (
    <nav className=" border-b border-gray-300 py-2">
      <div className=" align-element flex flex-col items-start md:flex-row md:items-center md:justify-between gap-3 ">
        <h1 className="font-bold text-2xl sm:text-3xl">Exclusive</h1>
        <NavLinks />
        <div className="flex items-center justify-center gap-3">
          <SearchInput />
          <ButtonContainer />
          <ProfileBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
