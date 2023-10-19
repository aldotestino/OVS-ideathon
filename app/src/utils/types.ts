export type CopyResponse = {
  copy: string
}

export type ChatMessage = {
  sender: 'me' | 'bot',
  text: string
}