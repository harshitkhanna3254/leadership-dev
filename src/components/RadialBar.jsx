import { useTheme } from "@emotion/react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";

import React from "react";
import { tokens } from "../theme";

const RadialBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    {
      id: "You",
      data: [
        {
          x: "Vegetables",
          y: 75,
        },
        {
          x: "Fruits",
          y: 246,
        },
        {
          x: "Meat",
          y: 184,
        },
        {
          x: "Fish",
          y: 216,
        },
      ],
    },
    {
      id: "For",
      data: [
        {
          x: "Vegetables",
          y: 207,
        },
        {
          x: "Fruits",
          y: 20,
        },
        {
          x: "Meat",
          y: 6,
        },
        {
          x: "Fish",
          y: 249,
        },
      ],
    },
    {
      id: "Tools",
      data: [
        {
          x: "Vegetables",
          y: 161,
        },
        {
          x: "Fruits",
          y: 272,
        },
        {
          x: "Meat",
          y: 6,
        },
        {
          x: "Fish",
          y: 131,
        },
      ],
    },
    {
      id: "Leadership",
      data: [
        {
          x: "Vegetables",
          y: 152,
        },
        {
          x: "Fruits",
          y: 291,
        },
        {
          x: "Meat",
          y: 82,
        },
        {
          x: "Fish",
          y: 271,
        },
      ],
    },
  ];

  return (
    <ResponsiveRadialBar
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      valueFormat=" >-.2f"
      padding={0.4}
      cornerRadius={2}
      margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
      enableCircularGrid={false}
      radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
      circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
      legends={[]}
    />
  );
};

export default RadialBar;
