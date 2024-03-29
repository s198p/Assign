  import './App.css';
  import Card from './Card/Card';
  import Card2 from './Card/Card2';

  function App() {
    return (
      <div className="App">
      <div className="card1">
            <div className="logo-box">
              <p>28/10/2020</p>
              <div className="logo"><i className="fab fa-amazon"></i></div>
            </div>
            <div className="case">Case Study</div>
            <h1>Amazon Gift</h1>
            <h1>Pay</h1>
            <div className="logo-box">
              <h5>Desktop - Mobile</h5>
              <div className="logo1"><i class="fas fa-arrow-right"></i></div>
            </div>
        </div>
        <div className=" card1">
            <Card 
            date={"28/10/2020"}
            
            title1={"Case Study"}
            title2={"Amazon Gift"}
            title3={"Pay"}
            title4={"Desktop - Mobile"}
            />
        </div>
        <div className=" card2">
            <Card2 
            date={"17 Sep 2020"}
            
            title1={"Case Study"}
            title2={"Apple Gift"}
            title3={"Payment"}
            title4={"MacOS - Mobile"}
            />
        </div>
      </div>
    );
  }

  export default App;
