const executor = (resolve, reject) => {

    const resultOfWork = Date.now() % 2 === 0

    if (resultOfWork) {
        resolve("We got true which means success")
    }
    else {
        reject('We got false which means failure')
    }
}

const promiseToReportTime = new Promise(executor)

promiseToRerportTime
    .then((resolveResult) => { console.log(resolveResult) })
    .catch((rejectResult) => { console.log(rejectResult) })


const asyncGetTime = async () => {
    const promiseToGetTime = new Promise(executor)
    try {
        const result = await promiseToGetTime
        console.log(result)
    } catch (err) {
        console.log(err)
    }

}

asyncGetTime()


