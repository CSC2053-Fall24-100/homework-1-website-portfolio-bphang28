const toggleButton = document.getElementById('toggle-schedule'); 
const Schedule = document.getElementById('schedule'); 

schedule.style.display = 'block'; 

toggleButton.addEventListener('click', function() { 

    if (schedule.style.display === 'none') { 

        schedule.style.display = 'block'; 
        toggleButton.textContent = 'Hide Schedule'; 

    }
    else { 

        schedule.style.display = 'none'; 
        toggleButton.textContent = 'Show Schedule'; 

    }

});

