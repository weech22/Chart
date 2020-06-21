import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getTemplateList, fetchTemplatesRequest } from "../modules/templates";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background: yellow;
`;

const TemplatesDumb = ({ templates, fetchTemplates }) => {
  return (
    <Root>
      Templates
      <button onClick={fetchTemplates}>fetch</button>
    </Root>
  );
};

const mapStateToProps = (state) => ({
  templates: getTemplateList(state),
});

const Templates = connect(mapStateToProps, {
  fetchTemplates: fetchTemplatesRequest,
})(TemplatesDumb);

export default Templates;
