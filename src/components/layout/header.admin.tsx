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
import { useAuth } from "@/context/auth.context";
import { Button } from "../ui/button";

export function AdminHeader() {
    const { logout } = useAuth();

    return (
        <div className="flex items-center gap-6">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Carros</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>
                                <Link to="/carros" className={navigationMenuTriggerStyle()}>
                                    Carros
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                <Link to="/modelos" className={navigationMenuTriggerStyle()}>
                                    Modelos
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                <Link to="/marcas" className={navigationMenuTriggerStyle()}>
                                    Marcas
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                <Link to="/categorias" className={navigationMenuTriggerStyle()}>
                                    Categorias
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Clientes</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>
                                <Link to="/clientes" className={navigationMenuTriggerStyle()}>
                                    Clientes
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                <Link to="/cnh" className={navigationMenuTriggerStyle()}>
                                    CNH
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
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
                    <NavigationMenuLink>
                        <button onClick={logout} className={navigationMenuTriggerStyle() + "w-full text-left cursor-pointer"}>
                            Sair
                        </button>
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}