import {
  CogIcon,
  BellIcon,
  KeyIcon,
  PhotoIcon,
  BanknotesIcon,
  SquaresPlusIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";

const subNavigation = [
  {
    name: "Account",
    description:
      "Ullamcorper id at suspendisse nec id volutpat vestibulum enim. Interdum blandit.",
    href: "#",
    icon: CogIcon,
    current: true,
  },
  {
    name: "Notifications",
    description:
      "Enim, nullam mi vel et libero urna lectus enim. Et sed in maecenas tellus.",
    href: "#",
    icon: BellIcon,
    current: false,
  },
  {
    name: "Security",
    description:
      "Semper accumsan massa vel volutpat massa. Non turpis ut nulla aliquet turpis.",
    href: "#",
    icon: KeyIcon,
    current: false,
  },
  {
    name: "Appearance",
    description:
      "Magna nulla id sed ornare ipsum eget. Massa eget porttitor suscipit consequat.",
    href: "#",
    icon: PhotoIcon,
    current: false,
  },
  {
    name: "Billing",
    description:
      "Orci aliquam arcu egestas turpis cursus. Lectus faucibus netus dui auctor mauris.",
    href: "#",
    icon: BanknotesIcon,
    current: false,
  },
  {
    name: "Integrations",
    description:
      "Nisi, elit volutpat odio urna quis arcu faucibus dui. Mauris adipiscing pellentesque.",
    href: "#",
    icon: SquaresPlusIcon,
    current: false,
  },
  {
    name: "Additional Resources",
    description:
      "Quis viverra netus donec ut auctor fringilla facilisis. Nunc sit donec cursus sit quis et.",
    href: "#",
    icon: MagnifyingGlassCircleIcon,
    current: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SettingsSubNavigation = () => {
  return (
    <nav
      aria-label="Sections"
      className="hidden w-96 flex-shrink-0 border-r border-blue-gray-200 bg-white xl:flex xl:flex-col"
    >
      <div className="flex h-16 flex-shrink-0 items-center border-b border-blue-gray-200 px-6">
        <p className="text-lg font-medium text-blue-gray-900">Settings</p>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        {subNavigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-blue-50 bg-opacity-50"
                : "hover:bg-blue-50 hover:bg-opacity-50",
              "flex p-6 border-b border-blue-gray-200"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            <item.icon
              className="-mt-0.5 h-6 w-6 flex-shrink-0 text-blue-gray-400"
              aria-hidden="true"
            />
            <div className="ml-3 text-sm">
              <p className="font-medium text-blue-gray-900">{item.name}</p>
              <p className="mt-1 text-blue-gray-500">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SettingsSubNavigation;
