const constrain = 50

const transform = (el, e) => {
  const box = el.getBoundingClientRect()

  const rotateX = -(e.clientY - box.y - (box.height / 2)) / constrain
  const rotateY = (e.clientX - box.x - (box.width / 2)) / constrain

  const speed = el.getAttribute("data-speed")

  const translateX = (window.innerWidth - e.pageX * speed) / 100
  const translateY = (window.innerHeight - e.pageY * speed) / 100

  return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`
}

const handleMouseMove = (e) => {
  const sectionSaleImg = document.querySelectorAll(".sale-img")

  sectionSaleImg.forEach((img) => {

    window.requestAnimationFrame(() => {
      img.style.transform = transform(img, e)
    })
  })
}

const init = () => {
  const sectionSaleElement = document.getElementById("sale")

  sectionSaleElement.addEventListener("mousemove", handleMouseMove)
}

(init)()
