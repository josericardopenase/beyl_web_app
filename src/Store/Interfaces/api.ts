

export interface ApiProps{
    url : string,
    method ?: string,
    data ?: any,
    onError : string,
    onBegin : string,
    onSuccess: string,
    payload : any,
    notifyOnSuccess : Notification,
    notifyOnError : Notification
}