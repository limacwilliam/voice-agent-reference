export interface SpeechToText { transcribe(audio: Uint8Array): Promise<{text:string; confidence:number}> }
export interface TextToSpeech { synthesize(text:string): Promise<Uint8Array> }
export interface LanguageModel { respond(input:{text:string; tools:ToolDefinition[]}): Promise<{text:string; toolCall?:{name:string; arguments:Record<string,unknown>}}> }
export interface ToolDefinition { name:string; description:string; execute(input:Record<string,unknown>):Promise<unknown> }
