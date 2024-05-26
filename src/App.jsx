import { useState } from 'react';
import './App.css';
const tabData = [
    {
      id: 1,
      title: "ITEM 1",
      content: "Authorize the user data ✅",
    },
    {
      id: 2,
      title: "ITEM 2",
      content: "Redirect user to cart page 🛒",
    },
    {
      id: 3,
      title: "ITEM 3",
      content: "Create new payment for the user 💰",
    },
  ];
function App() {
    const [activeTab, stateActiveTab] = useState(2);
    const [isOpen, stateIsOpen] = useState(true);
    const [count, setCount] = useState(0)
    const handelActiveTab = (id) => {
        stateActiveTab(id);
        // setCount(count + 1); //async
        setCount((count) => count + 1);
        setCount((count) => count + 2);

        // onClick={() => stateIsOpen(!isOpen)} => write like up

      }

    return (
    <div>
      <button
      onClick={() => stateIsOpen((isOpen) => !isOpen)}
      style={{border:0, background:"none", padding: "2rem"}}>❌</button>
      {isOpen ? <div className='tab'>
        <div className="tab__header">
            {tabData.map((tab) => (
             <button key={tab.id} 
             style={{border:0, background:"none"}}
            //  onMouseEnter={() => alert("mouse enter")}
            onClick={() => handelActiveTab(tab.id)}
             className={activeTab === tab.id ? "active" : ""}>
                <span>{tab.title}</span>
                <span className='tab-indicator'></span>
                </button>
            ))}
        </div>
        <div className="tab__content">{tabData[activeTab - 1].content} - {count}</div>

    </div> : 
      <p>close program</p>
    }
    </div>
    )}


export default App


