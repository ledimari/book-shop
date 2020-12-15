const constrain = 50

const transform = (x, y, el) => {
  const box = el.getBoundingClientRect()

  const rotateX = -(y - box.y - (box.height / 2)) / constrain
  const rotateY = (x - box.x - (box.width / 2)) / constrain

  const speed = el.getAttribute("data-speed")

  const transformX = (window.innerWidth - e.pageX * speed) / 100
  const transformY = (window.innerHeight - e.pageY * speed) / 100

  return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `
}

const handleMouseMove = (e) => {
  const sectionSaleImg = document.querySelectorAll(".sale-img")

  sectionSaleImg.forEach((img) => {

    window.requestAnimationFrame(() => {
      img.style.transform = transform(e.clientX, e.clientY, img)
    })
  })
}

const init = () => {
  const sectionSaleElement = document.getElementById("sale")

  sectionSaleElement.addEventListener("mousemove", handleMouseMove)
}

(init)()
