const bucketList = document.querySelector('main')
const buckets = document.querySelectorAll('.bucket')
const circle = buckets[1].firstElementChild

const storedBucket = localStorage.getItem('bucket-index') // localStorage example 1
if (storedBucket) buckets[storedBucket].appendChild(circle)
circle.classList.add('visible')

function circleIsSelected () {
  return circle.classList.contains('selected-circle')
}

function toggleSelection () {
  circle.classList.toggle('selected-circle')
  if (circleIsSelected()) return

  const currentBucketIndex = Array.from(buckets)
    .findIndex(bucket => bucket === circle.parentElement) // arrow function example

  localStorage.setItem('bucket-index', currentBucketIndex) // localStorage example 2
}

function moveCircle (clickedElement) {
  if (!circleIsSelected()) return

  clickedElement.appendChild(circle)
}

bucketList.addEventListener('click', event => {
  if (circle.parentElement === event.target) return

  console.info('Click Target:', event.target)

  if (event.target.classList.contains('circle')) {
    toggleSelection()
  } else if (event.target.classList.contains('bucket')) {
    moveCircle(event.target)
  }
})

// DIFFERENT WAYS TO SELECT a circle or bucket
// const bucketElements = document.querySelectorAll('.bucket')
// const secondBucket = document.querySelector('.bucket:nth-child(2)')
// const circle1 = document.querySelectorAll('.bucket')[1].firstElementChild
// const circle3 = document.querySelector('.bucket:nth-child(2) > div')

// const [filledBucket] = Array.from(bucketElements).filter(element => element.childElementCount)
// const [, filledBucket2] = bucketElements

// console.log({ filledBucket })
// console.log({ filledBucket2 })
// console.dir(circle1)
// console.log({ circle1 })
// console.log({ circle3 })

// handle click events on the circle
// a certain click to trigger "selection"
// change border color of circle

// handle click events on the squares
// certain other clicks to trigger "the move"
// do the move to the clicked element
