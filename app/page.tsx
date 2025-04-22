import React from "react";

export default function Home() {
  return (
      <div className="h-screen w-screen flex flex-col overflow-hidden">
        {/* Full-screen iframe */}
        <main className="flex-grow">
          <iframe
              src="https://stetleraquaticlab.shinyapps.io/rshinyapp/"
              className="w-full h-full border-none"
              title="Environmental Web Application"
          ></iframe>
        </main>


        {/* Footer - Hidden on Small Screens */}
        <footer className="hidden md:block fixed bottom-0 w-full text-left p-2 bg-white shadow-md">
          We thank the New York State Parks, Recreation and Historic Preservation Grant #T003655 for funding this work.  We thank the following people for assisting with data collection: Lauri Ahrens, Jenna Robinson, Caitlin Williams, Charles Stetler, and Katelyn Stetler.  We thank numerous State Park and Grafton Lakes employees for assisting with logistics during the sampling season.  We thank Kevin Rose for lending equipment (Turner C6) and sharing lab space.
        </footer>
      </div>
  );
}