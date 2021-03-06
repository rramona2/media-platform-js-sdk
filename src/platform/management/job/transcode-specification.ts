import { Audio, IAudio } from './audio';
import { Destination, IDestination } from './destination';
import { IQualityRange, QualityRange } from './quality-range';
import { IVideo, Video } from './video';

export interface ITranscodeSpecification {
  destination: IDestination;
  quality?: string | null;
  qualityRange?: IQualityRange | null;
  video?: IVideo | null;
  audio?: IAudio | null;
}

export class TranscodeSpecification implements ITranscodeSpecification {
  public destination: Destination;
  public quality: string | null = null;
  public qualityRange: QualityRange | null;
  public video: Video | null = null;
  public audio: Audio | null = null;

  constructor(data: ITranscodeSpecification) {
    this.destination = new Destination(data.destination);
    this.quality = data.quality ? data.quality : null;
    this.qualityRange = new QualityRange(
      data.qualityRange
        ? data.qualityRange
        : {
            maximum: null,
            minimum: null,
          },
    );

    if (data.video) {
      this.video = new Video(data.video);
    }

    if (data.audio) {
      this.audio = new Audio(data.audio);
    }
  }
}
