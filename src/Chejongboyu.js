import { useState, useEffect } from "react";

function Chejongboyu() {
  return (
    <div className="App">
      <div id="chejongboyu-con">
        <h3 id="chejongboyu-title">
          <span>π° μ΅μ’λ³΄μ </span>
        </h3>
        <div id="chejongboyu-input">
          <div id="chejongpyeong">
            <input type="text" placeholder="μ΅μ’νλ¨" readonly=""></input>
            <span>μ</span>
          </div>
          <div id="chejongsurang">
            <input type="text" placeholder="μ΅μ’μλ" readonly=""></input>
            <span id="surang-3">μλ</span>
          </div>
          <div id="chejonggeum">
            <input type="text" placeholder="μ΅μ’κΈμ‘" readonly=""></input>
            <span id="won-3">μ</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chejongboyu;
