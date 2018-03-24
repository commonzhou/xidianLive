// localStorage进行用户信息的存储，获取和删除

export const setStore=(name,content)=>{
  if(!name) return null;
  if(typeof content !== 'string'){
      content = JSON.stringify(content)
  }
  window.localStorage.setItem(name,content)
}

export const getStore = name=>{
    if(!name) return null;
    return window.localStorage.getItem(name)
}

export const removeStore = name=>{
    if(!name) return null;
    window.localStorage.removeItem(name)
}

