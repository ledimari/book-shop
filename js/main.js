const transform = (el, e, intensity, reset = false) => {
  if (reset) {
    return `perspective(1000px) rotateX(${0}deg) rotateY(${0}deg) translateX(${0}px) translateY(${0}px)`
  }

  const box = el.getBoundingClientRect()

  const rotateX = -(e.clientY - box.y - (box.height / 2)) / intensity
  const rotateY = (e.clientX - box.x - (box.width / 2)) / intensity

  const speed = el.getAttribute("data-speed")

  const translateX = (window.innerWidth - e.pageX * speed) / 100
  const translateY = (window.innerHeight - e.pageY * speed) / 100

  return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`
}

const handleMouseMove = (e) => {
  const sectionSaleImg = document.querySelectorAll(".sale-img")
  const saleBg = document.getElementById("sale__bg")

  sectionSaleImg.forEach((img) => {

    window.requestAnimationFrame(() => {
      img.style.transform = transform(img, e, 50)
    })
  })

  window.requestAnimationFrame(() => {
    saleBg.style.transform = transform(saleBg, e, 150)
  })
}

const handleMouseLeave = (e) => {
  const sectionSaleImg = document.querySelectorAll(".sale-img")
  const saleBg = document.getElementById("sale__bg")

  sectionSaleImg.forEach((img) => {

    window.requestAnimationFrame(() => {
      img.style.transform = transform(img, e, 50, true)
    })
  })

  window.requestAnimationFrame(() => {
    saleBg.style.transform = transform(saleBg, e, 150, true)
  })
}

const init = () => {
  const sectionSaleElement = document.getElementById("sale")

  sectionSaleElement.addEventListener("mousemove", handleMouseMove)
  sectionSaleElement.addEventListener("mouseleave", handleMouseLeave)
}

(init)()
