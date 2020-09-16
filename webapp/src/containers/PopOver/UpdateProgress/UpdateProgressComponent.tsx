import React from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';
import { closeUpdateApp } from '../reducer';
import { UPDATE_MODAL_CLOSE_TIMEOUT } from '../../../constants';
import ErrorComponent from './ErrorComponent';
import ShowUpdateAvailableComponent from './ShowUpdateAvailable';
import PostUpdateComponent from './PostUpdateComponent';
import DownloadProgressComponent from './DownloadProgressComponent';

interface UpdateModalProps {
  isUpdateError: string;
  postUpdateFlag: boolean;
  showUpdateAvailable: boolean;
  isUpdateStarted: boolean;
  closeUpdateApp: () => void;
}

const UpdateModal: React.FunctionComponent<UpdateModalProps> = (
  props: UpdateModalProps
) => {
  const {
    showUpdateAvailable,
    postUpdateFlag,
    isUpdateStarted,
    isUpdateError,
    closeUpdateApp,
  } = props;

  const closeModal = (fn) => {
    closeUpdateApp();
    setTimeout(fn, UPDATE_MODAL_CLOSE_TIMEOUT);
  };

  const loadHtml = () => {
    if (isUpdateError) return <ErrorComponent />;

    if (showUpdateAvailable)
      return <ShowUpdateAvailableComponent closeModal={closeModal} />;

    if (postUpdateFlag) return <PostUpdateComponent closeModal={closeModal} />;

    if (isUpdateStarted) return <DownloadProgressComponent />;

    return <div />;
  };

  return <>{loadHtml()}</>;
};

const mapStateToProps = (state) => {
  const {
    isUpdateError,
    postUpdateFlag,
    showUpdateAvailable,
    isUpdateStarted,
  } = state.popover;
  return {
    isUpdateError,
    postUpdateFlag,
    showUpdateAvailable,
    isUpdateStarted,
  };
};

const mapDispatchToProps = {
  closeUpdateApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateModal);
