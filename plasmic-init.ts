import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "bVWVAkTRab7yfXsaybXonb";
export const projectApiToken = "HsJfaj7CH4GM1g0yCMUJsQsUYp1tDJoyVCYZS6Ee35YDRztzV0ByvbXzBm0HEzppjw842gFM2mNWQkGYKLcsg";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
