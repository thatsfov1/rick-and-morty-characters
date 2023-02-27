const useNumber = (url:string) => {
    return Number(url.split('/').at(-1))
}

export default useNumber
