// Feature flags configuration
export const FEATURES = {
  PROGRAM_DETAILS: false, // Set to true when ready to publish detail pages
} as const;

export type FeatureFlag = keyof typeof FEATURES;

export const isFeatureEnabled = (feature: FeatureFlag): boolean => {
  return FEATURES[feature];
};