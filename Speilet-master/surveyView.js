function surveyView() {
    document.getElementById('content').innerHTML = `
    <div class="page">
            <p onclick="tempBackwardButton()" class="bV bothB ${model.questionCounter == 0 ? 'noHover' : ''}" style="${model.questionCounter == 0 ? 'color:lightgray' : ''}">◀</p>
        <div class="progressBar">
            <div class="letters">${model.questionCounter + 1}/24</div>
            <div class="progressBarInside" id="bar" style="width: ${model.progressBar < 96 ? model.progressBar : 100}%;opacity: ${model.questionCounter == 0 ? 0 : 1}"></div>
        </div>
        <div class="survey">
            <h2 class="theme">${model.theme[model.themeCounter]}</h2>
            <hr>
            ${makeQuestionRow()}
            <div class="popup" style="display: none;">
                <textarea rows="20" cols="25" placeholder="Notes" id="notepad" class="notepad">${model.user.note[model.questionCounter] || ''}</textarea>
            </div>
            <button class="popbutton" onclick="showHideDiv()">Notisblokk</button>
        </div>
        <div class="page2">
            <p onclick="tempForwardButton()" class="bH bothB">▶</p>
        </div>
    </div>
    `;
}

function makeQuestionRow() {
    let row = model.survey[model.questionCounter];
    let html = `
            <h4 class="questions">${row.question}</h4>
            <h6 class="lowScoreAnswer">${row.negativeStatement}</h6>
            <div class="radioContainer">
                ${makeRadioButton()}
            </div>
            <h6 class="highScoreAnswer">${row.positiveStatement}</h6>
            <br><br><br>
            <hr>
        `;
    return html;
}

function makeRadioButton() {
    let html = '';
    for (let i = 1; i < 8; i++) {
        html += `
        <label class="buttonContainer label${i}">
        <input name="question${model.questionCounter}" type="radio" id="${model.questionCounter}" value="${i}" 
        onchange="answer(this)" ${model.user.answer[model.questionCounter] == i ? 'checked' : ''}>
        <span class="createCustomButton radio${i}"></span><span class="numbersUnderCheckmark" ><div class="nuc${i}">${i}</div></span>
    </label>
`;
}
return html;
}