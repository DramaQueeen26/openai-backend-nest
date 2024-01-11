import * as path from 'path';
import * as fs from 'fs';

import { Injectable, NotFoundException } from '@nestjs/common';

import OpenAI from 'openai';

import {
  audioToTextUseCase,
<<<<<<< HEAD
  imageGenerationUseCase,
  imageVariationUseCase,
=======
>>>>>>> 5585c804888faa185104d823f6775d8bf0bd38c3
  orthographyCheckUseCase,
  prosConsDicusserStreamUseCase,
  prosConsDicusserUseCase,
  textToAudioUseCase,
  translateUseCase,
} from './use-cases';
import {
<<<<<<< HEAD
  AudioToTextDto,
  ImageGenerationDto,
  ImageVariationDto,
=======
>>>>>>> 5585c804888faa185104d823f6775d8bf0bd38c3
  OrthographyDto,
  ProsConsDiscusserDto,
  TextToAudioDto,
  TranslateDto,
} from './dtos';
<<<<<<< HEAD

=======
>>>>>>> 5585c804888faa185104d823f6775d8bf0bd38c3

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Solo va a llamar casos de uso

  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyCheckUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }

  async prosConsDicusser({ prompt }: ProsConsDiscusserDto) {
    return await prosConsDicusserUseCase(this.openai, { prompt });
  }

  async prosConsDicusserStream({ prompt }: ProsConsDiscusserDto) {
    return await prosConsDicusserStreamUseCase(this.openai, { prompt });
  }

  async translateText({ prompt, lang }: TranslateDto) {
    return await translateUseCase(this.openai, { prompt, lang });
  }

  async textToAudio({ prompt, voice }: TextToAudioDto) {
    return await textToAudioUseCase(this.openai, { prompt, voice });
  }

  async textToAudioGetter(fileId: string) {
    const filePath = path.resolve(
      __dirname,
      '../../generated/audios/',
      `${fileId}.mp3`,
    );

    const wasFound = fs.existsSync(filePath);

    if (!wasFound) throw new NotFoundException(`File ${fileId} not found`);

    return filePath;
  }

<<<<<<< HEAD
  async audioToText(
    audioFile: Express.Multer.File,
    audioToTextDto: AudioToTextDto,
  ) {
    const { prompt } = audioToTextDto;

    return await audioToTextUseCase(this.openai, { audioFile, prompt });
  }

  async imageGeneration( imageGenerationDto: ImageGenerationDto ) {
    return await imageGenerationUseCase( this.openai, { ...imageGenerationDto } );
  }

  getGeneratedImage( fileName: string ) {

    const filePath = path.resolve('./','./generated/images/', fileName);
    const exists = fs.existsSync( filePath );
    

    if ( !exists ) {
      throw new NotFoundException('File not found');
    }

    return filePath;
  }


  async geneateImageVariation( { baseImage }: ImageVariationDto ) {
    return imageVariationUseCase( this.openai, { baseImage } );
=======

  async audioToText( audioFile: Express.Multer.File, prompt?: string ) {
    return await audioToTextUseCase( this.openai, { audioFile, prompt } );
>>>>>>> 5585c804888faa185104d823f6775d8bf0bd38c3
  }

}
 