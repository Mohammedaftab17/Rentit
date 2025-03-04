import React from "react";
import InfoCard from "./InfoCard";

const Infoboxes = () => {
  return (
    <>
      <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoCard
              heading="For Renters"
              backgroundColor="bg-gray-100"
              buttonInfo={{
                text: "Browse Properties",
                link: "/properties",
                backgroundColor: "bg-black",
              }}
            >
              Find your dream rental property. Bookmark properties and contact
              owners.
            </InfoCard>

            <InfoCard
              heading="For Property Owners"
              backgroundColor="bg-blue-100"
              buttonInfo={{
                text: "Add Property",
                link: "/properties/add",
                backgroundColor: "bg-blue-500",
              }}
            >
              List your properties and reach potential tenants. Rent short or
              long term.
            </InfoCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Infoboxes;
