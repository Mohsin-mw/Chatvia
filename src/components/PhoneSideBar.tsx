import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PhoneSidebarProps } from "../common";
import {
  CloseButton,
  PhoneSideBarLinksContainer,
  PhonoSideBarUserAccountContainer,
} from "../components/Index";

const PhoneSideBar = ({
  user,
  logo,
  mobileMenuOpen,
  setMobileMenuOpen,
  navigation,
}: PhoneSidebarProps) => {
  return (
    <Transition.Root show={mobileMenuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={() => setMobileMenuOpen && setMobileMenuOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-neutral focus:outline-none">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-4">
                  <CloseButton
                    onClick={() =>
                      setMobileMenuOpen && setMobileMenuOpen(false)
                    }
                  />
                </div>
              </Transition.Child>
              <div className="pt-5 pb-4">
                <div className="flex flex-shrink-0 items-center px-4">
                  <img className="h-8 w-auto" src={logo} alt="Your Company" />
                </div>
                <PhoneSideBarLinksContainer navigation={navigation} />
              </div>
              <PhonoSideBarUserAccountContainer user={user} />
            </Dialog.Panel>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PhoneSideBar;
