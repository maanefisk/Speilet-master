function resultView2() {
    let html = '<button onclick="alternativtResultat()" class="alternativtResultatOppsett">alternativt resultatoppsett</button>';
    for (i = 0; i < 6; i++) {
      html += `
      <div class="divContainer">
          <text class="kategori">${model.theme[i]}</text> 
          <div class="points">
          <div class="pointa">7</div>
          <div class="pointa">6</div>
          <div class="pointa">5</div>
          <div class="pointa">4</div>
          <div class="pointa">3</div>
          <div class="pointa">2</div>
          <div class="pointa">1</div>
      </div>
      <svg class="chart" viewBox="0 0 7 7" height="400" width="470">
      
      <rect class="scale" x="-0.7" y="6" width="9" height="0.01"></rect>
      <rect class="scale" x="-0.7" y="5" width="9" height="0.01"></rect>
      <rect class="scale" x="-0.7" y="4" width="9" height="0.01"></rect>
      <rect class="scale" x="-0.7" y="3" width="9" height="0.01"></rect>
      <rect class="scale" x="-0.7" y="2" width="9" height="0.01"></rect>
      <rect class="scale" x="-0.7" y="1" width="9" height="0.01"></rect>
      <rect class="scale" x="-0.7" y="0.1" width="9" height="0.01"></rect>
  
          ${theMid(i)}
          
          ${tempo(i)}
      </svg>
      <div id="exp${i}" class="explain"></div>
      </div>
      `;
  
    function theMid(indexo) {
      let html = '';
        var verdi = (model.user.answer[0+(i*4)]+model.user.answer[1+(i*4)]+model.user.answer[2+(i*4)]+model.user.answer[3+(i*4)]);
        var lengde = (verdi / 4);
          html += `
            <g class="bar1">
              <rect class="hovercolor" x="-0.4" y="${7-lengde}" width="7.98" height="${lengde}"></rect>
              <text x="-4" y="${(7-lengde)}">${lengde}</text>
            </g>
          `;
      return html;
    }
    }
  
    document.getElementById('content').innerHTML = html;
  }
        function colorOnBar(elem) {
        let div1 = document.getElementById('exp0');
        let div2 = document.getElementById('exp1');
        let div3 = document.getElementById('exp2');
        let div4 = document.getElementById('exp3');
        let div5 = document.getElementById('exp4');
        let div6 = document.getElementById('exp5');
        if (elem < 4) div1.innerHTML = model.survey[elem].question;
        else if (elem < 8) div2.innerHTML = model.survey[elem].question;
        else if (elem < 12) div3.innerHTML = model.survey[elem].question;
        else if (elem < 16) div4.innerHTML = model.survey[elem].question;
        else if (elem < 20) div5.innerHTML = model.survey[elem].question;
        else if (elem < 25) div6.innerHTML = model.survey[elem].question;
      }
  
  function tempo(index) {
    let color = 'fill:rgb(70, 185, 55)';
    let html = '';
    for (y = 0; y < 4; y++) {
      let answer = model.user.answer[y + (index * 4)];
      if (answer < 7) {color = 'fill:rgb(70, 185, 55)'}
      if (answer < 6) {color = 'fill:rgb(255, 247, 105)'}
      if (answer < 3) {color = 'fill:rgb(255, 111, 108)'}
      
        html += `
            <g class="bar" id="${y + (index * 4)}" style="${color}" onmouseover="colorOnBar(this.id)">
                <rect class="hovercolor" x="${-0.4 + (2 * y)}" y="${(7-answer)}" width="1.98" height="${answer}" ></rect>
                <text x="${0.35 + (2 * y)}" y="${(7.7-answer)}">${answer}</text>
            </g>
        `;
    }
    return html;
  }

  
  
  