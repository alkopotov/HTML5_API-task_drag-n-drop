let dragged = null;

function handleDrop(e) {
  e.preventDefault()
  if (dragged.id.slice(dragged.id.indexOf('-')) == e.target.id.slice(e.target.id.indexOf('-'))) {
    e.target.style.backgroundColor = window.getComputedStyle(e.target).borderColor;
    dragged.parentNode.removeChild(dragged);
  }
}

const targetAreas = [...document.querySelectorAll('div')].filter(elem => elem.id.includes('area'))

targetAreas.forEach(elem => {
    elem.addEventListener('drop', handleDrop);
    elem.addEventListener('dragover', (e) => e.preventDefault());
  })

const draggableObjects = [...document.querySelectorAll('div')].filter(elem => elem.id.includes('element'))

draggableObjects.forEach(elem => {
    elem.draggable = true;
    elem.addEventListener('dragstart', (e) => dragged = e.target);
    elem.addEventListener('dragenter', (e) => e.preventDefault());
  })