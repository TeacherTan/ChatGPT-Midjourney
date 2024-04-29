export const OWNER = "TeacherTan";
export const REPO = "ChatGPT-Midjourney";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";
export const DEFAULT_API_HOST = "https://chatgpt1.nextweb.fun/api/proxy";
export const DEFAULT_SD_API_HOST = "http://192.168.1.206:7860";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const StableDiffusionPath = {
  textToImgPath: "sdapi/v1/txt2img",
  imgToImgPath: "sdapi/v1/img2img",
  optionsPath: "sdapi/v1/options",
  rembgPath: "rembg",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = `
You are ChatGPT, a large language model trained by OpenAI.
Knowledge cutoff: 2021-09
Current model: {{model}}
Current time: {{time}}`;

export const DEFAULT_SD_STYLE_PROMPT = `(masterpiece:1.3),best quality,extremely detailed CG,perfect lighting,8k wallpaper,unreal engine,perfect hands,ultra-detailed,photorealistic,realistics`;

export const DEFAULT_SD_CHARACTER_PROMPT = `1girl,female,smile,Caucasian,teacher,25 years old,fair_skin,long and brown hair,blue eyes,Medium build,Medium chest,Medium hips,school,full body,portrait,front view,close up`;

export const DEFAULT_SD_NEGATIVE_PROMPT = `(nsfw:1.3),(nude:1.3),text,b&w,illustration,painting,cartoon,3d,bad art,poorly drawn,close up,blurry,disfigured,deformed,extra limbs,((3d, cartoon, anime, sketches)),(worst quality:2),(low quality:2),(normal quality:2),lowres,normal quality,((monochrome)),((grayscale)),bad anatomy,out of view,cut off,ugly,deformed,mutated,EasyNegative,paintings,sketches,(worst quality:2),(low quality:2),(normal quality:2),lowres,normal quality,((monochrome)),((grayscale)),skin spots,acnes,skin blemishes,age spot,glans,extra fingers,fewer fingers,(ugly eyes, deformed iris, deformed pupils, fused lips and teeth:1.2),(un-detailed skin, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.2),text,close up,cropped,out of frame,worst quality,low quality,jpeg artifacts,ugly,duplicate,morbid,mutilated,extra fingers,mutated hands,poorly drawn hands,poorly drawn face,mutation,deformed,blurry,dehydrated,bad anatomy,bad proportions,extra limbs,cloned face,disfigured,gross proportions,malformed limbs,missing arms,missing legs,extra arms,extra legs,fused fingers,too many fingers,long neck`;

export const DEFAULT_MODELS = [
  {
    name: "stable-diffusion",
    available: true,
  },
  {
    name: "gpt-4",
    available: true,
  },
  {
    name: "gpt-4-32k",
    available: true,
  },
  {
    name: "gpt-4-1106-preview",
    available: true,
  },
  {
    name: "gpt-4-vision-preview",
    available: true,
  },
  {
    name: "gpt-3.5-turbo",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-16k",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-1106",
    available: true,
  },
  {
    name: "midjourney",
    available: true,
  },
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;
