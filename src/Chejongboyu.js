import { useState, useEffect } from "react";

function Chejongboyu() {
  return (
    <div className="App">
      <div id="chejongboyu-con">
        <h3 id="chejongboyu-title">
          <span>💰 최종보유</span>
        </h3>
        <div id="chejongboyu-input">
          <div id="chejongpyeong">
            <input type="text" placeholder="최종평단" readonly=""></input>
            <span>원</span>
          </div>
          <div id="chejongsurang">
            <input type="text" placeholder="최종수량" readonly=""></input>
            <span id="surang-3">수량</span>
          </div>
          <div id="chejonggeum">
            <input type="text" placeholder="최종금액" readonly=""></input>
            <span id="won-3">원</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chejongboyu;
