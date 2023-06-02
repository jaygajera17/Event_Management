import { useState } from 'react';
import './style.css';
const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [doubt, setDoubt] = useState('');
  const [outputResult, setOutputResult] = useState('');

  const handleTogglePopup = () => {
    setIsOpen(isOpen);
  };

  const handleDoubtChange = (e) => {
    setDoubt(e.target.value);
  };

  const handleDoubt = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://localhost:7015/api/OpenAI/UseChatGPT?doubt=${doubt}`);
      const data =await response.text();
      console.log(data);
      setOutputResult(data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleClosePopup = () => {
    setDoubt('');
    setOutputResult('');
    setIsOpen(false);
  };

  return (
    <div className={`chatbot-popup ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-toggle" onClick={handleTogglePopup}>
        <img src={require(`./chatbot.png`)} alt="Chatbot Icon" />
      </div>
      <div className="chatbot-content">
        <div className="chatbot-header">
          <h2>Chatbot</h2>
          <button className="close-button" onClick={handleClosePopup}>
            &times;
          </button>
        </div>
        <div className="chatbot-body">
          {outputResult ? (
            <div dangerouslySetInnerHTML={{ __html: outputResult }}></div>
          ) : (
            <p>ask me any doubt about events.</p>
          )}
        </div>
        <div className="chatbot-footer">
          <form onSubmit={handleDoubt}>
            <input
              type="text"
              value={doubt}
              placeholder="Enter your doubt"
              onChange={handleDoubtChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPopup;
