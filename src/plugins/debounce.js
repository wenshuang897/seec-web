let debounce = (fn,wait)=>{
    let timer 
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn()
        },wait)
    }
}

export default debounce
