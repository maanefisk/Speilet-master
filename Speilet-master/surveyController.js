function tempBackwardButton() {
    if (model.questionCounter == 0) return;
    if ([4,8,12,16,20].includes(model.questionCounter)) model.themeCounter--;
    model.questionCounter--;
    model.progressBar -= 4.34782608695;
    updateView();
}

function tempForwardButton() {
    if (model.user.answer[model.questionCounter] != undefined) {
        pushNotes();
        if (model.questionCounter == 23) {
            if (!confirm('Er du sikker på at du vil levere?')) return;
            try {
                db.collection(model.session).add({
                    firstName: model.user.firstName,
                    lastName: model.user.lastName,
                    date: new Date().toISOString().substr(0, 10),
                    answer: model.user.answer,
                    note: model.user.note,
                })
            } catch (err) {
                console.log(err)
            }
        model.page = 'resultView2';
        return updateView();
        }
        if ([3,7,11,15,19].includes(model.questionCounter)) model.themeCounter++;
        model.questionCounter++;
        model.progressBar += 4.34782608695;
        updateView();
    } else alert('Du må svare på spørsmålet for å gå videre');
}

function answer(x) {
    let id = parseInt(x.id);
    let val = parseInt(x.value);
    model.user.answer[id] = val;
}

function showHideDiv() {
    let x =  document.getElementsByClassName('popup')[0];
    if (x.style.display == "none") x.style.display = "block";
    else x.style.display = "none";
}

function pushNotes() {
    let notepadValue = document.getElementById("notepad").value;
    let i = model.questionCounter;
    if (notepadValue) model.user.note[i] = notepadValue;
    else model.user.note[i] = null;
}

window.addEventListener('click', (event) => {
    let popup = document.getElementsByClassName('popup')[0];
    let popbutton = document.getElementsByClassName('popbutton')[0];
    if (model.page == 'surveyView' && !popup.contains(event.target) && !popbutton.contains(event.target) && popup.style.display == 'block') popup.style.display = "none";
})

window.onbeforeunload = function(){
    if (model.page == 'surveyView') return 'Are you sure you want to leave?';
  };