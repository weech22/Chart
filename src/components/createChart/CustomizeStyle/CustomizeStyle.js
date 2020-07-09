import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as R from "ramda";
import { connect } from "react-redux";

import TabMenu from "./TabMenu";
import { Title, Dropdown, Footer } from "@components/common";
import { tabs } from "@app/constants";
import { isAdobe } from "@app/utils";
import {
  getCurrentChart,
  stopCustomizeStyle,
  getIsColorPickerShowing,
} from "@modules/createChart";
import { getTemplateList } from "@modules/templates";
import { ColorPickerModal } from "@components/common/ColorList";

const Root = styled.div`
  background: ${({ theme: { white } }) => white};
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
`;

const StyledDropdown = styled(Dropdown)`
  margin: 24px 0 16px 16px;
`;

const StyledTitle = styled(Title)`
  font-size: 20px;
  padding: ${isAdobe ? "6px 7px 0 16px" : "16px 16px 0 16px"};
`;

const CustomizeStyleDumb = ({
  currentChart,
  stopCustomizeStyle,
  templates,
  isColorPickerShowing,
}) => {
  const [currentTemplate, chooseTemplate] = useState(undefined);

  useEffect(() => {
    chooseTemplate(templates[0]);
  }, [templates]);

  const footerControls = {
    mainButton: {
      onClick: () => {},
      caption: "Use this style",
    },
  };

  return (
    <Root>
      {isColorPickerShowing && <ColorPickerModal />}
      <StyledTitle onClose={stopCustomizeStyle}>
        Style: {tabs[currentChart].title}
      </StyledTitle>
      <StyledDropdown
        label="Style template"
        options={[...templates, { label: "Without template", value: 0 }]}
        input={{
          onChange: chooseTemplate,
        }}
      />
      {currentTemplate && currentTemplate.value === 0 && <TabMenu />}
      <Footer controls={footerControls} />
    </Root>
  );
};

const CustomizeStyle = connect(
  R.applySpec({
    currentChart: getCurrentChart,
    templates: getTemplateList,
    isColorPickerShowing: getIsColorPickerShowing,
  }),
  {
    stopCustomizeStyle,
  }
)(CustomizeStyleDumb);

export default CustomizeStyle;
