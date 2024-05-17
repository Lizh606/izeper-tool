/**
 * @description: 求和函数
 * @param {*}
 * @return {*}
 */
function sum(a: number, b: number) {
    return a + b;
}

/**
 * @description: 延迟函数
 * @param {timeout} 延迟时间
 * @return {*}
 */
function sleep(timeout:number) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    })
}
export { sleep, sum };

