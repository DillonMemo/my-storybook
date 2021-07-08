import { Normalize } from "styled-normalize";

/**
 * '스토리'가 렌더링되는 방식을 제어하고 전역 데코레이터 및 매개 변수를 추가 합니다.
 * 'preview' iframe인 Canvas탭에 로드 됩니다.
 */
export const decorators = [
    (Story) => (
        <>
            <Normalize />
            <Story />
        </>
    ),
];

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
