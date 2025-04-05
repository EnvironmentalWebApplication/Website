import React from "react";

export default function DataPage() {
    return (
        <div className="min-h-screen flex flex-col overflow-hidden">
            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center p-6">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Data</h1>

                    {/* Data Access Section */}
                    <h2 className="text-xl font-semibold mb-4">Data Access</h2>
                    <p className="mb-6">
                        You can access and download the dataset from the EDI data portal by following the link:&nbsp;
                        <a href="https://portal.edirepository.org/nis/mapbrowse?packageid=edi.1958.newest" target="_blank" className="text-blue-600 underline">
                            EDI Data Portal
                        </a>
                    </p>

                    {/* Add some space before the citation */}
                    <div className="mb-8"></div>

                    {/* Citation Section */}
                    <h2 className="text-xl font-semibold mb-4">Citation</h2>
                    <p className="mb-6">
                        Gelzhiser, I.G., D. Walczyk, I. Knazik, and J.T. Stetler. 2025. High-Frequency and Water
                        Quality Monitoring Data of Long Pond at Grafton Lakes State Park, New York, United States,
                        2024 ver 1. Environmental Data Initiative.
                    </p>


                    {/* Images: Students Preparing for Deployment and Students Working */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col items-center">
                            <img
                                src="/studentsPreparingForDeployment.png"
                                alt="Students Preparing for Deployment"
                                className="w-full max-w-[600px] h-auto mb-2"
                            />
                            <p className="text-center text-sm italic">
                                Team preparing for sensor deployment.  Undergraduates students Isabella Knazik and
                                Isabelle Gelzhiser working with Dr. Jonathan Stetler.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="/studentsWorking.png"
                                alt="Students Working"
                                className="w-full max-w-[600px] h-auto mb-2"
                            />
                            <p className="text-center text-sm italic">
                                RPI undergraduate students get hands-on experience.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}


{/*First picture (diagram of sensor network at long pond): Measurements are recorded 24 hours a day, 7 days a week!*/}
{/*Second picture (student picture): RPI undergraduate students get hands-on experience*/}
{/*Third picture (team): Team preparing for sensor deployment.  Undergraduates students Isabella Knazik and Isabelle Gelzhiser working with Dr. Jonathan Stetler.*/}
{/*Fourth picture: Sensors hard at work at Long Pond*/}