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

/**
 * @description: 获取报错信息
 * @param {key} 报错字段
 * @return {*}
 */
function getErrorMsg(key: string)  {
  return `${key}不能为空`
}
export { getErrorMsg, sleep, sum };

