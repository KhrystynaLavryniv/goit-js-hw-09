import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  form: document.querySelector('form'),
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
}
refs.form.addEventListener('submit', onFormSubmit)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay })
    } else {
      // Reject
      reject({ position, delay })
    }
  });
}

function onFormSubmit(event){
  event.preventDefault()
  const firstDelay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);
  let delay = firstDelay;
  for (let i = 1; i <= amount; i += 1) {
    delay += step
    createPromise(i, delay)
      .then(({ position, delay }) => {
      setTimeout(() => { Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`) }, delay)
    })
      .catch(({ position, delay }) => {
        setTimeout(() => { Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`) }, delay)
      })
  }
}