export type VoiceResultCallback = (text: string) => void;

export class VoiceService {
  private recognition: SpeechRecognition | null = null;

  constructor() {
    const SpeechRecognitionImpl = (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (SpeechRecognitionImpl) {
      this.recognition = new SpeechRecognitionImpl();
      this.recognition.continuous = true;
    }
  }

  start(callback: VoiceResultCallback) {
    if (!this.recognition) {
      console.warn('Speech recognition not supported');
      return;
    }
    this.recognition.onresult = (e: SpeechRecognitionEvent) => {
      const result = e.results[e.results.length - 1];
      if (result.isFinal) {
        callback(result[0].transcript);
      }
    };
    this.recognition.start();
  }

  stop() {
    this.recognition?.stop();
  }
}
