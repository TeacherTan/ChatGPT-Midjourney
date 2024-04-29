import { type OpenAIListModelResponse } from "@/app/client/platforms/openai";
import { getServerSideConfig } from "@/app/config/server";
import { OpenaiPath } from "@/app/constant";
import { prettyObject } from "@/app/utils/format";
import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_SD_API_HOST, TEST_JSON } from "../../../constant";
import sharp from "sharp";

export async function handle(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  if (req.method === "OPTIONS") {
    return NextResponse.json({ body: "OK" }, { status: 200 });
  }

  const subpath = params.path.join("/");

  try {
    if (subpath == "sdapi/v1/txt2img") {
      let data: any = null;
      try {
        data = await req.json();
        // console.log("[SD Route]", JSON.stringify(data));
        console.log(
          "[SD Fetch Path]",
          DEFAULT_SD_API_HOST + "/sdapi/v1/txt2img",
        );
        const res = await fetch(DEFAULT_SD_API_HOST + "/sdapi/v1/txt2img", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify(data),
        });
        if (res.status === 200) {
          console.log("Success!!!");
          const resJson = await res.json();
          // console.log("[SD Fetch Image]", JSON.stringify(resJson.images[0]));
          // const base64Image = resJson.images[0];
          // const buffer = Buffer.from(base64Image, "base64");
          // const image = sharp(buffer)
          //   .toFormat("png", { quality: 50 })
          //   .toBuffer();
          // const imageBuffer = await image;
          // if (!imageBuffer) {
          //   return NextResponse.json({
          //     code: 1,
          //     status: "FAIL",
          //     msg: "Buffer Error",
          //   });
          // } else {
          //   const base64 = imageBuffer.toString("base64");
          //   resJson.images[0] = base64;
          // }
          // return NextResponse.json({ code: 200, data: { images: base64 } });
          // console.log("[SD Fetch Response]", resJson);
          // return new Response(resJson, {
          //   status: res.status,
          //   statusText: res.statusText,
          // });
          return NextResponse.json(resJson, {
            status: res.status,
            statusText: res.statusText,
          });
        } else {
          console.log(res);
          return NextResponse.json({
            code: 1,
            status: res.status,
            msg: res.statusText,
          });
        }
      } catch (e) {
        return NextResponse.json(
          { code: 1, status: "FAIL", msg: "无效的请求数据" },
          { status: 200 },
        );
      }
    }
  } catch (e) {
    console.error("[OpenAI] ", e);
    return NextResponse.json(prettyObject(e));
  }
}

export const GET = handle;
export const POST = handle;

// export const runtime = "edge";
