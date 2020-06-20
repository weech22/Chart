import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { FIGMA_UI } from "../constants";
import { getTemplatesRequest } from "../modules/templates";

const Root = styled.div`
  background: purple;
`;

const MainView = ({ currentUI, getTemplates }) => {
  console.log("ui", currentUI);
  switch (currentUI) {
    case FIGMA_UI.CREATE_CHART:
      return <Root>Create Chart</Root>;
    case FIGMA_UI.UPDATE_CHART:
      return <Root>Update Chart</Root>;
    case FIGMA_UI.EDIT_CHART:
      return <Root>Edit Chart</Root>;
    case FIGMA_UI.TEMPLATES:
      return (
        <Root>
          <button onClick={getTemplates}>get templ</button>
        </Root>
      );
    case FIGMA_UI.MY_ACCOUNT:
      return <Root>My account</Root>;
    default:
      return <div>3232323</div>;
  }
};

const mapStateToProps = (state) => ({
  currentUI: state.router.currentUI,
});

export default connect(mapStateToProps, { getTemplates: getTemplatesRequest })(
  MainView
);
