// get single document element
const $ = document.querySelector.bind(document)

// get all document elements
const $$ = document.querySelectorAll.bind(document)

// get all tabs
const tabs = $$('.tab-item')
// get all panes
const panes = $$('.tab-pane')
//get tab active
const activeTab = $('.tab-item.active')
// get line
const line = $('.tabs .line')
// set line style
line.style.left = activeTab.offsetLeft + 'px'
line.style.width = activeTab.offsetWidth + 'px'

// function to switch between item + pane
tabs.forEach((tab, index) => {
  // get selected pane
  const pane = panes[index]

  // onlick() function
  tab.onclick = function () {
    // remove tab-item:active & tab-pane:active
    $('.tab-item.active').classList.remove('active')
    $('.tab-pane.active').classList.remove('active')

    // set line style
    line.style.left = this.offsetLeft + 'px'
    line.style.width = this.offsetWidth + 'px'

    // add selected tab-item:active & tab-pane:active
    this.classList.add('active')
    pane.classList.add('active')
  }
})