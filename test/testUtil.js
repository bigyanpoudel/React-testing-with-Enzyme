

export const findTestByAttribute = (wrapper , val)=>{
    return wrapper.find(`[data-test="${val}"]`);
}