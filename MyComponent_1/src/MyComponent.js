import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static  defaultProps = {
        job: '개발자'
    }

    static propTypes = {
        name: PropTypes.string,
        job: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }
    render() {
        const { name, job, favoriteNumber } = this.props;
        return (
            <div>
                {/*안녕하세요 제 이름은 {this.props.name} 입니다.*/}
                안녕하세요 제 이름은 {name} 입니다.
                제 직업은 {job} 입니다.
                좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
}

export default MyComponent;
