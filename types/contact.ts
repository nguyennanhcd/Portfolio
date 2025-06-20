export interface FeedbackState {
  status: 'idle' | 'success' | 'error'
  message: string
  timeStamp: number
}