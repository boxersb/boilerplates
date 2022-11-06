declare global {
    type valueof<T> = T[keyof T]
}
