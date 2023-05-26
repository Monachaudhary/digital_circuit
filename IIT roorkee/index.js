console.log('This is drag and drop utility');

const imgBox = document.querySelector('.element1');
const whiteBoxes = document.getElementsByClassName('whitebox');

// Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'element1';
});

for(whitebox of whiteBoxes) {
    whitebox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });

    whitebox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed'; 
    })

    whitebox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'whitebox'
    })

    whitebox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox);
    })
}


const imgBox1 = document.querySelector('.element2');
const whiteBoxes1 = document.getElementsByClassName('whitebox');

// Event listeners for draggable element imgBox
imgBox1.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});s

imgBox1.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'element2';
});

for(whitebox of whiteBoxes1) {
    whitebox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });

    whitebox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed'; 
    })

    whitebox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'whitebox'
    })

    whitebox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox1);
    })
}


const imgBox3 = document.querySelector('.element3');
const whiteBoxes3 = document.getElementsByClassName('whitebox');

// Event listeners for draggable element imgBox
imgBox3.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox3.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'element3';
});

for(whitebox of whiteBoxes3) {
    whitebox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });

    whitebox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed'; 
    })

    whitebox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'whitebox'
    })

    whitebox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox3);
    })
}
