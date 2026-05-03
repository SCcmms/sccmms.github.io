import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./navigation-menu";
import { Separator } from "./separator";

export function TopMenu() {

return (
      <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink href="/o-nas/">Nasza misja</NavigationMenuLink>
            </NavigationMenuItem>
            <Separator className="w-16! " />
            <NavigationMenuItem>
                <NavigationMenuLink href="/technologia/">Technologia</NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
)
}
