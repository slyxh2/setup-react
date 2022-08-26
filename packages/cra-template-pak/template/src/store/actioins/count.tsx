function addNum() {
    return { type: 'add' };
}
function minusNum() {
    return { type: 'minus' }
}
function addNumAsync() {
    return function (dispatch: any) {
        setTimeout(() => {
            dispatch({ type: 'add' });
        }, 500)
    }
}
export { addNum, minusNum, addNumAsync };