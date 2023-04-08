let prio;
let categorys = {
    'category': [],
    'color': []
};
let menuOpen = false;
let color;
let taskCategory

function setPrio(x) {
    if (x == prio) removePrio();
    else {
        removePrio();
        if (x == 'urgent') {
            document.getElementById('prioUrgent').classList.add('prio_button_urgent');
            prio = 'urgent';
        }
        if (x == 'medium') {
            document.getElementById('prioMedium').classList.add('prio_button_medium');
            prio = 'medium';
        }
        if (x == 'low') {
            document.getElementById('prioLow').classList.add('prio_button_low');
            prio = 'low';
        }
    }
};

function removePrio() {
    document.getElementById('prioUrgent').classList.remove('prio_button_urgent');
    document.getElementById('prioMedium').classList.remove('prio_button_medium');
    document.getElementById('prioLow').classList.remove('prio_button_low');
    prio = '';
};


function showNewCategory() {
    loadData();
    if (!menuOpen) {
        document.getElementById('categorys').style.borderBottom = `1px solid #D1D1D1`;
        document.getElementById('dropDown').classList.add('drop_down_open');
        menuOpen = true;
        renderCategorys();
    } else {
        document.getElementById('categorys').innerHTML = ''
        document.getElementById('dropDown').classList.remove('drop_down_open');
        document.getElementById('categorys').style.borderBottom = `0`;
        menuOpen = false;
    }
}


function renderCategorys() {
    document.getElementById('categorys').innerHTML = ''
    document.getElementById('categorys').innerHTML = `<div class="render_categorys" onclick="inputCategory()">New category</div>`;
    for (let i = 0; i < categorys['color'].length; i++) {
        let clr = categorys['color'][i];
        let category = categorys['category'][i];
        renderCategorysHTML(clr, i, category);
    }
};


function deleteCategory(i) {
    if(categorys['category'][i] == taskCategory) {
        document.getElementById('dropDown').innerHTML = `Select task category`;
    }
    categorys['category'].splice(i, 1);
    categorys['color'].splice(i, 1);
    saveInLocalStorage();
    renderCategorys();
}


function inputCategory() {
    showInputCategoryHTML();
}


function clearInputField() {
    showCategoryHTML();
    menuOpen = false;
};


function setColor(clr) {
    if (color) {
        document.getElementById(color).classList.remove('color_active');
    }
    document.getElementById(clr).classList.add('color_active');
    color = clr;
};


function addNewCategory() {
    let categoryValue = document.getElementById('categoryValue').value;
    if (categoryValue.length < 1 || !color) {
        alert('wird ersetzt')
    } else {
        categorys['color'].push(color);
        categorys['category'].push(categoryValue);
        saveInLocalStorage();
        taskCategory = categoryValue;
        showCategoryColorHTML();
        menuOpen = false;
    }
};


function setCategory(ctgry, clr) {
    color = clr;
    taskCategory = ctgry;
    showCategoryColorHTML();
    menuOpen = false;
};


function saveInLocalStorage() {
    let arrayAsString = JSON.stringify(categorys);
    localStorage.setItem('category', arrayAsString);
}


function loadData() {
    let arrayAsString = localStorage.getItem('category')
    categorys = JSON.parse(arrayAsString);
}






