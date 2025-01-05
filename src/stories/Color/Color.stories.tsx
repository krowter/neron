import React from "react";
import { Meta, Story } from "@storybook/react";
import { colors, IColorTileProps } from "../../utils";
import styled from "styled-components";

const SectionHeader = styled.h2`
  font-size: 24px;
  text-transform: capitalize;
`;

const ColorTile = styled.div<IColorTileProps>`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
  display: inline-block;
  position: relative;

  &::before {
    content: "${(props) => `${props.shade} - ${props.color}`}";
    font-family: monospace;
    display: block;
    text-align: center;
    font-size: 12px;
    color: white;
    position: absolute;
    width: 100%;
    height: 1rem;
    background-color: #2e2e2e;
    bottom: 0;
    left: 0;
  }
`;

function ColorPaletteBase() {
  return (
    <>
      {Object.entries(colors).map(([key, value]) => (
        <section>
          <SectionHeader>{key}</SectionHeader>
          {Object.entries(value).map(([subKey, subValue]) => (
            <ColorTile
              key={`${key}-${subKey}`}
              color={subValue}
              shade={subKey}
              onClick={() => console.log(key, subKey, subValue)}
            />
          ))}
        </section>
      ))}
    </>
  );
}

export default {
  title: "Components/ColorPalette",
  component: ColorPaletteBase,
} as Meta;

const Template: Story<any> = (args) => <ColorPaletteBase {...args} />;

export const ColorPalette = Template.bind({});
