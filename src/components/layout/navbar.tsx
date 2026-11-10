import { Link, NavLink } from "react-router-dom";
import { WordMark } from "@/components/ui/word-mark";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

export function Navbar() {
    return (
        <div className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4 px-4 md:px-8">
                <NavLink
                    to="/"
                    className="flex shrink-0 items-center gap-2"
                    aria-label="SLC - Início"
                >
                    <WordMark />
                </NavLink>
                
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
                                        <Link to="/configuracoes" className={navigationMenuTriggerStyle()}>
                                            <p className="text-destructive">Sair</p>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <AnimatedThemeToggler />
                </div>
            </div>
        </div>
    )
}