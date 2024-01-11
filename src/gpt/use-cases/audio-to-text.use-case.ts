import * as fs from 'fs';

import OpenAI from 'openai';

interface Options {
  prompt?: string;
  audioFile: Express.Multer.File;
}


export const audioToTextUseCase = async( openai:OpenAI, options: Options ) => {
  
  const { prompt, audioFile} = options;

<<<<<<< HEAD
  console.log({ prompt });
=======
  // console.log({ prompt, audioFile });
>>>>>>> 5585c804888faa185104d823f6775d8bf0bd38c3

  const response = await openai.audio.transcriptions.create({
    model: 'whisper-1',
    file: fs.createReadStream( audioFile.path ),
    prompt: prompt, // mismo idioma del audio
    language: 'es',
    // response_format: 'vtt', // 'srt',
    response_format: 'verbose_json',
  })


  return response;

}


