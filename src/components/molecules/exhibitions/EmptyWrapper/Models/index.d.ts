import { ModelOfTheme } from "@soccerapp/theme"

export type ModelOfEmptyWrapper = {
  theme: ModelOfTheme,
  IconSVG: React.FC<React.SVGProps<SVGSVGElement>>,
  title: string,
  subTitle: string
}
