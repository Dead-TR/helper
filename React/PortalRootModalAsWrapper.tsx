import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Components
import { Modal } from 'components/commonBlocks/v3';
import { ModalWrapper } from 'components/commonBlocks/v3';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { MODAL_SIZES } from 'style/v3/constants/sizes';
import styled from 'styled-components';

const CONTAINER_ID = 'modal-global-container';

const Wrapper = styled.div`
    width: ${({width}) => width || MODAL_SIZES.S};
`;

export const PortalModal = ({ children, footer, target, title, controlRef, width }) => {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    useEffect(() => {
        controlRef = controlRef || {};
        controlRef.current = {
            close,
            open: () => setIsOpen(true)
        };
    }, []);
    const domNode = useMemo(() => {
        let node = document.getElementById(CONTAINER_ID);
        if (!node) {
            node = document.createElement('div');
            node.id = CONTAINER_ID;
            document.body.append(node);
        }
        return node;
    }, [isOpen]);
    return (
      <>
        {isOpen && ReactDOM.createPortal(
            (<ModalWrapper onBackgroundClick={close} >
                <Wrapper width={width}>
                    <Modal
                        onBackButtonClick={close}
                        title={title}
                        content={children}
                        footer={footer}
                    >
                    </Modal>
                </Wrapper>
            </ModalWrapper>),
            domNode
        )}
        {React.Children.map(target, child => (
            React.cloneElement(child, {
                onClick: () => setIsOpen(true)
            })
        ))}
      </>
    );
};

PortalModal.propTypes = {
    children: PropTypes.array,
    footer: PropTypes.node,
    target: PropTypes.node,
    width: PropTypes.string,
    title: PropTypes.string,
    controlRef: PropTypes.object
};
