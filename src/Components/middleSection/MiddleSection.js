import './home.css';
import './App.css';
import FirstPage from './home';

import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
// import "./styles.css";

import Hotels from './image/Hotels.png';
import Appartment from './image/Appartment.png';
import Resort from './image/Resort.png';
import Villas from './image/Villas.png';
import Cabins from './image/Cabins.png';
import Cottages from './image/Cottages.png';
// import Glamping from './image/Glamping.png';
import Serviced_appartment from './image/Serviced_appartment.png';
import Holidayhomes from './image/Holidayhomes.png';
import Guesthomes from './image/Guesthomes.png';
import hostels from './image/hostels.png';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
  { width: 768, itemsToShow: 3, itemsToScroll: 1, pagination: false },
  { width: 800, itemsToShow: 4, itemsToScroll: 1, pagination: false }
];

function MiddleSection() {
  return (
    <div className="App">
      <FirstPage />
      <div className="corosel rec.rec-arrow:hover">
        <h2 className="browsH2">我们提供的住宿类型</h2>
        <Carousel breakPoints={breakPoints} pagination={false} >

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Hotels} alt="Hotels" />
            </div>
            
            <div className="diver">
              <h4 className="subhead">酒店</h4>
              <p className="bbrowssub">10400 hotels</p>
            </div>


          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Appartment} alt="Appartment" />
            </div>
            <div className="diver">
              <h4 className="subhead">公寓</h4>
              <p className="bbrowssub">807,884 公寓</p>
            </div>
          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Resort} alt="Resort" />
            </div>
            <div className="diver">
              <h4 className="subhead">度假村</h4>
              <p className="bbrowssub">17,482 度假村</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Villas} alt="Villas" />
            </div>
            <div className="diver">
              <h4 className="subhead">别墅</h4>
              <p className="bbrowssub">406,281 别墅</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Cabins} alt="Cabins" />
            </div>
            <div className="diver">
              <h4 className="subhead">木屋</h4>
              <p className="bbrowssub">31,734 木屋</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Cottages} alt="Cottages" />
            </div>
            <div className="diver">
              <h4 className="subhead">村舍</h4>
              <p className="bbrowssub">142,790 村舍</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Serviced_appartment} alt="Serviced_appartment" />
            </div>
            <div className="diver">
              <h4 className="subhead">公寓式酒店</h4>
              <p className="bbrowssub">33,743 公寓式酒店</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Holidayhomes} alt="Holidayhomes" />
            </div>
            <div className="diver">
              <h4 className="subhead">度假屋</h4>
              <p className="bbrowssub">406,281 度假屋</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Guesthomes} alt="Guesthomes" />
            </div>
            <div className="diver">
              <h4 className="subhead">客房</h4>
              <p className="bbrowssub">4532 客房</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={hostels} alt="Hostels" />
            </div>
            <div className="diver">
              <h4 className="subhead">旅馆</h4>
              <p className="bbrowssub">115,537 旅馆</p>
            </div>

          </Item>

        </Carousel>
      </div>

      <div >


      </div>

    </div>
  );
}


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export { MiddleSection };
