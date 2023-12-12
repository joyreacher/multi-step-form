import React, { useEffect } from "react"
import gsap from 'gsap'
import formContainer from '../styles/formContainer.css'
import menu from '../styles/menu.css'
import form from '../styles/form.css'
import menuShapes from '../styles/menuShapes.css'

import Menu from "./menu"
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import Step4 from "./step4"
function Form() {
  let tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: .5,
      opacity: 0,
      display: 'none'
    }
  })
  const termTl = gsap.timeline({defaults: {
    paused:true,
    reversed:true,
  }})
  const planSelect = (e) => {
    let plans = document.querySelectorAll('.step2-tier-option')
    if(e){
      plans.forEach((el, i) => {
        el.classList.remove('step2-tier-option__active')
      })
      e.currentTarget.classList.add('step2-tier-option__active')
    }else{
      plans[0].classList.add('step2-tier-option__active')
    }
  }
  function setActive(index = null, direction) {
    let sel = document.querySelectorAll(".menu-item-style")
    let num = document.querySelectorAll(".menu-item-style__number")
    sel.forEach((el) => el.classList.remove('menu-item-style__active'))
    num.forEach((el) => el.classList.remove('menu-item-style__number_active'))
    if (direction == 'prev') {
      if (tl.currentLabel() == 'step1' || tl.currentLabel() == 'step1-direct') {
        sel[0].setAttribute("class", "menu-item-style menu-item-style__active")
        num[0].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step2' || tl.currentLabel() == 'step2-direct') {
        sel[0].setAttribute("class", "menu-item-style menu-item-style__active")
        num[0].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step3' || tl.currentLabel() == 'step3-direct') {
        sel[1].setAttribute("class", "menu-item-style menu-item-style__active")
        num[1].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step4' || tl.currentLabel() == 'step4-direct') {
        sel[2].setAttribute("class", "menu-item-style menu-item-style__active")
        num[2].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }

    }
    if (direction == 'next') {
      if (index == 'step-1') {
        sel[0].setAttribute("class", "menu-item-style menu-item-style__active")
        num[0].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step1' || tl.currentLabel() == 'step1-direct') {
        sel[1].setAttribute("class", "menu-item-style menu-item-style__active")
        num[1].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step2' || tl.currentLabel() == 'step2-direct') {
        sel[2].setAttribute("class", "menu-item-style menu-item-style__active")
        num[2].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step3' || tl.currentLabel() == 'step3-direct') {
        sel[3].setAttribute("class", "menu-item-style menu-item-style__active")
        num[3].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
      if (tl.currentLabel() == 'step4' || tl.currentLabel() == 'step4-direct') {
        sel[3].setAttribute("class", "menu-item-style menu-item-style__active")
        num[3].setAttribute("class", "menu-item-style__number menu-item-style__number_active")
        return
      }
    }
  }
  const termToggle = (e) => {
    if (termTl.reversed() && !e.currentTarget.checked) {
      term = 'monthly'
      termTl.play()
      gsap.to('.step2-tier-option__yearly', {  opacity: 0, visibility: 'hidden', display: 'none' })
      gsap.to('.step2-tier-option__monthly', { opacity: 1, visibility: 'visible', display: 'block' })
      
      gsap.to('.step3-add-on__yearly', { opacity: 0, visibility: 'hidden', display: 'none' })
      gsap.to('.step3-add-on__monthly', {  opacity: 1, visibility: 'visible', display: 'block' })
      
      
      return gsap.fromTo('.step2-tier-option__free', { y:'0',opacity: 1, visibility: 'visible', display: 'block' }, { y:'-20px',opacity: 0, visibility: 'hidden', display: 'none' })
    }
    if (!termTl.reversed() && e.currentTarget.checked) {
      term = 'yearly'
      termTl.reverse()
      gsap.to('.step2-tier-option__yearly', {  opacity: 1, visibility: 'visible', display: 'block' })
      gsap.to('.step2-tier-option__monthly', { opacity: 0, visibility: 'hidden', display: 'none' }, '<')
      
      gsap.to('.step3-add-on__monthly', { opacity: 0, visibility: 'hidden', display: 'none' })
      gsap.to('.step3-add-on__yearly', {  opacity: 1, visibility: 'visible', display: 'block' })
      
      gsap.to('.step2-tier-option__free',  { y:'0',opacity: 1, visibility: 'visible', display: 'block' })
    }
    
    
  }

  useEffect(() => {
    tl.add("step1")
      .add("step1-direct")
      .to(".step1", { opacity: 0 }, '.14')
      .to(".step1-header", { y: '-10px', opacity: 0 }, '<')
      .to(".step1-sub", { y: '10px', opacity: 0 }, '<')
      .to([".step-1-name, .step-1-email, .step-1-phone"], { y: '-10px', opacity: 0, stagger:.03 }, '<')
      .fromTo('.form-submit-reverse', {opacity:0, display: 'none', ease: 'sine'}, {opacity:1, display: 'block', ease: 'sine'},'-.025')


      .add("step2")
      .from(".step2", { y: '-10px', opacity: 0, onComplete:(e) => {
        planSelect(e)
      }})
      .add("step2-direct")
      .addPause()
      .to(".step2", { opacity: 0 })


      .add("step3")
      .from(".step3", { y: '-10px', opacity: 0 })
      .add("step3-direct")
      .addPause()
      .to(".step3", { opacity: 0 })

      .add("step4")
      .from(".step4", { y: '-10px', opacity: 0 })
      .add("step4-direct")
      .addPause()
    let next_btn = document.querySelector(".form-submit")
    let previous_btn = document.querySelector(".form-submit-reverse")
    previous_btn.addEventListener("click", () => {
      tl.reverse()
      setActive('', 'prev')
    })
    next_btn.addEventListener("click", (el) => {
      tl.play()
      setActive('', 'next')
    })
    setActive('step-1', 'next')
  }, [])
  return (
    <section className="form-container-outer">
      <Menu tl={tl} />
      <div className="form-outer">
        <div className="form-inner">
          <Step1 />
          <Step2 tl={tl} planSelect={planSelect} termToggle={termToggle}/>
          <Step3 />
          <Step4 />
          <div className="form-btn-container">
            <a className="form-submit-reverse">Go Back</a>
            <button className="form-submit">Next Step</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form