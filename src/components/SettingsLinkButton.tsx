import { Link } from "react-router-dom";
import { SettingsLinkButtonProps } from "../common";

const SettingsLinkButton = ({
  item,
  selectedItem,
  onClick,
}: SettingsLinkButtonProps) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Link
      key={item.name}
      to={item.href}
      className={classNames(
        "flex p-6",
        selectedItem === item.name
          ? "bg-neutral"
          : "hover:bg-neutral hover:bg-opacity-50 duration-200"
      )}
      aria-current={item.current ? "page" : undefined}
      onClick={onClick}
    >
      <item.icon
        className="-mt-0.5 h-6 w-6 flex-shrink-0 text-blue-gray-400"
        aria-hidden="true"
      />
      <div className="ml-3 text-sm">
        <p className="font-medium text-blue-gray-900">{item.name}</p>
        <p className="mt-1 text-blue-gray-500">{item.description}</p>
      </div>
    </Link>
  );
};

export default SettingsLinkButton;
