import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button";
import { useAuth } from "@/context/auth.context";

export function UserHeader() {
    const { logout } = useAuth();

    return (
        <div className="flex items-center gap-6">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Meu Perfil</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>
                                <Link to="/perfil" className={navigationMenuTriggerStyle()}>
                                    Perfil
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                <Link to="/historico-locacoes" className={navigationMenuTriggerStyle()}>
                                    Historico de locações
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                <Link to="/configuracoes" className={navigationMenuTriggerStyle()}>
                                    Configurações
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuItem>
                                <Button variant="link" onClick={logout}>
                                    Sair
                                </Button>
                            </NavigationMenuItem>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}