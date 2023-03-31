import React from "react";

import Typography from "@mui/material/Typography";

const MuiTypography = () => {
  return (
    <>
      <Typography variant="h1" className="my-text-danger">
        Headline 1
      </Typography>
      <Typography variant="h2">Headline 2</Typography>
      <Typography variant="h3">Headline 3</Typography>
      <Typography variant="h4">Headline 4</Typography>
      <Typography variant="h5">Headline 5</Typography>
      <Typography variant="h6">Headline 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Body 1
      </Typography>
      <Typography variant="body2" component="address">
        Body 2
      </Typography>
      <Typography variant="button">button</Typography>
      <Typography variant="caption" component="center">
        Caption
      </Typography>
      <Typography variant="overline">Overline</Typography>
      {/* <MyTypography component="button"> My typography </MyTypography> */}
    </>
  );
};

export default MuiTypography;

// Control the rendering of the element type
// const MyTypography = (props) => {
//   const { component, children } = props;
//   const Component = component;
//   console.log({ component });

//   return <Component>{children}</Component>;
// };
