import "./css/dashboards.css";
import Navbar from "./routes/Navbar";
import { Chart } from "react-google-charts";
// import Chart from "./chart";

const Main = () => {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];
  
  const options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
  };
  const pieOptions = {
    title: "",
    pieHole: 0.6,
    slices: [
      {
        color: "#2BB673"
      },
      {
        color: "#d91e48"
      },
      {
        color: "#007fad"
      },
      {
        color: "#e9a227"
      }
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto"
  };
  return (
    <>
     <Navbar></Navbar>
    <main>
      <div className="main_container">
        <div className="main_title">
          {/* <img src={hello} alt="hello"/> */}
          <div className="main_greeting">
            <h1>Hello Lynkk-In Admin!</h1>
            <p>Welcome to Dashboard</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number Of Visitors</p>
              <span className="font-bold text-title">13</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calender fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number Of Visitors</p>
              <span className="font-bold text-title">20</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-video-camera fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Jobs Posted</p>
              <span className="font-bold text-title">13</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-video-camera fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Unique Visitors</p>
              <span className="font-bold text-title">20</span>
            </div>
          </div>

          <div className="charts">
          <div className="charts__right__title">
            <Chart
              chartType="PieChart"
              data={[["Job Profile", "Weight"], ["Sales", 165], ["Technician", 55], ["Barber", 16], ["Plumber", 5], ["Mechanic", 133], ["Sweeper", 34]]}
              options={pieOptions}
              graph_id="PieChart"
              width={"100%"}
              height={"600px"}
              legend_toggle
            />
            </div>

            <div>
              <div className="charts__right__title">
                <div>
                  <h1>Stats Reports</h1>
                  <p>Noida, India</p>
                </div>
                <i className="fa fa-use"></i>
              </div>

              <div className="charts__right__cards">
                <div className="card1">
                  <h1>Income</h1>
                  <p>65748</p>
                </div>

                <div className="card2">
                  <h1>Income</h1>
                  <p>65748</p>
                </div>

                <div className="card3">
                  <h1>Income</h1>
                  <p>65748</p>
                </div>

                <div className="card4">
                  <h1>Income</h1>
                  <p>65748</p>
                </div>
              </div>
            </div>
          </div>

          <div className="charts">
            {/* <div className="charts_left">
              <div className="charts__left__title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>Cupperino , Californis,USA</p>
                </div>
                <i className="fa fa-usd"></i>
              </div>
              <Chart />
            </div> */}
            <div className="charts__left__title">
            
            <Chart
              chartType="AreaChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
              
            </div>
           
            


            {/* <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Stats Reports</h1>
                  <p>Cupertino, California, USA</p>
                </div>
                <i className="fa fa-use"></i>
              </div>

              <div className="charts__right__cards">
                <div className="card1">
                  <h1>Income</h1>
                  <p>65748</p>
                </div>

                <div className="card2">
                  <h1>Income</h1>
                  <p>65748</p>
                </div>

                <div className="card3">
                  <h1>Income</h1>
                  <p>65748</p>
                </div>

                <div className="card4">
                  <h1>Income</h1>
                  <p>65748</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </main>
    </>
  );
};
export default Main;
