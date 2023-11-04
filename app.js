/// Themes Variables /// 

const woodBtn = document.querySelector('.btn-wood');
const metalBtn = document.querySelector('.btn-metal');
const goldBtn = document.querySelector('.btn-gold');
const deleteAll = document.querySelector('.delete-all-btn')
const notesListScreen = document.querySelector('.notes-list-holder');
const notesListDivHolder = document.querySelector('notes-list-div-holder');
let noteDevice = document.querySelector('.note-device')
let light = document.querySelector('.light');

/// Themes Event Listeners ///

woodBtn.addEventListener('click', () => {
    noteDevice.style.background = 'url(img/Wood.jpg) center / cover';
    light.classList.add('blue-light-animation');
});

metalBtn.addEventListener('click', () => {
    noteDevice.style.background = 'url(img/Metal.jpg) center / cover'

});

goldBtn.addEventListener('click', () => {
    noteDevice.style.background = 'url(img/Ceramic.jpg) center / cover'
    
});


/// App Variables ///

const btnCreate = document.querySelector('.btn-create');
const notesListHolder = document.querySelector('.notes-list-holder');
const backgroundListHolder = document.querySelector('.background-list-holder');
const text = document.querySelector('.text');
const date = document.querySelector('.date');
const time = document.querySelector('.time');

/// App Event Listeners ///

btnCreate.addEventListener('click', () => {

    if(text.value === '' || date.value === '' ) {
    
    }else {
        let notesListDivHolder = document.createElement('div');
        notesListDivHolder.classList.add('notes-list-div-holder');
     
        let textDateDiv = document.createElement('div');
        textDateDiv.classList.add('text-date-div');
     
        let liText = document.createElement('li');
        liText.innerText = text.value;
        liText.style.listStyle = 'none';
        liText.style.fontWeight = '700';
        liText.style.marginBottom = '3px';
        liText.style.color = 'white';
     
        let liDate = document.createElement('li');
        liDate.innerText = date.value;
        liDate.style.listStyle = 'none';
        liDate.style.fontWeight = '700';
        liDate.style.color = 'white';

        let liTime = document.createElement('li');
        liTime.innerText = time.value;
        liTime.style.listStyle = 'none';
        liTime.style.fontWeight = '700';
        liTime.style.marginBottom = '3px';
        liTime.style.color = 'white';

        let dateTimeHolder = document.createElement('div')
        dateTimeHolder.classList.add('date-time-holder')
        dateTimeHolder.append(liDate, liTime)
     
     
        let btnDiv = document.createElement('div');
        btnDiv.classList.add('btn-div');
     
        let btnDelete = document.createElement('button');
        btnDelete.style.borderRadius = '20px';
        btnDelete.style.width = '25px';
        btnDelete.style.height = '25px';
        btnDelete.style.background = 'url(img/XM.png) center / cover';
        btnDelete.style.border = '2px solid white';
     
        /// Delete Button Event Listener ///
     
        btnDelete.addEventListener('click', () => {
         notesListDivHolder.remove()
        })
     
        let btnCheck = document.createElement('button');
        btnCheck.style.borderRadius = '20px';
        btnCheck.style.width = '25px';
        btnCheck.style.height = '25px';
        btnCheck.style.background = 'url(img/CM.png) center / cover';
        btnCheck.style.border = '2px solid white';
        btnCheck.style.margin = '0 10px 0 10px';
     
        /// Check Button Event Listener ///
     
        btnCheck.addEventListener('click', () => {
         liText.classList.toggle('checked')
        })
     
        let btnEdit = document.createElement('button');
        btnEdit.style.borderRadius = '20px';
        btnEdit.style.width = '25px';
        btnEdit.style.height = '25px';
        btnEdit.style.background = 'url(img/PM2.png) center / cover';
        btnEdit.style.border = '2px solid white';
     
        /// Edit Button Event Listener ///
     
        btnEdit.addEventListener('click', () => {
         liText.remove();
         let newTextInput = document.createElement('input');
         newTextInput.classList.add('text');
         newTextInput.value = liText.innerText;
         newTextInput.style.marginBottom = '3px';
     
         let done = document.createElement('button');
         done.innerText = 'done';
         done.classList.add('done');
     
         textDateDiv.append(newTextInput, done)
     
         /// Done Button Event Listener ///
     
         done.addEventListener('click', () => {
             liText.innerText = newTextInput.value;
             textDateDiv.appendChild(liText);
     
             done.remove()
             newTextInput.remove();
     
         })
     
        })
     
        
        textDateDiv.append(dateTimeHolder, liText);
        btnDiv.append(btnEdit, btnCheck, btnDelete);
        notesListDivHolder.append(textDateDiv, btnDiv);
        notesListHolder.appendChild(notesListDivHolder);
     
        text.value = '';
        date.value = '';
        time.value = '';

        deleteAll.addEventListener('click', () => {
            backgroundListHolder.remove()
        })
    }


});