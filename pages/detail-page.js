// counter for alert messages
let num = 3;
    
//start for submit comment fuction
const submitComment = () => {
    
    //retrieving data from webpage
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;
    const comment = document.createElement('section');


    //change first letter name to uppercase variable
    name2 = name.charAt(0).toUpperCase() + name.slice(1);


    //if no name but there is a message
    if (!name && msg) {
        alert('Please enter your name')
    }

    //if there is no message but there is a name
    else if(!msg && name) {
        alert('How are you commenting without a comment??')
    }

    //if there is no name and no message
    else if ( !name && !msg) {
        //first time alert
        if (num === 3) {
            alert('Really?? press again without anything see what happens');
            num = num - 1;
        }

        //second alert
        else if(num === 2) {
            alert('stop it im warning you!');
            num = num - 1;
        }

        //third alert
        else if (num === 1){
            alert('last warning!');
            num = num - 1;
        }

        //last and lasting alert
        else if (num === 0) {
            alert('congratulations! you just wasted your time.')
        }
        return null;
    }

    //if there is a comment that is postable, post it function
    else {
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        h3.innerHTML = `${name2} said:`;
        p.innerHTML = msg;
        comment.classList.add('comment');
        comment.appendChild(h3);
        comment.appendChild(p);
        const commentSection = document.getElementById('comments');
        commentSection.appendChild(comment);

        //clearing the previous comment
        inputField.value = null;
        textArea.value = null;

    }
    
};
