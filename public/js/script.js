const actions = document.querySelector('.actions');
const ans = document.querySelector('.ans');
console.log(actions);
console.log(ans);
let expression = '';
function calculateSquare() {
    if (expression === '') {
        return 0;}
    const value = parseFloat(expression);
    return value * value;
}
actions.addEventListener('click', (e) => {
    console.log(e.target);
    const value = e.target.dataset['value'];
    if (value !== undefined) {
        if (value === 'ce') {
            expression = '';
            ans.value = 0;
        } else if (value === 'x^2') {
            expression = calculateSquare().toString();
        } else if (value === 'radic') {
            expression = Math.sqrt(parseFloat(expression)).toString();
        } else if (value === 'log') {
            expression = Math.log(parseFloat(expression)).toString();
        } else if (value === 'sin') {
            expression = Math.sin(parseFloat(expression)).toString();
        } else if (value === 'cos') {
            expression = Math.cos(parseFloat(expression)).toString();
        } else if (value === 'tan') {
            expression = Math.tan(parseFloat(expression)).toString();
        } else if (value === '=') {
            expression = eval(expression).toString();
        } else {expression += value;}
        if (expression === undefined) {
            expression = '';
            ans.value = 0;
        } else {ans.value = expression;}
    }
});