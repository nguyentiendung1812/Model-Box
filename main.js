let btnModel= document.querySelector('.open_btn')
let model=document.querySelector('.model')
let iconClose=document.querySelector('.model__header i')
let btnClose=document.querySelector('.model__footer .model__footer-btn')

function toggleModel(){
    model.classList.toggle('hide')
}

btnModel.addEventListener('click', toggleModel)
iconClose.addEventListener('click',toggleModel)
btnClose.addEventListener('click',toggleModel)
model.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        toggleModel()
    }
})

