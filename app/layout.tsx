import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "EWA",
    description: "Web application for monitor water quality data",
    icons: {
        icon: '/Website/parkLogoLeaf.png'
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Fixed Navigation Menu */}
        <header className="fixed top-0 left-0 w-full bg-background border-b border-border z-50">
            <NavigationMenu className="container p-4 flex items-center">
                {/* Logo - Hidden on small screens, visible on md+ */}
                <div className="hidden md:flex items-center mr-10">
                    <img src="/Website/RPILogo.png" alt="Logo" className="h-8 w-auto mr-4" />
                    <img src="/Website/parkLogo.png" alt="Logo" className="h-8 w-auto" />
                </div>

                {/* Navigation Links - Centered */}
                <div className="flex-1 flex justify-center">
                    <NavigationMenuList className="flex space-x-2">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/">Data Visualization</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/project-overview">Project Overview</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/data-access">Data Access</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </div>
            </NavigationMenu>
        </header>

        {/* Page Content with padding to prevent overlap */}
        <main className="min-h-screen flex flex-col pt-[72px]">
            {children}
        </main>
        </body>
        </html>
    );
}
