import React, { useState, useEffect } from 'react';
import { API_URL } from '../pages/apiData';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const Chains = () => {
  const [vendorData, setVendorData] = useState({});
  const [loading, setLoading] = useState(true);

  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/get-allVendors`);
      const newData = await response.json();
      setVendorData(newData);
      setLoading(false);
      console.log('API Data:', newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    vendorFirmHandler();
  }, []);

  const handleScroll = (direction) => {
    const gallery = document.getElementById('chainGallery');
    const scrollAmount = 500;
    gallery.scrollTo({
      left: gallery.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount),
      behavior: 'smooth',
    });
  };

  return (
    <>
      {loading && (
        <div className="loadingContainer">
          <p>Please Wait..</p>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      )}
      <h3>Top Restaurant Chains in Hyderabad</h3>
      <div className="btnSection">
        <button className="arrowButton" onClick={() => handleScroll('left')}>
          <img src="/assets/arrows.png" alt="left arrow" />
        </button>
        <button className="arrowButton" onClick={() => handleScroll('right')}>
          <img src="/assets/arrowr.png" alt="Right arrow" />
        </button>
      </div>
      <section className="chainSection" id="chainGallery">
        {vendorData.vendors &&
          vendorData.vendors.map((vendor, index) => (
            <div className="vendorBox" key={index}>
              {vendor.firms.map((item, firmIndex) => (
                <Link key={item._id} to={`/products/${item._id}`}>
                <div key={firmIndex}>
                  <div className="firmImage">
                    <img
                      src={`${API_URL}/uploads/${item.image}`}
                      alt={item.firmName || 'Vendor Image'}
                    />
                  </div>
                </div>
                </Link>
              ))}
            </div>
          ))}
      </section>
    </>
  );
};

export default Chains;
