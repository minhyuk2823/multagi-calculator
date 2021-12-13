import { useState, useEffect } from "react";

function Chugamaesu() {
  return (
    <div className="App">
      <div id="chugamaesu-con">
        <h2 id="chugamaesu-title">
          <span>💰 추가매수</span>
          <span>(평단과 금액 입력으로 수량 계산에도 용이합니다.)</span>
        </h2>

        <div id="chugamaesu-input">
          <div id="pyeongdan">
            <input type="text" placeholder="평단"></input>
            <span>원</span>
          </div>
          <div id="surang">
            <input type="text" placeholder="수량"></input>
            <span id="surang-2">수량</span>
          </div>
          <div id="geumak">
            <input type="text" placeholder="금액" readonly=""></input>
            <span id="won-2">원</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chugamaesu;
