import { Resolution } from './resolution';
import { VideoCodec } from './video-codec';

export interface IVideoSpecification {
  frameRate: string | null;
  keyFrame: number | null;
  codec: VideoCodec | null;
  resolution: Resolution | null;
}

export class VideoSpecification implements IVideoSpecification {
  public frameRate: string | null = null;
  public keyFrame: number | null = null;
  public codec: VideoCodec | null = null;
  public resolution: Resolution | null = null;

  constructor(data: IVideoSpecification) {
    this.frameRate = data.frameRate;
    this.keyFrame = data.keyFrame;
    this.codec = data.codec ? new VideoCodec(data.codec) : null;
    this.resolution = new Resolution(data.resolution);
  }
}
