import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/kauelima21.png"
        className="w-10 h-10 rounded-full"
        alt="profile pic"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Kauê Leal</span>
        <span className="text-sm text-zinc-500 truncate">kaue.lima@email.com</span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  )
}
