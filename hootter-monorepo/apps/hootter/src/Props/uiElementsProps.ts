//
//  uiElementsProps.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 19.02.2025
//

/**
 * Interface for base button component props
 * @interface IBaseButtonProps
 *
 * @property {string | number} label - Text or number to be displayed on the button (optional)
 * @property {React.ReactNode} icon - Icon element to be rendered within the button (optional)
 * @property {string} color - Custom color for the button (optional)
 * @property {() => void} onClick - Click event handler function (optional)
 * @property {boolean} left - Aligns content to the left if true (optional)
 * @property {boolean} center - Centers content if true (optional)
 * @property {boolean} right - Aligns content to the right if true (optional)
 * @property {React.ReactNode} leftSection - Custom content to be rendered on the left side (optional)
 * @property {React.ReactNode} rightSection - Custom content to be rendered on the right side (optional)
 */
export default interface IBaseButtonProps {
  label?: string | number;
  icon?: React.ReactNode;
  color?: string;
  onClick?: () => void;
  left?: boolean;
  center?: boolean;
  right?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}
