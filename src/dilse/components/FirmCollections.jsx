import React, { useState, useEffect } from "react";
import { API_URL } from "../pages/apiData";
import { Link } from "react-router-dom";

const FirmCollections = () => {
  const [firmData, setFirmData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const firmDataHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/get-allVendors`);
      const data = await response.json();
      setFirmData(data.vendors);
    } catch (error) {
      alert("Firm data not fetched");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    firmDataHandler();
  }, []);

  const getFilteredData = () => {
    if (activeFilter === "All") return firmData;
    return firmData.filter((apple) =>
      apple.firms.some((item) =>
        item.region.some((region) =>
          region.toLowerCase().includes(activeFilter.toLowerCase())
        )
      )
    );
  };

  const filteredData = getFilteredData();

  return (
    <>
      <h3>Restaurants with Online Food Delivery in Hyderabad</h3>
      <div className="filterButtons">
  <div className="buttonWrapper">
    <button
      className={`filterButton ${activeFilter === "All" ? "active" : ""}`}
      onClick={() => setActiveFilter("All")}
    >
      <span>All</span>
    </button>
  </div>
  <div className="buttonWrapper">
    <button
      className={`filterButton ${activeFilter === "South-Indian" ? "active" : ""}`}
      onClick={() => setActiveFilter("South-Indian")}
    >
      <span>South-Indian</span>
    </button>
  </div>
  <div className="buttonWrapper">
    <button
      className={`filterButton ${activeFilter === "North-Indian" ? "active" : ""}`}
      onClick={() => setActiveFilter("North-Indian")}
    >
      <span>North-Indian</span>
    </button>
  </div>
  <div className="buttonWrapper">
    <button
      className={`filterButton ${activeFilter === "Chinese" ? "active" : ""}`}
      onClick={() => setActiveFilter("Chinese")}
    >
      <span>Chinese</span>
    </button>
  </div>
  <div className="buttonWrapper">
    <button
      className={`filterButton ${activeFilter === "Bakery" ? "active" : ""}`}
      onClick={() => setActiveFilter("Bakery")}
    >
      <span>Bakery</span>
    </button>
  </div>
</div>

      <section className="firmSection">
        {filteredData.length === 0 ? (
          <p>No firms available for the selected category.</p>
        ) : (
          filteredData.map((apple) => (
            <React.Fragment key={apple.id}>
              {apple.firms.map((item) => (
                <Link key={item._id} to={`/products/${item._id}`}>
                  <div className="firmGroupBox">
                    <div className="firmGrp">
                      <img
                        src={`${API_URL}/uploads/${item.image}`}
                        alt={item.name}
                        onError={(e) =>
                          (e.target.src = "/default-placeholder.png")
                        }
                      />
                    </div>
                    <div className="firmOffer">{item.offers}</div>
                    <div className="firmDetails">
                      <ul>
                        <li className="firmName">
                          <strong>{item.firmName}</strong>
                        </li>
                        <li>{item.region.join(", ")}</li>
                        <li>{item.area}</li>
                      </ul>
                    </div>
                  </div>
                </Link>
              ))}
            </React.Fragment>
          ))
        )}
      </section>
    </>
  );
};

export default FirmCollections;
