import React from "react";

export default function DataPage() {
    return (
        <div className="min-h-screen flex flex-col overflow-hidden">
            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center p-6">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Data Access</h1>

                    {/* Data Access Section */}
                    <h2 className="text-xl font-semibold mb-4 text-left">Data Download</h2>
                    <p className="mb-6">
                        You can access and download the dataset from the EDI data portal by following the link:&nbsp;
                        <a
                            href="https://portal.edirepository.org/nis/mapbrowse?packageid=edi.1958.newest"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            EDI Data Portal
                        </a>
                    </p>

                    {/* Add some space */}
                    <div className="mb-8"></div>

                    {/* Images: Sensor Diagram and Deployed Buoy */}
                    <h2 className="text-xl font-semibold mb-4 text-left">How the data was collected</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="flex flex-col items-center">
                            <img
                                src="/Website/sensorDiagram.png"
                                alt="Sensor Diagram"
                                className="w-full max-w-[600px] h-auto mb-2"
                            />
                            <p className="text-center text-sm italic">
                                Diagram of sensor network at Long Pond. Measurements are recorded 24 hours a
                                day, 7 days a week!
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="/Website/deployedBuoy.png"
                                alt="Deployed Buoy"
                                className="w-full max-w-[600px] h-auto mb-2"
                            />
                            <p className="text-center text-sm italic">
                                Sensor hard at work at Long Pond.
                            </p>
                        </div>
                    </div>

                    {/* Citation Section */}
                    <h2 className="text-xl font-semibold mb-4 text-left">Citation</h2>
                    <p className="mb-6">
                        Gelzhiser, I.G., D. Walczyk, I. Knazik, and J.T. Stetler. 2025. High-Frequency and Water
                        Quality Monitoring Data of Long Pond at Grafton Lakes State Park, New York, United States,
                        2024 ver 1. Environmental Data Initiative.
                    </p>
                </div>
            </main>
        </div>
    );
}
