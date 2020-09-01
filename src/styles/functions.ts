// Mixins
export const colorText = '#818181';

// Functions
export function flexCenter(flexDirection: string) {
  return `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${flexDirection};
  `;
}