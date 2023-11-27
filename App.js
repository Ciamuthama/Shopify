

document.addEventListener('DOMContentLoaded', () => {
    const toggleOpen = document.getElementById('to-open-guides');
        const expandableContent = document.getElementById('open-guides')
        const arrow = document.getElementById('arrow')
        console.log( arrow )
        
        toggleOpen.addEventListener('click',  ()=> {
            const isExpanded = expandableContent.getAttribute('aria-hidden') === 'true'
            expandableContent.setAttribute('aria-hidden', !isExpanded)
            toggleOpen.setAttribute('aria-expanded', !isExpanded )
            if (('aria-expanded', isExpanded)) {
                arrow.style.rotate = "180deg"
                arrow.style.outline = `2px solid var(--states-focused)`
                arrow.style.borderRadius = '6px'
                
            } else{
                arrow.style.rotate = "0deg"
                arrow.style.outline = 'none'
            }
        })
    })


document.addEventListener('DOMContentLoaded', () => {
    const parent = document.getElementById('step-one-container')
    const toggleOpen = document.getElementById('open-step-one-content')
    const expandableContent = document.getElementById('step-one-content')
    toggleOpen.addEventListener('click', () => {
        const isExpanded = expandableContent.getAttribute('aria-hidden') === 'true'
        expandableContent.setAttribute('aria-hidden', !isExpanded)
        toggleOpen.setAttribute('aria-expanded', !isExpanded)

        if (('aria-expanded', isExpanded)) {
            parent.style.backgroundColor = "#F3F3F3"
            toggleOpen.style.fontWeight = 600
        } else{
            parent.style.backgroundColor ='white'
            toggleOpen.style.fontWeight = 500
        }
        })
})

document.addEventListener('DOMContentLoaded', () => {
    const parent = document.getElementById('step-two-container')
    const toggleOpen = document.getElementById('open-step-two-content')
    const expandableContent = document.getElementById('step-two-content')
    toggleOpen.addEventListener('click', () => {
        const isExpanded = expandableContent.getAttribute('aria-hidden') === 'true'
        expandableContent.setAttribute('aria-hidden', !isExpanded)
        toggleOpen.setAttribute('aria-expanded', !isExpanded)
        if (('aria-expanded', isExpanded)) {
            parent.style.backgroundColor = "#F3F3F3"
            toggleOpen.style.fontWeight = 600
        } else{
            parent.style.backgroundColor ='white'
            toggleOpen.style.fontWeight = 500
        }
        })
})

document.addEventListener('DOMContentLoaded', () => {
    const parent = document.getElementById('step-three-container')
    const toggleOpen = document.getElementById('open-step-three-content')
    const expandableContent = document.getElementById('step-three-content')
    toggleOpen.addEventListener('click', () => {
        const isExpanded = expandableContent.getAttribute('aria-hidden') === 'true'
        expandableContent.setAttribute('aria-hidden', !isExpanded)
        toggleOpen.setAttribute('aria-expanded', !isExpanded)
        if (('aria-expanded', isExpanded)) {
            parent.style.backgroundColor = "#F3F3F3"
            toggleOpen.style.fontWeight = 600
        } else{
            parent.style.backgroundColor ='white'
            toggleOpen.style.fontWeight = 500
        }
        
        })
})

document.addEventListener('DOMContentLoaded', () => {
    const parent = document.getElementById('step-four-container')
    const toggleOpen = document.getElementById('open-step-four-content')
    const expandableContent = document.getElementById('step-four-content')
    toggleOpen.addEventListener('click', () => {
        const isExpanded = expandableContent.getAttribute('aria-hidden') === 'true'
        expandableContent.setAttribute('aria-hidden', !isExpanded)
        toggleOpen.setAttribute('aria-expanded', !isExpanded)
        if (('aria-expanded', isExpanded)) {
            parent.style.backgroundColor = "#F3F3F3"
            toggleOpen.style.fontWeight = 600
        } else{
            parent.style.backgroundColor ='white'
            toggleOpen.style.fontWeight = 500
        }
        })
    })

document.addEventListener('DOMContentLoaded', () => {
    const parent = document.getElementById('step-five-container')
    const toggleOpen = document.getElementById('open-step-five-content')
    const expandableContent = document.getElementById('step-five-content')
    toggleOpen.addEventListener('click', () => {
        const isExpanded = expandableContent.getAttribute('aria-hidden') === 'true'
        expandableContent.setAttribute('aria-hidden', !isExpanded)
        toggleOpen.setAttribute('aria-expanded', !isExpanded)
        if (('aria-expanded', isExpanded)) {
            parent.style.backgroundColor = "#F3F3F3"
            toggleOpen.style.fontWeight = 600
        } else{
            parent.style.backgroundColor ='white'
            toggleOpen.style.fontWeight = 500
        }
        })
    })


const checkboxes = document.querySelectorAll('.checkbox')
const progress_container = document.getElementById('progress')
const progressCount = document.getElementById('complete_counter')
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateChecked)
})
function updateChecked() { 
    const total = checkboxes.length
    const checked = document.querySelectorAll('.checkbox:checked')
    const progressPercentage = (checked.length / total) * 72;
    console.log(checked);

    progress_container.style.width = `${progressPercentage}px`
    progressCount.textContent = `${checked.length}/${total} completed`       
}

function Dismiss() {
	document.getElementById("plan_section").classList.toggle("show");
}

function OpenStore(){
    document.getElementById('store').classList.toggle('open')
}

function Notification(){
    document.getElementById("notification").classList.toggle("alert")
}