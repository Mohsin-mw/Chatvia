import { Bars3Icon } from "@heroicons/react/24/outline";
import { Logo } from "./Index";

interface Props {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  logo: string;
}

const PhoneTopBar = ({ setMobileMenuOpen, logo }: Props) => {
  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between bg-indigo-600 py-2 px-4 sm:px-6 lg:px-8">
        <div>
          <Logo />
        </div>
        <div>
          <button
            type="button"
            className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneTopBar;
