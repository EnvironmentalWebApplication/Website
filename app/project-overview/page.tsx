import React from "react";

export default function ProjectOverviewPage() {
    return (
        <div className="min-h-screen flex flex-col overflow-hidden">
            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center p-6">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Project Overview</h1>
                    <p className="mb-6">
                        A team of Rensselaer Polytechnic Institute undergraduate students began a research project on
                        water quality in Long Pond under the guidance of Senior Lecturer Jonathan Stetler, PhD in the
                        spring of 2024. Long Pond is located in Grafton Lake State Park, in Rensselaer County, NY
                        (~ 30 minutes away from the RPI Troy campus). As part of their project, the team has installed
                        a high-frequency sensor network that reaches approximately 9 meters deep, collecting dissolved
                        oxygen and temperature data every 10 minutes: 24 hours a day, 7 days week. This information is
                        helping the team explore changes in thermal stratification within Long Pond, which can influence
                        dissolved oxygen dynamics and habitat structure. Their goal is to understand how changes in the
                        physical and chemical structure of Long Pond impact lake primary productivity and algae levels.
                        They hope to continue the monitoring of Long Pond for many years to come creating a unique
                        opportunity for undergraduate students at RPI to get involved in real-world impactful research.
                        This project is designed, implemented, and analyzed by undergraduate students at RPI.
                    </p>

                    {/* Lake Image and Text */}
                    <div className="flex flex-col items-center mb-8">
                        <img
                            src="/lake.png"
                            alt="Lake for the Project"
                            className="w-full max-w-[2048px] h-auto mb-2"
                        />
                        <p className="text-center text-sm italic mb-8">
                            A view of Long Pond in Grafton Lakes State Park where the research takes place.
                        </p>
                    </div>

                    {/* Images: Sensor Diagram and Deployed Buoy */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="flex flex-col items-center">
                            <img
                                src="/sensorDiagram.png"
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
                                src="/deployedBuoy.png"
                                alt="Deployed Buoy"
                                className="w-full max-w-[600px] h-auto mb-2"
                            />
                            <p className="text-center text-sm italic">
                                Sensor hard at work at Long Pond.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
