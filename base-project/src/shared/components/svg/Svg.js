import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Svg.css';

// See: https://github.com/Karify/external-svg-sprite-loader

const Svg = (props) => {
    const { svg, className, ...otherProps } = props;

    return (
        <i className={ classnames(styles.svg, className) } { ...otherProps }>
            <svg viewBox={ svg.viewBox }>
                <use xlinkHref={ svg.symbol } />
            </svg>
        </i>
    );
};

Svg.propTypes = {
    svg: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default Svg;
