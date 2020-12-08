import checkPropTypes from 'check-prop-types'

export const findTestByAttribute = (wrapper , val)=>{
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component,props)=>{
    const propError = checkPropTypes(
        component.propTypes,
        props,
        'props',
        component.name
    )
    expect(propError).toBeUndefined();

}