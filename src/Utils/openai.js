import OpenAI from 'openai';
import { OPENAI_KEY } from './Constants';
import { GoogleGenAI } from '@google/genai';
import { GEMINI_KEY } from './Constants';
export const client = new OpenAI({
    apiKey: OPENAI_KEY, dangerouslyAllowBrowser: true
  });
export const AI = new GoogleGenAI({ apiKey: GEMINI_KEY });


