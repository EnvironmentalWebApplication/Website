import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col overflow-hidden">
        {/* Navigation Menu */}
        <header className="bg-background border-b border-border">
          <NavigationMenu className="container p-4 flex items-center">
            {/* Logo - Left-aligned */}
            <div className="flex items-center mr-10">
              <img src="/RPILogo.png" alt="Logo" className="h-8 w-auto mr-4" />
              <img src="/parkLogo.png" alt="Logo" className="h-8 w-auto" />
            </div>

            {/* Navigation Links - Centered */}
            <div className="flex-1 flex justify-center">
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/project-overview">Project Overview</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/data">Data</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </div>
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
