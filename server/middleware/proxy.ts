import { sendProxy } from "h3";

const config = useRuntimeConfig();

export default defineEventHandler(async (event: any) => {
  
    let target = event?.req?.url
    if(!/^\/api/.test(target)){
        return
    }
    target = new URL(
        event?.req?.url.replace(/^\/api/, "/v1"),
        config.proxyApiUrl
      );
      console.log('proxy', config.proxyApiUrl)
  console.log('proxy', event?.req?.url, target.toString())
  return await sendProxy(event, target.toString())
})