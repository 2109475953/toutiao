let formatDate = (val,now=new Date())=>{
    let time = now - new Date(val)
    return parseInt(time/1000/60/60)+'小时前'
}

export default {
    formatDate
}