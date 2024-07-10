// app/javascript/packs/el-transition.js

function enter(element, enterClasses, enterFromClasses, enterToClasses, done) {
  function end() {
    element.classList.remove(...enterClasses, ...enterToClasses);
    element.removeEventListener('transitionend', end);
    if (done) done();
  }

  element.classList.add(...enterClasses, ...enterFromClasses);
  requestAnimationFrame(() => {
    element.classList.remove(...enterFromClasses);
    element.classList.add(...enterToClasses);
    element.addEventListener('transitionend', end);
  });
}

function leave(element, leaveClasses, leaveFromClasses, leaveToClasses, done) {
  function end() {
    element.classList.add('hidden');
    element.classList.remove(...leaveClasses, ...leaveToClasses);
    element.removeEventListener('transitionend', end);
    if (done) done();
  }

  element.classList.remove('hidden');
  element.classList.add(...leaveClasses, ...leaveFromClasses);
  requestAnimationFrame(() => {
    element.classList.remove(...leaveFromClasses);
    element.classList.add(...leaveToClasses);
    element.addEventListener('transitionend', end);
  });
}

function toggle(element, enterClasses, enterFromClasses, enterToClasses, leaveClasses, leaveFromClasses, leaveToClasses, done) {
  if (element.classList.contains('hidden')) {
    enter(element, enterClasses, enterFromClasses, enterToClasses, done);
  } else {
    leave(element, leaveClasses, leaveFromClasses, leaveToClasses, done);
  }
}

// Exporting functions for global use
window.elTransition = { enter, leave, toggle };
