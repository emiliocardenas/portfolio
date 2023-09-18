import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';


const ChatterdocsChatbot = () => {
    useEffect(() => {
      // ChatterdocsWidget script initialization
      const script = document.createElement('script');
      script.src = 'https://chatterdocs.ai/embed/chatterdocs-widget.js';
      script.async = true;
      document.body.appendChild(script);
  
      // ChatterdocsWidget initialization
      window.ChatterdocsWidget.init({
        chatbot: '8883f743-37b7-45e6-b9a9-0314c59e7d20',
      });
  
      // Clean up
      return () => {
        // If needed, remove any cleanup logic for the script
      };
    }, []);
  
    return (
      <div>
        {/* Helmet to dynamically add scripts to the head */}
        <Helmet>
          <script src="https://chatterdocs.ai/embed/chatterdocs-widget.js" type="text/javascript" />
        </Helmet>
        {/* Add any other content for your component */}
      </div>
    );
  };
  
  export default ChatterdocsChatbot;
  