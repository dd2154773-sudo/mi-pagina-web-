/**
 * Ambient gothic synthesizer using standard browser Web Audio API
 */
class GothicAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playHarmonicChime(freq = 440) {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, now);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    } catch {
      // Audio context might be restricted before user interaction
    }
  }

  public toggleAmbientDrone(): boolean {
    try {
      this.initContext();
      if (!this.ctx) return false;

      if (this.isPlaying) {
        this.stopDrone();
        return false;
      } else {
        this.startDrone();
        return true;
      }
    } catch {
      return false;
    }
  }

  private startDrone() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.04, now + 2);
    this.masterGain.connect(this.ctx.destination);

    // Chords: D minor darkwave drone (D2, A2, D3, F3)
    const notes = [73.42, 110.0, 146.83, 174.61];
    this.oscillators = notes.map((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const filter = this.ctx!.createBiquadFilter();
      
      osc.type = idx % 2 === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, now);
      filter.Q.setValueAtTime(4, now);

      osc.connect(filter);
      filter.connect(this.masterGain!);
      osc.start(now);
      return osc;
    });

    this.isPlaying = true;
  }

  private stopDrone() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1);
    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {}
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 1100);
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const soundEngine = new GothicAudioEngine();
