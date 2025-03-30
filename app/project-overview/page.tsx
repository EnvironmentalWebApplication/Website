import React from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function ProjectOverviewPage() {
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
                        <NavigationMenuList className="flex space-x-2">
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
            <main className="flex-grow flex flex-col items-center p-6">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Project Overview</h1>
                    <p className="mb-6">
                        A team of Rensselaer Polytechnic Institute undergraduate students began a research project on water quality in Long Pond under the guidance of Senior Lecturer Jonathan Stetler, PhD in the spring of 2024. Long Pond is located in Grafton Lake State Park, in Rensselaer County, NY (~ 30 minutes away from the RPI Troy campus). As part of their project, the team has installed a high-frequency sensor network that reaches approximately 9 meters deep, collecting dissolved oxygen and temperature data every 10 minutes: 24 hours a day, 7 days week. This information is helping the team explore changes in thermal stratification within Long Pond, which can influence dissolved oxygen dynamics and habitat structure. Their goal is to understand how changes in the physical and chemical structure of Long Pond impact lake primary productivity and algae levels. They hope to continue the monitoring of Long Pond for many years to come creating a unique opportunity for undergraduate students at RPI to get involved in real-world impactful research. This project is designed, implemented, and analyzed by undergraduate students at RPI.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img
                            src="/lake.png"
                            alt="Project Image"
                            className="w-full max-w-[2048] h-auto"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}