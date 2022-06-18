const jobs = document.querySelector('.jobs')

const job1 = document.querySelector('.job-card')
console.log(job1)

const jobCopy1 = job1.cloneNode(true)
console.log(jobCopy1)
const jobCopy2 = job1.cloneNode(true)
console.log(jobCopy2)
const jobCopy3 = job1.cloneNode(true)
console.log(jobCopy3)

jobs.appendChild(jobCopy1)
jobs.appendChild(jobCopy2)
jobs.appendChild(jobCopy3)

jobCopy1.querySelector('h3').innerText = 'JavaScript Developer'
jobCopy2.querySelector('h3').innerText = 'Java Developer'
jobCopy3.querySelector('h3').innerText = 'Python Developer'




