function plotQuestion() {
    let array = [];
    for (let index = 0; index < 4; index++) {
        let childArray = [];
        for (let i = 0; i < model.theme.length; i++) {
            childArray.push(model.survey[i + (model.theme.length * index)].question);
        }
        array.push(childArray);
    }
    return array;
    
}

function plotData(index) {
    let array = [];
    for (let i = 0; i < model.theme.length; i++) {
        array.push(model.user.answer[i + (model.theme.length * index)]);
    }
    return array;
}
function changeColors(index) {
    let array = [];
    for (let i = 0; i < 6; i++) {
        let bar = model.user.answer[i + (6 * index)];
        if (bar < 3) array.push('rgb(255, 78, 78)');
        else if(bar < 6) array.push('rgb(255, 255, 92)');
        else if(bar < 8) array.push('rgb(53, 170, 53)');
    }
    return array;
    
}
function alternativtResultat() {
    if (model.page == "resultView1") {
        model.page = "resultView2";
        resultView2();
    }
    else if (model.page == "resultView2") {
        model.page = "resultView1";
        resultView1();
    }
    console.log(model.page)
}
// function plotQuestion() {
//     let array = [];
//     for (let i = 0; i < 4; i++) {
//         array[i] = plotRow(i);
//     }
//     return array;
// }

// function plotRow(index) {
//     let array = [];
//     for (let i = 0; i < 6; i++) {
//         array.push(model.survey[i + (6 * index)].question)
//     }
//     return array;
// }