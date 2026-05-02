import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu";
import { Separator } from "./separator";

export function TopMenu() {

return (
      <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink>Nasza Misja</NavigationMenuLink>
            </NavigationMenuItem>
            <Separator className="w-16! " />
            <NavigationMenuItem>
                <NavigationMenuLink>Projekty</NavigationMenuLink>
            </NavigationMenuItem>
            <Separator className="w-16!" />
            <NavigationMenuItem>
                <NavigationMenuLink>Technologia</NavigationMenuLink>
            </NavigationMenuItem>
            <Separator className="w-16!" />
            <NavigationMenuItem>
                <NavigationMenuLink>Nasz zespół</NavigationMenuLink>
            </NavigationMenuItem>
            <Separator className="w-16!" />
            <NavigationMenuItem>
                <NavigationMenuLink>Kontakt</NavigationMenuLink>
            </NavigationMenuItem>
            <Separator className="w-16!" />
            <NavigationMenuItem>
                <NavigationMenuLink>PL</NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
)
}