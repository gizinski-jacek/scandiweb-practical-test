import { PureComponent } from 'react';

import '../styles/ProgressBar.styles.scss';

class ProgressBar extends PureComponent {
	render() {
		const { steps, checkoutStep } = this.props;
		const success = checkoutStep === steps[steps.length - 1].name;
		return (
			<div className='progress-bar'>
				{steps &&
					steps.map((item, index) => {
						if (steps.length - 1 === index) {
							return;
						}
						const className = item.displayValue.toLowerCase();
						return (
							<>
								<div
									className={`${className}-bar-container ${
										item.name === checkoutStep || success ? 'active' : ''
									}`}
								>
									<div
										className={`${className}-bar ${
											item.name === checkoutStep || success ? 'active' : ''
										}`}
									/>
								</div>
								<div className={`${className}-container`}>
									<div
										className={`${className}-info ${
											item.name === checkoutStep || success ? 'active' : ''
										}`}
									>
										<span
											className={`${className}-count ${
												item.name === checkoutStep || success ? 'active' : ''
											}`}
										>
											{index + 1}
										</span>
										<span className={`${className}-label`}>
											{item.displayValue}
										</span>
									</div>
								</div>
							</>
						);
					})}
				<div className={`success-bar-container ${success ? 'active' : ''}`}>
					<div className={`success-bar ${success ? 'active' : ''}`} />
				</div>
			</div>
		);
	}
}

export default ProgressBar;
