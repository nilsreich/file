import {
  Bars3Icon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-neutral-800 text-sm">
      <div className="flex items-center gap-3 p-3">
        <div className="text-neutral-500">
          <Bars3Icon className="w-4" />
        </div>
        <div>
          Personal
          <span className="ml-2 rounded-lg bg-purple-900 px-1 py-px text-xs">
            Free
          </span>
        </div>
      </div>
      <div className="mr-3 flex items-center gap-2 rounded-sm bg-[#eaff96] p-1 text-xs font-medium text-black">
        <div>
          <ArrowRightOnRectangleIcon className="w-4" />
        </div>
        <div>Login</div>
      </div>
    </nav>
  );
};
