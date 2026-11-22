import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button";

export function HeaderDeafault() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center gap-6">
            <NavigationMenu>
                <NavigationMenuList>
                    <Button variant="ghost" onClick={() => navigate("/register")}>Registrar</Button>
                    <Button onClick={() => navigate("/login")}>Login</Button>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}