export const colors = [{ value: 'green', cssClass: 'greenChoice' }, { value: 'blue', cssClass: 'blueChoice' }, { value: 'yellow', cssClass: 'yellowChoice' }, { value: 'red', cssClass: 'redChoice' }]

export const getCssClassFromValue = value => colors.find(colorItem => colorItem.value === value).cssClass;

