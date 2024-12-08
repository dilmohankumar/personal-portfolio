import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

function CollectionPage() {
  const [collections, setCollections] = useState({
    messages: [],
    mentorships: [],
    projectRequests: [],
    startupRequests: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/collections");
        const data = await response.json();
        console.log("API Response:", data);
        setCollections(data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const { messages, mentorships, projectRequests, startupRequests } =
    collections;
  if (loading) {
    return <p className="loading-text">Loading...</p>;
  }
  return (
    <div className="dbody">
      <div class="button-containerd">
        <Link to="/">
          <button className="styled-buttond">Home</button>
        </Link>
        <Link to="/messages">
          <button className="styled-buttond">Message</button>
        </Link>
        <Link to="/mentorship">
          <button class="styled-buttond">Mentorships</button>
        </Link>
        <Link to="/projectmessage">
          <button class="styled-buttond">Project</button>
        </Link>
        <Link to="/startup">
          <button class="styled-buttond">Startup</button>
        </Link>
      </div>

      <div className="collectionp">
        <section className="collection-sectiond">
          <h2>Messages</h2>
          {messages && messages.length > 0 ? (
            <ul className="collection-listd">
              {messages.map((message) => (
                <li key={message._id} className="message-itemd">
                  <div className="message-headerd">
                    <strong className="message-named">{message.name}</strong>
                    <p className="message-emaild">{message.email}</p>
                  </div>
                  <p className="message-contentd">{message.message}</p>
                  <hr className="message-dividerd" />
                </li>
              ))}
            </ul>
          ) : (
            <p>No messages available.</p>
          )}
        </section>

        {/* Mentorships Section */}
        <section className="collection-sectiond">
          <h2>Mentorships</h2>
          {mentorships && mentorships.length > 0 ? (
            <ul className="collection-listd">
              {mentorships.map((mentorships) => (
                <li key={messages._id} className="message-itemd">
                  <div className="message-headerd">
                    <strong className="message-named">
                      {mentorships.name}
                    </strong>
                    <p className="message-emaild">{mentorships.email}</p>
                  </div>
                  <p className="message-contentd">{mentorships.message}</p>
                  <div className="message-detailsd">
                    <p className="message-journeyd">{mentorships.journey}</p>
                    <p className="message-mentorshipd">
                      {mentorships.mentorship}
                    </p>
                    <p className="message-resultd">{mentorships.result}</p>
                  </div>
                  <hr className="message-dividerd" />
                </li>
              ))}
            </ul>
          ) : (
            <p>No mentorships available.</p>
          )}
        </section>

        {/* Project Discusses Section */}
        <section className="collection-sectiond">
          <h2>Project Discusses</h2>
          {projectRequests && projectRequests.length > 0 ? (
            <ul className="collection-listd">
              {projectRequests.map((projectRequests) => (
                <li key={projectRequests._id} className="message-itemd">
                  <div className="message-headerd">
                    <strong className="message-named">
                      {projectRequests.name}
                    </strong>
                    <p className="message-emaild">{projectRequests.email}</p>
                  </div>
                  <p className="message-contentd">
                    {projectRequests.projectCategory}
                  </p>
                  <div className="message-detailsd">
                    <p className="message-journeyd">
                      {projectRequests.projectBudget}
                    </p>
                    <p className="message-mentorshipd">
                      {projectRequests.details}
                    </p>
                  </div>
                  <hr className="message-dividerd" />
                </li>
              ))}
            </ul>
          ) : (
            <p>No project discussions available.</p>
          )}
        </section>

        {/* Startup Messages Section */}
        <section className="collection-sectiond">
          <h2>Startup Messages</h2>
          {startupRequests && startupRequests.length > 0 ? (
            <ul className="collection-listd">
              {startupRequests.map((startupRequests) => (
                <li key={startupRequests._id} className="message-itemd">
                  <div className="message-headerd">
                    <strong className="message-named">
                      {startupRequests.name}
                    </strong>
                    <p className="message-emaild">{startupRequests.email}</p>
                  </div>
                  <p className="message-contentd">
                    {startupRequests.projectCategory}
                  </p>
                  <div className="message-detailsd">
                    <p className="message-journeyd">{startupRequests.focus}</p>
                    <p className="message-mentorshipd">
                      {startupRequests.details}
                    </p>
                  </div>
                  <hr className="message-dividerd" />
                </li>
              ))}
            </ul>
          ) : (
            <p>No startup messages available.</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default CollectionPage;
