import { ModelOfMetricsTheme } from './metrics';
import { ModelOfFontSizeTheme } from './fontSize';
import { ModelOfColorTheme } from './colors';
import { ModelOfFontFamilyTheme } from './fontFamily';

export type ModelOfTheme = {
  metrics: ModelOfMetricsTheme,
  fontSize: ModelOfFontSizeTheme,
  colors: ModelOfColorTheme,
  fontFamily: ModelOfFontFamilyTheme,
}
