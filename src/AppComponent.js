import React from 'react';
import ReactDOM from 'react-dom';

export default class extends React.Component {
	render() {
		return (
            <div>

				<div>
					<span className="tag">{Liferay.Language.get('test-label')}:</span>
					<span className="value">{Liferay.Language.get('test-value')}</span>
				</div>
				
			</div>
		);
	}	
}