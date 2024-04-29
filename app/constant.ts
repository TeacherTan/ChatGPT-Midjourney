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

export const TEST_JSON = {
  prompt:
    "(masterpiece:1.3), best quality, higher, extremely detailed CG, perfect lighting, 8k wallpaper , unreal engine, perfect hands), ultra-detailed, photorealistic, realistic, White_skin, 1girl,16 years old , smile, long and brown hair with highlights, blue eyes, full body, Open mouth, Petite, CurvyCurves, Bust: XXL, Athletic hips, energetic, (Scatterbrained:1.2), (Optimistic:1.3), (Exceptionally unlucky:1.1), outdoor, beach, waves and sand, Sunny day with bright light, blue sky and white fluffy clouds, looking at the camera with a surprised expression.",
  negative_prompt:
    "(nsfw:1.3),(nude:1.3),text,b&w,illustration,painting,cartoon,3d,bad art,poorly drawn,close up,blurry,disfigured,deformed,extra limbs,((3d, cartoon, anime, sketches)),(worst quality:2),(low quality:2),(normal quality:2),lowres,normal quality,((monochrome)),((grayscale)),bad anatomy,out of view,cut off,ugly,deformed,mutated,EasyNegative,paintings,sketches,(worst quality:2),(low quality:2),(normal quality:2),lowres,normal quality,((monochrome)),((grayscale)),skin spots,acnes,skin blemishes,age spot,glans,extra fingers,fewer fingers,(ugly eyes, deformed iris, deformed pupils, fused lips and teeth:1.2),(un-detailed skin, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.2),text,close up,cropped,out of frame,worst quality,low quality,jpeg artifacts,ugly,duplicate,morbid,mutilated,extra fingers,mutated hands,poorly drawn hands,poorly drawn face,mutation,deformed,blurry,dehydrated,bad anatomy,bad proportions,extra limbs,cloned face,disfigured,gross proportions,malformed limbs,missing arms,missing legs,extra arms,extra legs,fused fingers,too many fingers,long neck",
  batch_size: 4,
  steps: 20,
  cfg_scale: 7,
  width: 512,
  height: 768,
  alwayson_scripts: {
    controlnet: {
      args: [],
    },
    ADetailer: {
      args: [
        true,
        false,
        {
          ad_model: "face_yolov8n.pt",
          ad_model_classes: "",
          ad_prompt: "",
          ad_negative_prompt: "",
          ad_confidence: 0.3,
          ad_mask_k_largest: 0,
          ad_mask_min_ratio: 0.0,
          ad_mask_max_ratio: 1.0,
          ad_dilate_erode: 32,
          ad_x_offset: 0,
          ad_y_offset: 0,
          ad_mask_merge_invert: "None",
          ad_mask_blur: 4,
          ad_denoising_strength: 0.4,
          ad_inpaint_only_masked: true,
          ad_inpaint_only_masked_padding: 0,
          ad_use_inpaint_width_height: false,
          ad_inpaint_width: 512,
          ad_inpaint_height: 512,
          ad_use_steps: true,
          ad_steps: 28,
          ad_use_cfg_scale: false,
          ad_cfg_scale: 7.0,
          ad_use_checkpoint: false,
          ad_checkpoint: "Use same checkpoint",
          ad_use_vae: false,
          ad_vae: "Use same VAE",
          ad_use_sampler: false,
          ad_sampler: "DPM++ 2M Karras",
          ad_use_noise_multiplier: false,
          ad_noise_multiplier: 1.0,
          ad_use_clip_skip: false,
          ad_clip_skip: 1,
          ad_restore_face: false,
          ad_controlnet_model: "None",
          ad_controlnet_module: "None",
          ad_controlnet_weight: 1.0,
          ad_controlnet_guidance_start: 0.0,
          ad_controlnet_guidance_end: 1.0,
        },
      ],
    },
    "Dynamic Prompts v2.17.1": {
      args: [],
    },
  },
};
