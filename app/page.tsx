import React from "react";
import NavigationMenu, {
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col overflow-hidden">
        {/* Navigation Menu */}
        <header className="bg-background border-b border-border">
          <NavigationMenu className="container mx-auto p-4">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4">Welcome to the Home Page</div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4">Here's some information about us.</div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4">Get in touch with us here.</div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex">
          <iframe
              src="https://environmentalwebapplication.shinyapps.io/rshinyapp/"
              className="w-full h-full border-none"
              title="Environmental Web Application"
          ></iframe>
        </main>
      </div>
  );
}