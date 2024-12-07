import React, { useEffect, useState } from "react";
import "./messages.css";

function CollectionPage() {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(2);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 2);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/project/projectdiscuss"
        );
        const data = await response.json();
        const sortedData = data.reverse();
        setCollection(sortedData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching collection:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="loading-text">Loading...</p>;
  }
  return (
    <div className="collection-page">
      <h1 className="page-title">Messages</h1>
      {collection.length > 0 ? (
        <ul className="messages-list">
          {collection.slice(0, visibleItems).map((item) => (
            <li key={item._id} className="message-item">
              <div className="message-header">
                <strong className="message-name">{item.name}</strong>
                <p className="message-email">{item.email}</p>
              </div>
              <p className="message-content">{item.projectCategory}</p>
              <div className="message-details">
                <p className="message-journey">{item.projectBudget}</p>
                <p className="message-mentorship">{item.details}</p>
              </div>
              <hr className="message-divider" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-items-message">No items in the collection.</p>
      )}
      {visibleItems < collection.length && (
        <button className="show-more-button" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
}
export default CollectionPage;